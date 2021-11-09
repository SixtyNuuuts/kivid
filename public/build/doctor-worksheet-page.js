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
          numberOfRepetitions: 1,
          numberOfSeries: 1,
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
      btnLoadingValidVideosSelection: false
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
          _this4.max = 100;
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
        { attrs: { id: "exercises-playlist" } },
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
                              class: { active: exercise.optionActive }
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
                                    "vs-select",
                                    {
                                      class: { filled: exercise.option },
                                      attrs: { placeholder: "Sélectionner" },
                                      model: {
                                        value: exercise.option,
                                        callback: function($$v) {
                                          _vm.$set(exercise, "option", $$v)
                                        },
                                        expression: "exercise.option"
                                      }
                                    },
                                    _vm._l(exercise.video.options, function(
                                      option,
                                      i
                                    ) {
                                      return _c(
                                        "vs-option",
                                        {
                                          key: i,
                                          attrs: {
                                            label: option.name,
                                            value: option.name
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(option.name) +
                                              "\n                                    "
                                          )
                                        ]
                                      )
                                    }),
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
                    _c("vs-pagination", {
                      attrs: {
                        "buttons-dotted": "",
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
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "count-page" }, [
                      _vm._v("\n                    Page : "),
                      _c("b", [_vm._v(_vm._s(_vm.page))])
                    ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdG9yLXdvcmtzaGVldC1wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7QUFDQUEsK0NBQUEsQ0FBUUcsaURBQVIsRUFBa0JELDhDQUFsQixHQUVBOztBQUNBO0FBQ0FGLCtDQUFBLENBQVFLLCtDQUFSLEdBRUE7O0FBQ0E7QUFDQUwsK0NBQUEsQ0FBUU0sb0RBQVI7QUFFQSxJQUFJTiwyQ0FBSixDQUFRO0FBQ0pPLEVBQUFBLE1BQU0sRUFBRSxnQkFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1AsMERBQUQsQ0FBTDtBQUFBO0FBREwsQ0FBUixFQUVHUSxNQUZILENBRVUsTUFGVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ29KQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7QUFJQTtBQUNBO0FBREEsR0FKQTtBQU9BLE1BUEEsa0JBT0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsZ0JBRkE7QUFHQSxzQkFIQTtBQUlBLHVCQUpBO0FBS0EsK0JBTEE7QUFNQTtBQU5BO0FBUUEsR0FoQkE7QUFpQkE7QUFDQSx5QkFEQSxtQ0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBTkE7QUFPQSx1QkFQQSxpQ0FPQTtBQUFBOztBQUNBLDBDQUNBO0FBQUEsZUFDQSxPQUNBLFNBREEsQ0FDQSxLQURBLEVBRUEsT0FGQSxDQUVBLGtCQUZBLEVBRUEsRUFGQSxFQUdBLFdBSEEsR0FJQSxRQUpBLENBS0EsYUFDQSxTQURBLENBQ0EsS0FEQSxFQUVBLE9B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O0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pELDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtCQUErQjtBQUN6RDtBQUNBLGdDQUFnQyx1QkFBdUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSx3Q0FBd0MsMEJBQTBCO0FBQ2xFLHdDQUF3QyxnQ0FBZ0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBLGtDQUFrQyxNQUFNLDJCQUEyQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL3dvcmtzaGVldC1wYWdlLmpzIiwid2VicGFjazovLy9hc3NldHMvdnVlL2NvbXBvbmVudHMvU2VsZWN0UGFydE9mQm9keS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya1NoZWV0UGFnZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT81NDNhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlP2I3OGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT9jMGViIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlPzZjMzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZT84ZTU2Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbXBvbmVudHMvVGFnUGFydE9mQm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya1NoZWV0UGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9MaWJyYXJ5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2RvY3Rvci9Xb3Jrc2hlZXQvRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9QbGF5ZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT81ZmExIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZT85OTRmIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlPzYwNmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT8wZWQ0Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlP2I2NjQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZT8wYjI3Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT8yYjVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlPzY3MmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT82MWI5Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlP2FjNGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZT8yZDlhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT9lMzg4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZT81OTk4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlPzA5YzMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT8wYjUwIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlPzA4ZGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZT8yZGM4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT84NjBmIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZT8yMDA5Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtTaGVldFBhZ2UudnVlPzBhMWYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT80ZDc4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC9WaWRlb0xpYnJhcnkudnVlPzIyN2EiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZT8wOGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFdvcmtTaGVldFBhZ2UgZnJvbSAnLi9Xb3JrU2hlZXRQYWdlLnZ1ZSdcclxuXHJcbi8vIEF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gJ3Z1ZS1heGlvcydcclxuVnVlLnVzZShWdWVBeGlvcywgYXhpb3MpXHJcblxyXG4vLyBWdWVzYXggKFVYIGxpYilcclxuaW1wb3J0IFZ1ZXNheCBmcm9tICd2dWVzYXgnXHJcblZ1ZS51c2UoVnVlc2F4KVxyXG5cclxuLy8gWW91dHViZSBwbGF5ZXJcclxuaW1wb3J0IFZ1ZVlvdXR1YmUgZnJvbSAndnVlLXlvdXR1YmUnXHJcblZ1ZS51c2UoVnVlWW91dHViZSlcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgcmVuZGVyOiBoID0+IGgoV29ya1NoZWV0UGFnZSlcclxufSkuJG1vdW50KCcjdnVlJylcclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiB2LWNsaWNrLW91dHNpZGU9XCJoaWRlU2VsZWN0Qm94XCIgY2xhc3M9XCJzZWxlY3QtZmlsdGVyXCI+XHJcbiAgICAgICAgPGRpdiB2LXNob3c9XCIhbG9hZGluZ1BhcnRzT2ZCb2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHYtc2hvdz1cImdldFBhcnRPZkJvZHlTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBhcnRvZmJvZHktc2VsZWN0ZWQgcGFydC1vZi1ib2R5XCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInJlc2V0U2VsZWN0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gJ3BpZWQnXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3BpZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBQaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tcGllZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gJ2phbWJlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9qYW1iZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIEphbWJlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tamFtYmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdicmFzJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9icmFzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgQnJhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWJyYXNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdtYWluJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9tYWluLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgTWFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLW1haW5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdlcGF1bGUnXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2VwYXVsZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIMOJcGF1bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1lcGF1bGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09ICdkb3MnXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2Rvcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIERvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWRvc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gJ2NlcnZpY2FsZXMnXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2NlcnZpY2FsZXMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBDZXJ2aWNhbGVzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tY2VydmljYWxlc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gJ2xvbWJhaXJlcydcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbG9tYmFpcmVzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgTG9tYmFpcmVzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tbG9tYmFpcmVzXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSAndGhvcmFjaXF1ZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvdGhvcmFjaXF1ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIFRob3JhY2lxdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi10aG9yYWNpcXVlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgd3Nud1wiPnt7IGdldFBhcnRPZkJvZHlTZWxlY3RlZC5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB2LXNob3c9XCIhZ2V0UGFydE9mQm9keVNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0Qm94ID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICBAa2V5dXA9XCJzZWxlY3RCb3hXaXRoVGhyb3R0bGVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXJ0b2Zib2R5LWNob2ljZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnYi1yLWItemVybyc6IHNlbGVjdEJveCB9XCJcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCIhc2VsZWN0Qm94ID8gJ1BhcnRpZSBkdSBjb3JwcycgOiAnUmVjaGVyY2hleidcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFycm93LXRvZ2dsZS1ib3hcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IHNlbGVjdEJveCB9XCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZVNlbGVjdEJveFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidnMtaWNvbi1hcnJvd1wiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJoZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJzZWxlY3RCb3hcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0LWJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZm9jdXNJbnB1dFNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIHYtaWY9XCJwYXJ0c09mQm9keUZpbHRlcmVkLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIocGFydCwgaSkgaW4gcGFydHNPZkJvZHlGaWx0ZXJlZFwiIDprZXk9XCJpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwYXJ0LW9mLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNlbGVjdFBhcnRPZkJvZHkocGFydClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhcnQuaWNvbiA9PT0gJ3BpZWQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9waWVkLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIFBpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tcGllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICdqYW1iZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2phbWJlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIEphbWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWphbWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhcnQuaWNvbiA9PT0gJ2JyYXMnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9icmFzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIEJyYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tYnJhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICdtYWluJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbWFpbi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBNYWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLW1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicGFydC5pY29uID09PSAnZXBhdWxlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvZXBhdWxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIMOJcGF1bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tZXBhdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhcnQuaWNvbiA9PT0gJ2RvcydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2Rvcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBEb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInBhcnQuaWNvbiA9PT0gJ2NlcnZpY2FsZXMnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9jZXJ2aWNhbGVzLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkljb25lIENlcnZpY2FsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tY2VydmljYWxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICdsb21iYWlyZXMnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9sb21iYWlyZXMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiSWNvbmUgTG9tYmFpcmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWxvbWJhaXJlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYXJ0Lmljb24gPT09ICd0aG9yYWNpcXVlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvdGhvcmFjaXF1ZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJJY29uZSBUaG9yYWNpcXVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLXRob3JhY2lxdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IHdzbndcIj57eyBwYXJ0Lm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5vdC1mb3VuZC1wb2JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1Y3VuZSBwYXJ0aWUgZHUgY29ycHMgbmUgY29ycmVzcG9uZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtc2hvdz1cImxvYWRpbmdQYXJ0c09mQm9keVwiIGNsYXNzPVwibG9hZGluZy1ncmF5IGxvYWRpbmctcG9iXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSBcInZ1ZS1jbGljay1vdXRzaWRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHBhcnRPZkJvZHk6IE9iamVjdCxcclxuICAgIH0sXHJcbiAgICBkaXJlY3RpdmVzOiB7XHJcbiAgICAgICAgQ2xpY2tPdXRzaWRlLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFydHNPZkJvZHk6IFtdLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdEJveDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdElucHV0OiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nUGFydHNPZkJvZHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RCb3hUaHJvdHRsZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIGdldFBhcnRPZkJvZHlTZWxlY3RlZCgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcnRPZkJvZHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnRPZkJvZHk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJ0c09mQm9keUZpbHRlcmVkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRQb0JOYW1lQnlBbHBoYWJldChcclxuICAgICAgICAgICAgICAgIHRoaXMucGFydHNPZkJvZHkuZmlsdGVyKChwKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHAubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubm9ybWFsaXplKFwiTkZEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ub3JtYWxpemUoXCJORkRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9nZ2xlU2VsZWN0Qm94KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJveCA9ICF0aGlzLnNlbGVjdEJveDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFydE9mQm9keSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0Qm94KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSW5wdXRTZWxlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZVNlbGVjdEJveCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdFBhcnRPZkJvZHkocGFydG9mYm9keSkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwicGFydE9mQm9keVNlbGVjdGVkXCIsIHBhcnRvZmJvZHkpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVTZWxlY3RCb3goKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0U2VsZWN0KCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwicGFydE9mQm9keVJlc2V0XCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJ0b2Zib2R5LWNob2ljZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNJbnB1dFNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9jdXNJbnB1dFNlbGVjdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0Qm94V2l0aFRocm90dGxlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0Qm94VGhyb3R0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Qm94VGhyb3R0bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RCb3hcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCb3hUaHJvdHRsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNvcnRlZFBvQk5hbWVCeUFscGhhYmV0KGFycmF5KSB7XHJcbiAgICAgICAgICAgIGFycmF5LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdQYXJ0c09mQm9keSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgLmdldChgL2dldC9wYXJ0cy1vZi1ib2R5YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRzT2ZCb2R5ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdQYXJ0c09mQm9keSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJ0b2Zib2R5LWNob2ljZS1zZWxlY3RcIik7XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuQGltcG9ydCBcIi4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uc2VsZWN0LWZpbHRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuXHJcbiAgICAubG9hZGluZy1wb2Ige1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDQuOHJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgJi5iLXItYi16ZXJvIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQuOXJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxLjRyZW0gMS43cmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQuM3JlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG4gICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRncmF5LWRhcms7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3ctdG9nZ2xlLWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMC42cmVtO1xyXG4gICAgICAgIHJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgd2lkdGg6IDMuOHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDMuNHJlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgJi52cy1pY29uLWFycm93IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjJlNTQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDYwMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tdnMtdGV4dCksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXZzLXRleHQpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEuOXJlbTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0LWJveCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNC45cmVtO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogNzc3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMC41cmVtIDAuNXJlbTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggLTVweCByZ2JhKDQ0LCAxMSwgMTEsIDAuMTUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjE5LCAxLjAzLCAwLjc5LCAxLjAyKTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyNnJlbTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEuN3JlbTtcclxuXHJcbiAgICAgICAgLm5vdC1mb3VuZC1wb2Ige1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlRW50ZXIgMC41cztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wYXJ0b2Zib2R5LXNlbGVjdGVkIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDJyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0LjZyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMS42cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgJGdyYXktbWlkZGxlO1xyXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMC40cmVtKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcnQtb2YtYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlZWVlODtcclxuICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkZjZmNDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcblxyXG4gICAgICAgICAgICAmLmljb24tcGllZCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLWphbWJlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMHJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS43NXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLWJyYXMge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuaWNvbi1tYWluIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmljb24tZXBhdWxlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmljb24tZG9zIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmljb24tY2VydmljYWxlcyB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLWxvbWJhaXJlcyB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDByZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5pY29uLXRob3JhY2lxdWUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QtYm94IHtcclxuICAgICAgICAucGFydC1vZi1ib2R5IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMS4xcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8dnMtYnV0dG9uIHNpemU9XCJtaW5pXCIgY2xhc3M9XCJ0YWcgcGFydC1vZi1ib2R5XCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICB2LWlmPVwicGFydE9mQm9keS5pY29uID09PSAncGllZCdcIlxyXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3BpZWQuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgUGllZFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1waWVkXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ2phbWJlJ1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvamFtYmUuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgSmFtYmVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tamFtYmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICB2LWlmPVwicGFydE9mQm9keS5pY29uID09PSAnYnJhcydcIlxyXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2JyYXMuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgQnJhc1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1icmFzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ21haW4nXCJcclxuICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9tYWluLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIE1haW5cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tbWFpblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHYtaWY9XCJwYXJ0T2ZCb2R5Lmljb24gPT09ICdlcGF1bGUnXCJcclxuICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9lcGF1bGUuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgw4lwYXVsZVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1lcGF1bGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICB2LWlmPVwicGFydE9mQm9keS5pY29uID09PSAnZG9zJ1wiXHJcbiAgICAgICAgICAgIHNyYz1cIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvZG9zLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIERvc1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1kb3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICB2LWlmPVwicGFydE9mQm9keS5pY29uID09PSAnY2VydmljYWxlcydcIlxyXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2NlcnZpY2FsZXMuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiSWNvbmUgQ2VydmljYWxlc1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1jZXJ2aWNhbGVzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ2xvbWJhaXJlcydcIlxyXG4gICAgICAgICAgICBzcmM9XCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2xvbWJhaXJlcy5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJJY29uZSBMb21iYWlyZXNcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tbG9tYmFpcmVzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgdi1pZj1cInBhcnRPZkJvZHkuaWNvbiA9PT0gJ3Rob3JhY2lxdWUnXCJcclxuICAgICAgICAgICAgc3JjPVwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS90aG9yYWNpcXVlLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkljb25lIFRob3JhY2lxdWVcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tdGhvcmFjaXF1ZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgd3Nud1wiPnt7IHBhcnRPZkJvZHkubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICA8aSBjbGFzcz1cImtpdi1jb21wbGV0ZWQgaWNvbi0yMlwiPjwvaT5cclxuICAgIDwvdnMtYnV0dG9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBwYXJ0T2ZCb2R5OiBPYmplY3QsXHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJ3b3Jrc2hlZXRcIj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJsb2FkaW5nLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBoMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHBhcnQtb2YtYm9keVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJwYXRpZW50XCIgY2xhc3M9XCJwcmVzY3JpLWZvci1wYXRpZW50LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWRlcmljdFRvRGFzaGJvYXJkKClcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXNjcmktZm9yLXBhdGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+cHJlc2NyaXB0aW9uIDxzcGFuPnBvdXI8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1hdmF0YXIgc2l6ZT1cIjI2XCIgY2xhc3M9XCJ1c2VyLWF2YXRhclwiIGNpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhdGllbnQuYXZhdGFyVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcvaW1nL2F2YXRhci1kZWZhdWx0LnN2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJgQXZhdGFyIGRlICR7cGF0aWVudC5maXJzdG5hbWV9ICR7cGF0aWVudC5sYXN0bmFtZX1gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGdldFVzZXJOYW1lKHBhdGllbnQpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgPT09IGFjdGlvblwiIGNsYXNzPVwidGl0bGUtdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgaGlkZGVuOiBwYXRpZW50IH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVkZXJpY3RUb0Rhc2hib2FyZCgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt7IGdldFdvcmtzaGVldC50aXRsZSB9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhZ1BhcnRPZkJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFdvcmtzaGVldC5wYXJ0T2ZCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnBhcnRPZkJvZHk9XCJnZXRXb3Jrc2hlZXQucGFydE9mQm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwia2l2LWFycm93LWxlZnQgaWNvbi0zMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgaGlkZGVuOiBwYXRpZW50IH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZWRlcmljdFRvRGFzaGJvYXJkKClcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ3b3Jrc2hlZXQudGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIlRpdHJlIGRlIGxhIGZpY2hlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJ0aXRsZUlzRW1wdHlNZXNzYWdlID0gbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInRpdGxlSXNFbXB0eU1lc3NhZ2VcIiAjbWVzc2FnZS1kYW5nZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0aXRsZUlzRW1wdHlNZXNzYWdlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIid2b2lyJyAhPT0gYWN0aW9uXCIgY2xhc3M9XCJ3b3Jrc2hlZXQtcGFyYW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIndvcmtzaGVldC1kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VkaXRpb24nID09PSBhY3Rpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lmV29ya3NoZWV0U2Vzc2lvbnNFeGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VkaXRpb24nID09PSBhY3Rpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lmV29ya3NoZWV0U2Vzc2lvbnNFeGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXZlcnQtc2Vzc2lvbnMtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1pbmZvIGljb24tMTdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3VzIG5lIHBvdXZleiBwbHVzIG1vZGlmaWVyIGxhIGR1csOpZSBkZSBsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNjcmlwdGlvbiBjYXIgbGUgcGF0aWVudCBhIGTDqWrDoCBkw6ltYXJyw6kgc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29ya3NoZWV0LXRpbWluZy1wZXJ3ZWVrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jYWxlbmRhciBpY29uLTEwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIndvcmtzaGVldC5wZXJXZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcldlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiWCBwYXIgc2VtLiAobWF4OiA3KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJZkR1cmF0aW9uVmFsdWVJc0VtcHR5T3JOdWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LnBlcldlZWssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC10aW1pbmctcGVyZGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1jYWxlbmRhciBpY29uLTEwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIndvcmtzaGVldC5wZXJEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGVyRGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIlggcGFyIGpvdXIgKG1heDogMylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBibHVyPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrSWZEdXJhdGlvblZhbHVlSXNFbXB0eU9yTnVsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldC5wZXJEYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmtzaGVldC1wZXJpb2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LWNsb2NrIGljb24tMTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwid29ya3NoZWV0LmR1cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImR1cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIkR1csOpZSBlbiBzZW0uIChtYXg6IDUyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJZkR1cmF0aW9uVmFsdWVJc0VtcHR5T3JOdWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QtZmlsdGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RQYXJ0T2ZCb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFydE9mQm9keT1cIndvcmtzaGVldC5wYXJ0T2ZCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYXJ0T2ZCb2R5U2VsZWN0ZWQ9XCJzZXRQYXJ0T2ZCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYXJ0T2ZCb2R5UmVzZXQ9XCJyZXNldFBvQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInBhcnRPZkJvZHlJc0VtcHR5TWVzc2FnZVwiIGNsYXNzPVwiZXJyb3ItbWVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcGFydE9mQm9keUlzRW1wdHlNZXNzYWdlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cImV4ZXJjaXNlcy1wbGF5bGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPEV4ZXJjaXNlc1BsYXlsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgOmRvY3Rvcj1cImRvY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA6YWN0aW9uPVwiYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICA6d29ya3NoZWV0PVwiZ2V0V29ya3NoZWV0XCJcclxuICAgICAgICAgICAgICAgICAgICA6ZXhlcmNpc2VzPVwiZ2V0RXhlcmNpc2VzXCJcclxuICAgICAgICAgICAgICAgICAgICA6bG9hZGluZ1ZpZGVvcz1cImxvYWRpbmdWaWRlb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIDp2aWRlb3M9XCJ2aWRlb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjc3JmVG9rZW5SZW1vdmVFeGVyY2lzZT1cImNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0bi12YWxpZFwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOlxyXG4gICAgICAgICAgICAgICAgICAgIGJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQgfHxcclxuICAgICAgICAgICAgICAgICAgICBidG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgIHYtaWY9XCInZWRpdGlvbicgPT09IGFjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZEVkaXRcIlxyXG4gICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJidG5Mb2FkaW5nVmFsaWRFZGl0V29ya3NoZWV0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgVmFsaWRlciBsZXMgbW9kaWZpY2F0aW9uc1xyXG4gICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdi1pZj1cIidjcmVhdGlvbicgPT09IGFjdGlvbiAmJiAhcGF0aWVudFwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ2YWxpZENyZWF0ZVwiXHJcbiAgICAgICAgICAgICAgICA6bG9hZGluZz1cImJ0bkxvYWRpbmdWYWxpZENyZWF0ZVdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIENyw6llciBsYSBmaWNoZVxyXG4gICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdi1pZj1cIidjcmVhdGlvbicgPT09IGFjdGlvbiAmJiBwYXRpZW50XCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkQ3JlYXRlXCJcclxuICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwiYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgQ3LDqWVyIGxhIHByZXNjcmlwdGlvblxyXG4gICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCBmIGZyb20gXCIuLi9zZXJ2aWNlcy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgRXhlcmNpc2VzUGxheWxpc3QgZnJvbSBcIi4vV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZVwiO1xyXG5pbXBvcnQgVGFnUGFydE9mQm9keSBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWdQYXJ0T2ZCb2R5LnZ1ZVwiO1xyXG5pbXBvcnQgU2VsZWN0UGFydE9mQm9keSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEV4ZXJjaXNlc1BsYXlsaXN0LFxyXG4gICAgICAgIFNlbGVjdFBhcnRPZkJvZHksXHJcbiAgICAgICAgVGFnUGFydE9mQm9keSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICB3b3Jrc2hlZXRJZDogbnVsbCxcclxuICAgICAgICAgICAgd29ya3NoZWV0OiB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICBwZXJEYXk6IDEsXHJcbiAgICAgICAgICAgICAgICBwZXJXZWVrOiAxLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4ZXJjaXNlczogW10sXHJcbiAgICAgICAgICAgIHBhdGllbnQ6IG51bGwsXHJcbiAgICAgICAgICAgIGxvYWRpbmdWaWRlb3M6IGZhbHNlLFxyXG4gICAgICAgICAgICB2aWRlb3M6IFtdLFxyXG4gICAgICAgICAgICBjc3JmVG9rZW5DcmVhdGVXb3Jrc2hlZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGNzcmZUb2tlbkVkaXRXb3Jrc2hlZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlOiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbWF4RHVyYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MixcclxuICAgICAgICAgICAgICAgIHBlckRheTogMyxcclxuICAgICAgICAgICAgICAgIHBlcldlZWs6IDcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBidG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjaGVja0lmV29ya3NoZWV0U2Vzc2lvbnNFeGlzdDogbnVsbCxcclxuICAgICAgICAgICAgdGl0bGVJc0VtcHR5TWVzc2FnZTogbnVsbCxcclxuICAgICAgICAgICAgcGFydE9mQm9keUlzRW1wdHlNZXNzYWdlOiBudWxsLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRXb3Jrc2hlZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndvcmtzaGVldDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEV4ZXJjaXNlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlcmNpc2VzO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldFBhcnRPZkJvZHkocGFydE9mQm9keSkge1xyXG4gICAgICAgICAgICB0aGlzLndvcmtzaGVldC5wYXJ0T2ZCb2R5ID0gcGFydE9mQm9keTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0T2ZCb2R5SXNFbXB0eU1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXRQb0IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LnBhcnRPZkJvZHkgPSBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkZXJpY3RUb0Rhc2hib2FyZCgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2Rhc2hib2FyZGA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja0lmRHVyYXRpb25WYWx1ZUlzRW1wdHlPck51bGwoZHVyYXRpb25WYWx1ZSwgZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgZHVyYXRpb25UeXBlID0gZXZlbnQudGFyZ2V0LmlkO1xyXG5cclxuICAgICAgICAgICAgaWYgKFwidnMtaW5wdXQtLWR1cmF0aW9uXCIgPT09IGR1cmF0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFwiXCIgPT09IGR1cmF0aW9uVmFsdWUgfHwgbnVsbCA9PT0gZHVyYXRpb25WYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LmR1cmF0aW9uID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvblZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LmR1cmF0aW9uID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvblZhbHVlID4gdGhpcy5tYXhEdXJhdGlvbi5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LmR1cmF0aW9uID0gdGhpcy5tYXhEdXJhdGlvbi5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwidnMtaW5wdXQtLXBlckRheVwiID09PSBkdXJhdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcIlwiID09PSBkdXJhdGlvblZhbHVlIHx8IG51bGwgPT09IGR1cmF0aW9uVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzaGVldC5wZXJEYXkgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uVmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGVyRGF5ID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvblZhbHVlID4gdGhpcy5tYXhEdXJhdGlvbi5wZXJEYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzaGVldC5wZXJEYXkgPSB0aGlzLm1heER1cmF0aW9uLnBlckRheTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFwidnMtaW5wdXQtLXBlcldlZWtcIiA9PT0gZHVyYXRpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gZHVyYXRpb25WYWx1ZSB8fCBudWxsID09PSBkdXJhdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGVyV2VlayA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb25WYWx1ZSA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndvcmtzaGVldC5wZXJXZWVrID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvblZhbHVlID4gdGhpcy5tYXhEdXJhdGlvbi5wZXJXZWVrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGVyV2VlayA9IHRoaXMubWF4RHVyYXRpb24ucGVyV2VlaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tJZkVtcHR5KCkge1xyXG4gICAgICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLndvcmtzaGVldC5wYXJ0T2ZCb2R5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRPZkJvZHlJc0VtcHR5TWVzc2FnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJWb3VzIGRldmV6IGNob2lzaXIgdW5lIHBhcnRpZSBkdSBjb3Jwc1wiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXJyZXVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0T2ZCb2R5SXNFbXB0eU1lc3NhZ2UgKyBcIiBwb3VyIGxhIGZpY2hlLlwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy53b3Jrc2hlZXQudGl0bGUgPT09IFwiXCIgfHwgdGhpcy53b3Jrc2hlZXQudGl0bGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVJc0VtcHR5TWVzc2FnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJWb3VzIGRldmV6IGVudHJlciB1biB0aXRyZSBwb3VyIGxhIGZpY2hlLlwiO1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFwiRXJyZXVyXCIsIHRoaXMudGl0bGVJc0VtcHR5TWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leGVyY2lzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFcnJldXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkxhIGZpY2hlIG5lIHBldXQgcGFzIMOqdHJlIHZpZGUsIHZvdXMgZGV2ZXogYWpvdXRlciBkZXMgdmlkw6lvcy5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRFZGl0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNOb3RFbXB0eSA9IHRoaXMuY2hlY2tJZkVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOb3RFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2VkaXQvd29ya3NoZWV0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdG9rZW46IHRoaXMuY3NyZlRva2VuRWRpdFdvcmtzaGVldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya3NoZWV0SWQ6IHRoaXMud29ya3NoZWV0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy53b3Jrc2hlZXQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRPZkJvZHlJZDogdGhpcy53b3Jrc2hlZXQucGFydE9mQm9keS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMud29ya3NoZWV0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJXZWVrOiB0aGlzLndvcmtzaGVldC5wZXJXZWVrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJEYXk6IHRoaXMud29ya3NoZWV0LnBlckRheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VzOiB0aGlzLmV4ZXJjaXNlcyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRWRpdGlvbiBkZSBsYSBwcmVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGEgcHJlc2NyaXB0aW9uIGEgYmllbiDDqXTDqSBtb2RpZmnDqWVgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVkaXRpb24gZGUgbGEgZmljaGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGF0aWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBgL2RvY3Rvci8ke3RoaXMuZG9jdG9yLmlkfS9kYXNoYm9hcmRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vZGFzaGJvYXJkLz90YWI9d3NgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkRWRpdFdvcmtzaGVldCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkRWRpdFdvcmtzaGVldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZENyZWF0ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNOb3RFbXB0eSA9IHRoaXMuY2hlY2tJZkVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOb3RFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2NyZWF0ZS93b3Jrc2hlZXRgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90b2tlbjogdGhpcy5jc3JmVG9rZW5DcmVhdGVXb3Jrc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldElkOiB0aGlzLndvcmtzaGVldC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudElkOiB0aGlzLnBhdGllbnQgPyB0aGlzLnBhdGllbnQuaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy53b3Jrc2hlZXQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRPZkJvZHlJZDogdGhpcy53b3Jrc2hlZXQucGFydE9mQm9keS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHRoaXMud29ya3NoZWV0LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJXZWVrOiB0aGlzLndvcmtzaGVldC5wZXJXZWVrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJEYXk6IHRoaXMud29ya3NoZWV0LnBlckRheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VzOiB0aGlzLmV4ZXJjaXNlcyxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMud29ya3NoZWV0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3LDqWF0aW9uIGR1IG1vZMOobGUgZGUgZmljaGUgKGlkZW50aXF1ZSBzYW5zIGxlIHBhdGllbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucG9zdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2NyZWF0ZS93b3Jrc2hlZXRgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90b2tlbjogdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3NyZlRva2VuQ3JlYXRlV29ya3NoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldElkOiB0aGlzLndvcmtzaGVldC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMud29ya3NoZWV0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRPZkJvZHlJZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQucGFydE9mQm9keS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy53b3Jrc2hlZXQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyV2VlazogdGhpcy53b3Jrc2hlZXQucGVyV2VlayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJEYXk6IHRoaXMud29ya3NoZWV0LnBlckRheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZXM6IHRoaXMuZXhlcmNpc2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNyw6lhdGlvbiBkZSBsYSBwcmVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGEgZmljaGUgPHN0cm9uZz4gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9zdHJvbmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgw6l0w6kgcHJlc2NyaXRlIMOgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdldFVzZXJOYW1lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfTwvc3Ryb25nPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmdWYWxpZENyZWF0ZVdvcmtzaGVldCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2Rhc2hib2FyZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYub3BlbkVycm9yTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRXJyZXVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDcsOpYXRpb24gZGUgbGEgcHJlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBMYSBmaWNoZSA8c3Ryb25nPiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Ryb25nPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSDDqXTDqSBwcmVzY3JpdGUgw6AgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdldFVzZXJOYW1lKHRoaXMucGF0aWVudCl9PC9zdHJvbmc+YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2Rhc2hib2FyZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLm9wZW5TdWNjZXNzTm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3LDqWF0aW9uIGRlIGxhIGZpY2hlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vZGFzaGJvYXJkLz90YWI9d3NgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuRXJyb3JOb3RpZmljYXRpb24oXCJFcnJldXJcIiwgZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFVzZXJOYW1lKHVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGYuZ2V0VXNlck5hbWUodXNlcik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuJHZzID0gdGhpcy4kdnM7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidnVlRGF0YVwiKS5pbm5lckhUTUwpO1xyXG5cclxuICAgICAgICB0aGlzLmRvY3RvciA9IGRhdGEuZG9jdG9yO1xyXG4gICAgICAgIHRoaXMud29ya3NoZWV0SWQgPSBkYXRhLndvcmtzaGVldElkO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZGF0YS5hY3Rpb247XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gZGF0YS5wYXRpZW50O1xyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuQ3JlYXRlV29ya3NoZWV0ID0gZGF0YS5jc3JmVG9rZW5DcmVhdGVXb3Jrc2hlZXQ7XHJcbiAgICAgICAgdGhpcy5jc3JmVG9rZW5FZGl0V29ya3NoZWV0ID0gZGF0YS5jc3JmVG9rZW5FZGl0V29ya3NoZWV0O1xyXG4gICAgICAgIHRoaXMuY3NyZlRva2VuUmVtb3ZlRXhlcmNpc2UgPSBkYXRhLmNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy53b3Jrc2hlZXRJZCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgYC9kb2N0b3IvJHt0aGlzLmRvY3Rvci5pZH0vZ2V0L3dvcmtzaGVldC8ke3RoaXMud29ya3NoZWV0SWR9YFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hlZXQgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24gPT09IFwiY3JlYXRpb25cIiAmJiAhdGhpcy5wYXRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud29ya3NoZWV0LnRpdGxlID0gYENvcGllIGRlICR7dGhpcy53b3Jrc2hlZXQudGl0bGV9YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2dldC9leGVyY2lzZXMvJHt0aGlzLndvcmtzaGVldElkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhlcmNpc2VzID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4ZXJjaXNlcyA9IHRoaXMuZXhlcmNpc2VzLm1hcCgoZXhlcmNpc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5leGVyY2lzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiBleGVyY2lzZS5vcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXhlcmNpc2Uub3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBvOiBleGVyY2lzZS50ZW1wbyA/IGV4ZXJjaXNlLnRlbXBvIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZDogZXhlcmNpc2UuaG9sZCA/IGV4ZXJjaXNlLmhvbGQgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25BY3RpdmU6IGV4ZXJjaXNlLm9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wb0FjdGl2ZTogZXhlcmNpc2UudGVtcG8gPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGRBY3RpdmU6IGV4ZXJjaXNlLmhvbGQgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZWRpdGlvblwiID09PSB0aGlzLmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2NoZWNrL3dvcmtzaGVldC1zZXNzaW9ucy1leGlzdC8ke3RoaXMud29ya3NoZWV0SWR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0lmV29ya3NoZWV0U2Vzc2lvbnNFeGlzdCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3MgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0XCIgPT09IHR5cGVvZiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVmlkZW9zID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAuZ2V0KGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L2dldC92aWRlb3NgKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1ZpZGVvcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9zID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzID1cclxuICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1ZpZGVvcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCIuLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuI3dvcmtzaGVldCB7XHJcbiAgICAucHJlc2NyaS1mb3ItcGF0aWVudC1jb250ZW50IHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAyLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJlc2NyaS1mb3ItcGF0aWVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjdyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjFyZW07XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwLjRyZW0gMC43cmVtIHJnYmEoMTQ4LCA5NiwgNzcsIDAuMDQpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMuNHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTAuOHJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxOC4zcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNC43cmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNnJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YWExYjc7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXItYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51c2VyLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUxdnc7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NnZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjZ2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDY5MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3N3Z3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICYubG9hZGluZy1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMyU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaDEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnBhcnQtb2YtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZzLWlucHV0LXBhcmVudCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAudnMtaW5wdXQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dF9fbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDg5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0X19sYWJlbC0taGlkZGVuLnZzLWlucHV0X19sYWJlbC0tcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMC44NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlLXZpZXcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjdyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgaDEsXHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwdnc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjdyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnZzLWlucHV0LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0X19sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMS42cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC53b3Jrc2hlZXQtcGFyYW1zIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjlyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLndvcmtzaGVldC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLndvcmtzaGVldC1wZXJpb2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53b3Jrc2hlZXQtdGltaW5nLXBlcmRheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLndvcmtzaGVldC10aW1pbmctcGVyd2VlayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYXZlcnQtc2Vzc2lvbnMtc3RhcnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE0JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmLCAwIDAgMC4zcmVtICNmZmYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAgMC4zcmVtICNmZmYsIDAgMCAwLjNyZW0gI2ZmZiwgMCAwIDAuM3JlbSAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuMDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDcwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuM3JlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0LWZpbHRlci1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wYXJ0LW9mLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5lcnJvci1tZXNzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgI2V4ZXJjaXNlcy1wbGF5bGlzdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0LjVyZW07XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tdmFsaWQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxMTExO1xyXG4gICAgICAgIGJvdHRvbTogMi4zcmVtO1xyXG4gICAgICAgIHJpZ2h0OiAzcmVtO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudnMtYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMC44cmVtIDEuOHJlbSByZ2JhKDc1LCA2MSwgNTYsIDAuNTUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52cy1idXR0b25fX2xvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhlcmNpc2VzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlIGxvYWRpbmctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHRodW1ibmFpbC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBoMiB3LTQ1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzLXJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHNlcmllcyB3LTI1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSByZXBzIHctMTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBvcHRpb24gdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSB0ZW1wbyB3LTE1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGhvbGQgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgdGl0bGUgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBpbnB1dFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlIGxvYWRpbmctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHRodW1ibmFpbC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBoMiB3LTM1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzLXJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHNlcmllcyB3LTE1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSByZXBzIHctMjVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBvcHRpb24gdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSB0ZW1wbyB3LTE1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGhvbGQgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgdGl0bGUgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBpbnB1dFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlIGxvYWRpbmctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHRodW1ibmFpbC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBoMiB3LTQ1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzLXJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IHNlcmllcyB3LTE1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSByZXBzIHctMTVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBvcHRpb24gdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSB0ZW1wbyB3LTE1XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1ncmF5IGhvbGQgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWdyYXkgdGl0bGUgdy0yNVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZ3JheSBpbnB1dFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoZXhlcmNpc2UsIGkpIGluIGdldEV4ZXJjaXNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhlcmNpc2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHVtYm5haWwtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgIT09IGFjdGlvblwiIGNsYXNzPVwiYnRucy1hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJleGVyY2lzZS5wb3NpdGlvbiAhPSAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidXBQb3NpdGlvbihleGVyY2lzZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNvcnQtdXBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnBvc2l0aW9uICE9IGdldEV4ZXJjaXNlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZG93blBvc2l0aW9uKGV4ZXJjaXNlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc29ydC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXBsYXlsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uIEBjbGljaz1cIm9wZW5WaWRlb1BsYXllcihleGVyY2lzZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gVm9pcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0aHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtleGVyY2lzZS52aWRlby50aHVtYm5haWxVcmx9JylgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBleGVyY2lzZS52aWRlby5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiJ3ZvaXInICE9PSBhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVtb3ZlLWV4ZXJjaXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVFeGVyY2lzZShleGVyY2lzZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgIT09IGFjdGlvblwiIGNsYXNzPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmllcy1yZXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1zZXJpZXMgaWNvbi0xOFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLWlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwtcGxhY2Vob2xkZXI9XCJOYiBkZSBzw6lyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGJsdXI9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0lmVmFsdWVJc0VtcHR5T3JOdWxsKGV4ZXJjaXNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtcmVwcyBpY29uLTE5XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiTmIgZGUgcsOpcMOpdGl0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBibHVyPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tJZlZhbHVlSXNFbXB0eU9yTnVsbChleGVyY2lzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgIT09IGFjdGlvblwiIGNsYXNzPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwib3B0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogZXhlcmNpc2Uub3B0aW9uQWN0aXZlIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk9wdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtc3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJleGVyY2lzZS5vcHRpb25BY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm9wdGlvbkFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb3B0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImtpdi1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIWV4ZXJjaXNlLm9wdGlvbkFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlPDqWxlY3Rpb25uZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImV4ZXJjaXNlLm9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGZpbGxlZDogZXhlcmNpc2Uub3B0aW9uIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIob3B0aW9uLCBpKSBpbiBleGVyY2lzZS52aWRlb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cIm9wdGlvbi5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJvcHRpb24ubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgb3B0aW9uLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaG9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyBhY3RpdmU6IGV4ZXJjaXNlLmhvbGRBY3RpdmUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGVuaXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLXN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2UuaG9sZEFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UuaG9sZEFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaG9sZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2UuaG9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLXBsYWNlaG9sZGVyPVwiU2Vjb25kZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyBkaXNhYmxlZDogIWV4ZXJjaXNlLmhvbGRBY3RpdmUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRlbXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7IGFjdGl2ZTogZXhlcmNpc2UudGVtcG9BY3RpdmUgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGVtcG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZzLXN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2UudGVtcG9BY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnRlbXBvQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZW1wbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZXhlcmNpc2UudGVtcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIihleDogMiAtIDAgLSAxIC0gMClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgZGlzYWJsZWQ6ICFleGVyY2lzZS50ZW1wb0FjdGl2ZSB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtdG9vbHRpcCBjbGFzcz1cImtpdi1oZWxwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1oZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGV4ZXJjaXNlLnRlbXBvQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgdGVtcG8sIGMnZXN0IHRvdXQgc2ltcGxlbWVudCBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnl0aG1lIGRlIGxhIHLDqXDDqXRpdGlvbiwgaW5kaXF1YW50IHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGUgbW91dmVtZW50IGRvaXQgw6p0cmUgbGVudCwgZXhwbG9zaWYgb3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyw7Rsw6kuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy10b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIndm9pcicgPT09IGFjdGlvblwiIGNsYXNzPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmllcy1yZXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcmllc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1zZXJpZXMgaWNvbi0xOFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+e3sgZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXMgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHPDqXJpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZXBzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwia2l2LXJlcHMgaWNvbi0xOVwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHLDqXDDqXRpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhlcmNpc2Uub3B0aW9uXCIgY2xhc3M9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zIDogPHNwYW4+e3sgZXhlcmNpc2Uub3B0aW9uIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJleGVyY2lzZS5ob2xkXCIgY2xhc3M9XCJob2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVuaXIgOiA8c3Bhbj57eyBleGVyY2lzZS5ob2xkIH19czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhlcmNpc2UudGVtcG9cIiBjbGFzcz1cInRlbXBvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcG8gOiA8c3Bhbj57eyBleGVyY2lzZS50ZW1wbyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtdG9vbHRpcCBjbGFzcz1cImtpdi1oZWxwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhlbHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgdGVtcG8sIGMnZXN0IHRvdXQgc2ltcGxlbWVudCBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnl0aG1lIGRlIGxhIHLDqXDDqXRpdGlvbiwgaW5kaXF1YW50IHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGUgbW91dmVtZW50IGRvaXQgw6p0cmUgbGVudCwgZXhwbG9zaWYgb3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyw7Rsw6kuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy10b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXZpZGVvc1wiIHYtaWY9XCIndm9pcicgIT09IGFjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1hZGQtdmlkZW9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZzLWJ1dHRvbiBAY2xpY2s9XCJvcGVuVmlkZW9MaWJyYXJ5KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEteW91dHViZVwiPjwvaT4gQWpvdXRlciBkZXMgdmlkw6lvc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgIDxWaWRlb1BsYXllclxyXG4gICAgICAgICAgICAgICAgdi1pZj1cInZpZGVvUGxheWVyVG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgIDpkb2N0b3I9XCJkb2N0b3JcIlxyXG4gICAgICAgICAgICAgICAgOndvcmtzaGVldD1cImdldFdvcmtzaGVldFwiXHJcbiAgICAgICAgICAgICAgICA6ZXhlcmNpc2U9XCJleGVyY2lzZUZvclBsYXlpbmdcIlxyXG4gICAgICAgICAgICAgICAgOmV4ZXJjaXNlcz1cImdldEV4ZXJjaXNlc1wiXHJcbiAgICAgICAgICAgICAgICA6bGFzdEV4ZXJjaXNlPVwiZ2V0VGhlTGFzdEV4ZXJjaXNlXCJcclxuICAgICAgICAgICAgICAgIEBjbG9zZVZpZGVvUGxheWVyPVwiY2xvc2VWaWRlb1BsYXllclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgIDxWaWRlb0xpYnJhcnlcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJ2aWRlb0xpYnJhcnlUb2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgOmRvY3Rvcj1cImRvY3RvclwiXHJcbiAgICAgICAgICAgICAgICA6bG9hZGluZ1ZpZGVvcz1cImxvYWRpbmdWaWRlb3NcIlxyXG4gICAgICAgICAgICAgICAgOnZpZGVvcz1cInZpZGVvc1wiXHJcbiAgICAgICAgICAgICAgICBAY2xvc2VWaWRlb0xpYnJhcnk9XCJjbG9zZVZpZGVvTGlicmFyeVwiXHJcbiAgICAgICAgICAgICAgICBAdmlkZW9zLXNlbGVjdGlvbj1cImFkZFZpZGVvc1NlbGVjdGlvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICAgIDx2cy1kaWFsb2cgdi1tb2RlbD1cIm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibW9kYWwtY29uZmlybS10ZXh0XCI+Q29uZmlybWVyIGxhIHN1cHByZXNzaW9uIGRlPC9wPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbmZpcm0tZGV0YWlsIHJlbW92ZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29uZmlybS1pY29uIHJlbW92ZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyByZW1vdmVFeGVyY2lzZURldGFpbHMudmlkZW8ubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29uZmlybS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICA8dnMtYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlID0gZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFubnVsZXJcclxuICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHZzLWJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInZhbGlkUmVtb3ZlRXhlcmNpc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwiYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGJ0bkxvYWRpbmdWYWxpZFJlbW92ZUV4ZXJjaXNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbmZpcm1lclxyXG4gICAgICAgICAgICAgICAgPC92cy1idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdnMtZGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVmlkZW9QbGF5ZXIgZnJvbSBcIi4vRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9QbGF5ZXIudnVlXCI7XHJcbmltcG9ydCBWaWRlb0xpYnJhcnkgZnJvbSBcIi4vRXhlcmNpc2VzUGxheWxpc3QvVmlkZW9MaWJyYXJ5LnZ1ZVwiO1xyXG5pbXBvcnQgZiBmcm9tIFwiLi4vLi4vc2VydmljZXMvZnVuY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBWaWRlb1BsYXllcixcclxuICAgICAgICBWaWRlb0xpYnJhcnksXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBkb2N0b3I6IE9iamVjdCxcclxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuLFxyXG4gICAgICAgIHdvcmtzaGVldDogT2JqZWN0LFxyXG4gICAgICAgIGV4ZXJjaXNlczogQXJyYXksXHJcbiAgICAgICAgYWN0aW9uOiBTdHJpbmcsXHJcbiAgICAgICAgY3NyZlRva2VuUmVtb3ZlRXhlcmNpc2U6IFN0cmluZyxcclxuICAgICAgICBsb2FkaW5nVmlkZW9zOiBCb29sZWFuLFxyXG4gICAgICAgIHZpZGVvczogQXJyYXksXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2aWRlb1BsYXllclRvZ2dsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpZGVvTGlicmFyeVRvZ2dsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFjdGl2ZU9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbjogW10sXHJcbiAgICAgICAgICAgICAgICB0ZW1wbzogW10sXHJcbiAgICAgICAgICAgICAgICBob2xkOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhlcmNpc2VGb3JQbGF5aW5nOiBudWxsLFxyXG4gICAgICAgICAgICBtb2RhbENvbmZpcm1SZW1vdmVFeGVyY2lzZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlbW92ZUV4ZXJjaXNlRGV0YWlsczogeyB2aWRlbzoge30gfSxcclxuICAgICAgICAgICAgYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRXb3Jrc2hlZXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndvcmtzaGVldDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEV4ZXJjaXNlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGYuc29ydEJ5UG9zaXRpb24odGhpcy5leGVyY2lzZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGhlTGFzdEV4ZXJjaXNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRFeGVyY2lzZXNbdGhpcy5nZXRFeGVyY2lzZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgY2hlY2tWYWx1ZShib29sLCBleGVyY2lzZSwgdHlwZSkge1xyXG4gICAgICAgICAgICBpZiAoZmFsc2UgPT09IGJvb2wpIHtcclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlW3R5cGVdID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkVmlkZW9zU2VsZWN0aW9uKHZpZGVvcykge1xyXG4gICAgICAgICAgICBjb25zdCBpcyA9IHRoaXMuZ2V0RXhlcmNpc2VzLmxlbmd0aDtcclxuICAgICAgICAgICAgdmlkZW9zLmZvckVhY2goKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4ZXJjaXNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpcyArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZSZXBldGl0aW9uczogMSxcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNlcmllczogMSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcG86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9sZDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25BY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBvQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBob2xkQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB2aWRlbzogdixcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXMucHVzaChleGVyY2lzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tJZlZhbHVlSXNFbXB0eU9yTnVsbChleGVyY2lzZSkge1xyXG4gICAgICAgICAgICBpZiAoZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXMgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBleGVyY2lzZS5udW1iZXJPZlNlcmllcyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9ucyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIFwiXCIgPT09IGV4ZXJjaXNlLm51bWJlck9mU2VyaWVzIHx8XHJcbiAgICAgICAgICAgICAgICBudWxsID09PSBleGVyY2lzZS5udW1iZXJPZlNlcmllc1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlLm51bWJlck9mU2VyaWVzID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiID09PSBleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zIHx8XHJcbiAgICAgICAgICAgICAgICBudWxsID09PSBleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9ucyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwUG9zaXRpb24oZXhlcmNpc2UpIHtcclxuICAgICAgICAgICAgaWYgKGV4ZXJjaXNlLnBvc2l0aW9uID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkUG9zaXRpb24gPSBleGVyY2lzZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gZXhlcmNpc2UucG9zaXRpb24gLSAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkV4ZXJjaXNlID0gdGhpcy5nZXRFeGVyY2lzZXMuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAoZSkgPT4gZS5wb3NpdGlvbiA9PT0gbmV3UG9zaXRpb25cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZXhlcmNpc2UucG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJldkV4ZXJjaXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkV4ZXJjaXNlLnBvc2l0aW9uID0gb2xkUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRvd25Qb3NpdGlvbihleGVyY2lzZSkge1xyXG4gICAgICAgICAgICBpZiAoZXhlcmNpc2UucG9zaXRpb24gPCB0aGlzLmdldEV4ZXJjaXNlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZFBvc2l0aW9uID0gZXhlcmNpc2UucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGV4ZXJjaXNlLnBvc2l0aW9uICsgMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRFeGVyY2lzZSA9IHRoaXMuZ2V0RXhlcmNpc2VzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IGUucG9zaXRpb24gPT09IG5ld1Bvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRFeGVyY2lzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRFeGVyY2lzZS5wb3NpdGlvbiA9IG9sZFBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVFeGVyY2lzZShleGVyY2lzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV4ZXJjaXNlRGV0YWlscyA9IGV4ZXJjaXNlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlID1cclxuICAgICAgICAgICAgICAgICF0aGlzLm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkUmVtb3ZlRXhlcmNpc2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZ1ZhbGlkUmVtb3ZlRXhlcmNpc2UgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlbW92ZUV4ZXJjaXNlRGV0YWlscy5pZCB8fCBcImNyZWF0aW9uXCIgPT09IHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZXJjaXNlcy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXMuaW5kZXhPZih0aGlzLnJlbW92ZUV4ZXJjaXNlRGV0YWlscyksXHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmLnNvcnRCeVBvc2l0aW9uKHRoaXMuZXhlcmNpc2VzKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGUsIGkpID0+IChlLnBvc2l0aW9uID0gaSlcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbmZpcm1SZW1vdmVFeGVyY2lzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5heGlvc1xyXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KGAvZG9jdG9yLyR7dGhpcy5kb2N0b3IuaWR9L3JlbW92ZS9leGVyY2lzZWAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3Rva2VuOiB0aGlzLmNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXRJZDogdGhpcy5nZXRXb3Jrc2hlZXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlSWQ6IHRoaXMucmVtb3ZlRXhlcmNpc2VEZXRhaWxzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXMuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGVyY2lzZXMuaW5kZXhPZih0aGlzLnJlbW92ZUV4ZXJjaXNlRGV0YWlscyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLnNvcnRCeVBvc2l0aW9uKHRoaXMuZXhlcmNpc2VzKS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZSwgaSkgPT4gKGUucG9zaXRpb24gPSBpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5vcGVuU3VjY2Vzc05vdGlmaWNhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3VwcHJlc3Npb24gZGUgbCdleGVyY2ljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdFwiID09PSB0eXBlb2YgZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLm9wZW5FcnJvck5vdGlmaWNhdGlvbihcIkVycmV1clwiLCBlcnJvck1lc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQ29uZmlybVJlbW92ZUV4ZXJjaXNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wZW5WaWRlb1BsYXllcihleGVyY2lzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4ZXJjaXNlRm9yUGxheWluZyA9IGV4ZXJjaXNlO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyVG9nZ2xlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsYmFyXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3BlblZpZGVvTGlicmFyeSgpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0xpYnJhcnlUb2dnbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJuby1zY3JvbGxiYXJcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZVZpZGVvUGxheWVyKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvUGxheWVyVG9nZ2xlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbGJhclwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlVmlkZW9MaWJyYXJ5KCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvTGlicmFyeVRvZ2dsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxiYXJcIik7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmV4ZXJjaXNlcy1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC52cy1pbnB1dC1wYXJlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAudnMtaW5wdXQtY29udGVudCB7XHJcbiAgICAgICAgICAgIC52cy1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52cy1pbnB1dF9fbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4OSU7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52cy1pbnB1dF9fbGFiZWwtLWhpZGRlbi52cy1pbnB1dF9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC44NXJlbTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXhlcmNpc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmxvYWRpbmctYmxvY2sge1xyXG4gICAgICAgICAgICAubG9hZGluZy1ncmF5IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRodW1ibmFpbC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgLmgyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAuc2VyaWVzLXJlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VyaWVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIC50ZW1wbyxcclxuICAgICAgICAgICAgICAgICAgICAuaG9sZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb21tZW50YXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGh1bWJuYWlsLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUydnc7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1kYXJrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgLmJ0bnMtYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAudnMtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDByZW0gMS41cmVtIHJnYmEoMTczLCAxMDAsIDc0LCAwLjg4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5mYS1zb3J0LXVwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmZhLXNvcnQtZG93biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXZ3O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjNyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2N3JlbTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM4cmVtO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2N3JlbTtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM4cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLXBsYXlsaXN0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAudnMtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHJlbSAxLjVyZW0gcmdiYSgxNzMsIDEwMCwgNzQsIDAuODgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIgfiAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDNzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmlucHV0LWgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE4dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTA0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjJ2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyN3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEzNzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDN2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZW1vdmUtZXhlcmNpc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZjY2I5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDZjY2I5O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyYXktZGFyaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LWRhcms7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRncmF5LW1pZGRsZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjhyZW0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjhyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VyaWVzLXJlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zZXJpZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmVwcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuN3JlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktZGFyaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1zZWxlY3QuZGlzYWJsZWQgLnZzLXNlbGVjdCAudnMtaWNvbi1hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAua2l2LXNlbGVjdCAudnMtc2VsZWN0LWNvbnRlbnQgLnZzLXNlbGVjdF9faW5wdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1zZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLXNlbGVjdC1jb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1zZWxlY3QuYWN0aXZlT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtc2VsZWN0X19pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZTU0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZ3JheS1taWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkZ3JheS1kYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAua2l2LXNlbGVjdCAudnMtc2VsZWN0LWNvbnRlbnQuZmlsbGVkIC52cy1zZWxlY3RfX2lucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgIC5raXYtc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1zZWxlY3QtY29udGVudC5maWxsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLXNlbGVjdC5hY3RpdmVPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1zZWxlY3RfX2lucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5raXYtc2VsZWN0IC52cy1zZWxlY3QtY29udGVudCAudnMtc2VsZWN0X19sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjdhYjk3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5raXYtc2VsZWN0IC52cy1zZWxlY3RfX2lucHV0OmhvdmVyIH4gLnZzLXNlbGVjdF9fbGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLXNlbGVjdC5hY3RpdmVPcHRpb25zIC52cy1zZWxlY3RfX2xhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC52cy1zZWxlY3RfX29wdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dC1wYXJlbnQgLnZzLWlucHV0LWNvbnRlbnQgLnZzLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC45cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0LXBhcmVudCAudnMtaW5wdXQtY29udGVudCAudnMtaW5wdXRfX2xhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnZzLWlucHV0LXBhcmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQtY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQ6Zm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfiAudnMtaW5wdXRfX2xhYmVsLS1wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQtcGFyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dC1jb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1pbnB1dF9fbGFiZWwtLWhpZGRlbi52cy1pbnB1dF9fbGFiZWwtLXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuNjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudnMtaW5wdXQtcGFyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIC5raXYtc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID4gOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudnMtc3dpdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RlZDVjMmRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1zd2l0Y2hfX2lucHV0OmNoZWNrZWQgfiAudnMtc3dpdGNoX19jaXJjbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gMTlweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1zd2l0Y2hfX2NpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1oZWxwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uLWhlbHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZTlkZjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDFjMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDhkMWMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VmZTlkZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIC50ZW1wbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAua2l2LWhlbHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uLWhlbHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q2Y2ZiZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkMWMwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkOGQxYzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDZjZmJlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZC12aWRlb3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiA0cmVtO1xyXG5cclxuICAgICAgICAuaWNvbi1hZGQtdmlkZW9zIHtcclxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNXJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR0b3VybmVzb2wsIDAuMjUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNhbmd1aW5lO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLjFyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLjA1cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtYWRkLXZpZGVvcyB7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQuNXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDRyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tYWRkLXZpZGVvcyB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1saWJyYXJ5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ2aWRlby1saWJyYXJ5XCIgY2xhc3M9XCJraXYtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInZzLWRpYWxvZ19fY2xvc2UgYnRuLWNsb3NlLWxpYnJhcnktc21cIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsb3NlVmlkZW9MaWJyYXJ5XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInZzLWljb24tY2xvc2UgdnMtaWNvbi1ob3Zlci14XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlkw6lvdGjDqHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhbG9hZGluZ1ZpZGVvc1wiIGNsYXNzPVwiY291bnQtdmlkZW9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoIHx8IHNlbGVjdGVkVGFncy5sZW5ndGggfHwgc2VsZWN0ZWRQb0JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFzIGZhLWZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPjwvdHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgZ2V0VG90YWxWaWRlb3NGaWx0ZXJlZCB9fSB2aWTDqW88c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImdldFRvdGFsVmlkZW9zRmlsdGVyZWQgPiAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5zPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJzZWFyY2ggfHwgc2VsZWN0ZWRUYWdzLmxlbmd0aCB8fCBzZWxlY3RlZFBvQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRyw6llPHNwYW4gdi1pZj1cImdldFRvdGFsVmlkZW9zRmlsdGVyZWQgPiAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+czwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmltYXJ5LWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJwYWdlID0gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC1wbGFjZWhvbGRlcj1cIkZpbHRyZXIgcGFyIG5vbSBkZSB2aWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtpdi1zZWxlY3QgdGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtc2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZ2V0VGFnc0Zyb21BbGxWaWRlb3MubGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW90cy1DbMOpc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRUYWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJwYWdlID0gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1vcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIih0YWcsIGkpIGluIGdldFRhZ3NGcm9tQWxsVmlkZW9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwidGFnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ0YWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRhZyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm5vdERhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBdWN1biBtb3QtY2zDqSBuZSBjb3JyZXNwb25kLjwvdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC92cy1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwibG9hZGluZyBzZWxlY3QtdGFnc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RQYXJ0T2ZCb2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwYXJ0T2ZCb2R5PVwic2VsZWN0ZWRQb0JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAcGFydE9mQm9keVNlbGVjdGVkPVwiZmlsdGVyQnlQYXJ0T2ZCb2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQHBhcnRPZkJvZHlSZXNldD1cInJlc2V0U2VsZWN0ZWRQb0JcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1saWJyYXJ5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidmlkZW9zLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWxvYWRpbmdWaWRlb3MgJiYgZ2V0VmlkZW9zLmxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIih2aWRlbywgaSkgaW4gZ2V0VmlkZW9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2VsZWN0ZWQtdmlkZW8nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZpZGVvcy5pbmNsdWRlcyh2aWRlbyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLXRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidmlkZW8tbGlua1wiIEBjbGljaz1cInZpZXdWaWRlbyh2aWRlbylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cInZpZGVvLnRodW1ibmFpbFVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ2aWduZXR0ZSBkZSBsYSB2aWTDqW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MTJwdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAtNzcgNTEyLjAwMjEzIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUxMnB0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm01MDEuNDUzMTI1IDU2LjA5Mzc1Yy01LjkwMjM0NC0yMS45MzM1OTQtMjMuMTk1MzEzLTM5LjIyMjY1Ni00NS4xMjUtNDUuMTI4OTA2LTQwLjA2NjQwNi0xMC45NjQ4NDQtMjAwLjMzMjAzMS0xMC45NjQ4NDQtMjAwLjMzMjAzMS0xMC45NjQ4NDRzLTE2MC4yNjE3MTkgMC0yMDAuMzI4MTI1IDEwLjU0Njg3NWMtMjEuNTA3ODEzIDUuOTAyMzQ0LTM5LjIyMjY1NyAyMy42MTcxODctNDUuMTI1IDQ1LjU0Njg3NS0xMC41NDI5NjkgNDAuMDYyNS0xMC41NDI5NjkgMTIzLjE0ODQzOC0xMC41NDI5NjkgMTIzLjE0ODQzOHMwIDgzLjUwMzkwNiAxMC41NDI5NjkgMTIzLjE0ODQzN2M1LjkwNjI1IDIxLjkyOTY4NyAyMy4xOTUzMTIgMzkuMjIyNjU2IDQ1LjEyODkwNiA0NS4xMjg5MDYgNDAuNDg0Mzc1IDEwLjk2NDg0NCAyMDAuMzI4MTI1IDEwLjk2NDg0NCAyMDAuMzI4MTI1IDEwLjk2NDg0NHMxNjAuMjYxNzE5IDAgMjAwLjMyODEyNS0xMC41NDY4NzVjMjEuOTMzNTk0LTUuOTAyMzQ0IDM5LjIyMjY1Ni0yMy4xOTUzMTIgNDUuMTI4OTA2LTQ1LjEyNSAxMC41NDI5NjktNDAuMDY2NDA2IDEwLjU0Mjk2OS0xMjMuMTQ4NDM4IDEwLjU0Mjk2OS0xMjMuMTQ4NDM4cy40MjE4NzUtODMuNTA3ODEyLTEwLjU0Njg3NS0xMjMuNTcwMzEyem0wIDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVzdDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMjA0Ljk2ODc1IDI1NiAxMzMuMjY5NTMxLTc2Ljc1NzgxMi0xMzMuMjY5NTMxLTc2Ljc1NzgxM3ptMCAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidmlkZW8ubmFtZS5sZW5ndGggPCA0NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmlkZW8ubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvLm5hbWUuc3Vic3RyaW5nKDAsIDQ1KSArIFwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImFkZFZpZGVvKHZpZGVvKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWFkZC12aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIXNlbGVjdGVkVmlkZW9zLmluY2x1ZGVzKHZpZGVvKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGx1cy1pY29uIHNpemU9XCIyeFwiPjwvcGx1cy1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnMtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlbW92ZVZpZGVvKHZpZGVvKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLXJlbW92ZS12aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaGVjay1pY29uIHNpemU9XCIyeFwiPjwvY2hlY2staWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibm90LWZvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWxvYWRpbmdWaWRlb3MgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFnZXRWaWRlb3MubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc2VhcmNoICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhc2VsZWN0ZWRUYWdzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNlbGVjdGVkUG9CXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFiIGZhLXlvdXR1YmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5JbCBuJ3kgYSBhdWN1bmUgdmlkw6lvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5vdC1mb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsb2FkaW5nVmlkZW9zICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZ2V0VmlkZW9zLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlYXJjaCB8fCBzZWxlY3RlZFRhZ3MubGVuZ3RoIHx8IHNlbGVjdGVkUG9CKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhYiBmYS15b3V0dWJlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+QXVjdW5lIHZpZMOpbyBuJ2Egw6l0w6kgdHJvdXbDqWUgYXZlY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XCI8c3Ryb25nPnt7IHNlYXJjaCB9fTwvc3Ryb25nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cIjwvc3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VhcmNoICYmIHNlbGVjdGVkVGFncy5sZW5ndGgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VhcmNoICYmIHNlbGVjdGVkUG9CKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJzZWxlY3RlZFRhZ3MubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIih0YWcsIGkpIGluIHNlbGVjdGVkVGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5mLXRhZyB0YWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgd3Nud1wiPnt7IHRhZyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic2VsZWN0ZWRQb0JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5mLXRhZyBwYXJ0LW9mLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0IHdzbndcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNlbGVjdGVkUG9CLm5hbWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nIHZpZGVvcy1saXN0XCIgdi1pZj1cImxvYWRpbmdWaWRlb3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb25cIiB2LWlmPVwidmlkZW9zLmxlbmd0aCA+IG1heFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1wYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9ucy1kb3R0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImdldExlbmd0aChnZXRTZWFyY2godmlkZW9zLCBzZWFyY2gpLCBtYXgpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudC1wYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2UgOiA8Yj57eyBwYWdlIH19PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLXZhbGlkLXNlbGVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2cy1idXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidmFsaWRWaWRlb3NTZWxlY3Rpb24oKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpsb2FkaW5nPVwiYnRuTG9hZGluZ1ZhbGlkVmlkZW9zU2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGJ0bkxvYWRpbmdWYWxpZFZpZGVvc1NlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+VmFsaWRlciBsYSBzZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHZzLWRpYWxvZyBjbGFzcz1cInZpZXctdmlkZW9cIiB2LW1vZGVsPVwibW9kYWxWaWV3VmlkZW9cIj5cclxuICAgICAgICAgICAgPHlvdXR1YmVcclxuICAgICAgICAgICAgICAgIDpwbGF5ZXItdmFycz1cInBsYXllclZhcnNcIlxyXG4gICAgICAgICAgICAgICAgOnZpZGVvLWlkPVwic2VsZWN0ZWRWaWV3VmlkZW8ueW91dHViZUlkXCJcclxuICAgICAgICAgICAgPjwveW91dHViZT5cclxuICAgICAgICA8L3ZzLWRpYWxvZz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGYgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCB7IFBsdXNJY29uLCBDaGVja0ljb24sIFhJY29uIH0gZnJvbSBcInZ1ZS1mZWF0aGVyLWljb25zXCI7XHJcbmltcG9ydCBTZWxlY3RQYXJ0T2ZCb2R5IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1NlbGVjdFBhcnRPZkJvZHkudnVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGRvY3RvcjogT2JqZWN0LFxyXG4gICAgICAgIGxvYWRpbmdWaWRlb3M6IEJvb2xlYW4sXHJcbiAgICAgICAgdmlkZW9zOiBBcnJheSxcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgUGx1c0ljb24sXHJcbiAgICAgICAgQ2hlY2tJY29uLFxyXG4gICAgICAgIFhJY29uLFxyXG4gICAgICAgIFNlbGVjdFBhcnRPZkJvZHksXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgIG1heDogMTIsXHJcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICAgICAgICAgIHJlbDogMCxcclxuICAgICAgICAgICAgICAgIHNob3dpbmZvOiAwLFxyXG4gICAgICAgICAgICAgICAgZWN2ZXI6IDIsXHJcbiAgICAgICAgICAgICAgICBtb2Rlc3RicmFuZGluZzogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGltZW91dDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVGFnczogW10sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkUG9COiBudWxsLFxyXG4gICAgICAgICAgICBzZWxlY3RlZFZpZGVvczogW10sXHJcbiAgICAgICAgICAgIG1vZGFsQWRkVmlkZW86IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2RhbFZpZXdWaWRlbzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVmlld1ZpZGVvOiBmYWxzZSxcclxuICAgICAgICAgICAgYnRuTG9hZGluZ1ZhbGlkVmlkZW9zU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZ2V0VmlkZW9zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRQYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTZWFyY2godGhpcy52aWRlb3MsIHRoaXMuc2VhcmNoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSxcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRMZW5ndGhGb3JQYWdpbmF0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRMZW5ndGgoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNlYXJjaCh0aGlzLnZpZGVvcywgdGhpcy5zZWFyY2gpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFRvdGFsVmlkZW9zRmlsdGVyZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFNlYXJjaCh0aGlzLnZpZGVvcywgdGhpcy5zZWFyY2gpLmxlbmd0aDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFRhZ3NGcm9tQWxsVmlkZW9zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZi5nZXRUYWdzRnJvbUFsbFZpZGVvcyh0aGlzLnZpZGVvcyk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZmlsdGVyQnlQYXJ0T2ZCb2R5KHBhcnRPZkJvZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFBvQiA9IHBhcnRPZkJvZHk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNldFNlbGVjdGVkUG9CKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUG9CID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpZXdWaWRlbyh2aWRlbykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlld1ZpZGVvID0gdmlkZW87XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMubW9kYWxWaWV3VmlkZW8gPSAhdGhpcy5tb2RhbFZpZXdWaWRlbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRWaWRlbyh2aWRlbykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlkZW9zLnB1c2godmlkZW8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlVmlkZW8odmlkZW8pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZpZGVvcy5zcGxpY2UodGhpcy5zZWxlY3RlZFZpZGVvcy5pbmRleE9mKHZpZGVvKSwgMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZFZpZGVvc1NlbGVjdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRWaWRlb3NTZWxlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwidmlkZW9zLXNlbGVjdGlvblwiLCB0aGlzLnNlbGVjdGVkVmlkZW9zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VWaWRlb0xpYnJhcnkoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Mb2FkaW5nVmFsaWRWaWRlb3NTZWxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZVZpZGVvTGlicmFyeSgpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZpZGVvcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFBvQiA9IG51bGw7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiY2xvc2VWaWRlb0xpYnJhcnlcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQYWdlKGRhdGEsIHBhZ2UsIG1heEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldFBhZ2UoZGF0YSwgcGFnZSwgbWF4SXRlbXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TGVuZ3RoKGRhdGEsIG1heEl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmLmdldExlbmd0aChkYXRhLCBtYXhJdGVtcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTZWFyY2goZGF0YSwgZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGxldCB2aWRlb3NMaXN0RmlsdGVyZWQgPSBmLmdldFNlYXJjaChkYXRhLCBmaWx0ZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW9zTGlzdEZpbHRlcmVkID0gdmlkZW9zTGlzdEZpbHRlcmVkLmZpbHRlcigodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYudGFncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudGFncy5mb3JFYWNoKCh2dGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZ0YWcubmFtZSA9PT0gdGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXJlc3VsdHMuaW5jbHVkZXMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUG9CKSB7XHJcbiAgICAgICAgICAgICAgICB2aWRlb3NMaXN0RmlsdGVyZWQgPSB2aWRlb3NMaXN0RmlsdGVyZWQuZmlsdGVyKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodi5wYXJ0T2ZCb2R5cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnBhcnRPZkJvZHlzLmZvckVhY2goKHBhcnRPZkJvZHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0T2ZCb2R5LmlkID09PSB0aGlzLnNlbGVjdGVkUG9CLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2aWRlb3NMaXN0RmlsdGVyZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNpemVXaW5kb3dFdmVudEhhbmRsZXIoZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNDQ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXggPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNDQ5ICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDY0OSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gODtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDY0OSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA4NDkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heCA9IDk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA4NDkgJiYgd2luZG93LmlubmVyV2lkdGggPD0gMTYxOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gODtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDE2MTggJiYgd2luZG93LmlubmVyV2lkdGggPD0gMTY1OSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4ID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxNjU5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXggPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZVdpbmRvd0V2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIHRoaXMucmVzaXplV2luZG93RXZlbnRIYW5kbGVyKCk7XHJcbiAgICB9LFxyXG4gICAgZGVzdHJveWVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplV2luZG93RXZlbnRIYW5kbGVyKTtcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xyXG4udnMtZGlhbG9nLWNvbnRlbnQudmlldy12aWRlbyB7XHJcbiAgICAudnMtZGlhbG9nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG8gMnJlbTtcclxuICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xyXG5cclxuICAgICAgICAudnMtZGlhbG9nX19jb250ZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NHZ3O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzODJweDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NzJweCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udmlkZW8tbGlicmFyeSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMTExMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICBoMiBzcGFuLmNvdW50LXZpZGVvcyB7XHJcbiAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuN3JlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYjhiNjg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjhyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTAuMnJlbTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtMC4xcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1jbG9zZS1saWJyYXJ5LXNtIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC41cmVtKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCA0NiwgODQsIDAuOCk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJpbWFyeS1hY3Rpb25zIHtcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAua2l2LXNlbGVjdC50YWdzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgIC5sb2FkaW5nLnNlbGVjdC10YWdzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0LjNyZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0LWZpbHRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLmxvYWRpbmctcG9iIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGFydG9mYm9keS1zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMS4zM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuMTVyZW0gMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZmFmNmVmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGFydC1vZi1ib2R5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JheS1saWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS4xNXJlbSAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzLjRyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZmFmNmVmO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I3YmRjMjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dC5iLXItYi16ZXJvIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbSAwLjRyZW0gMCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYXJyb3ctdG9nZ2xlLWJveCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAuM3JlbTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGkudnMtaWNvbi1hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuODVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VsZWN0LWJveCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5raXYtc2VsZWN0LnRhZ3Mge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlbGVjdC1maWx0ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogN3ZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OiA4NDBweCkge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmUzODU4YTE7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdmlkZW8tbGlicmFyeSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTlyZW07XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTYxOXB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE2NjBweCkge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzlyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50YWdzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAudGFnLWNoaXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC4ycmVtIDAuM3JlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC52aWRlby1saWJyYXJ5LWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgIC52aWRlb3MtbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAuOHJlbSAjMWIzYTY5NTIgaW5zZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAgMCAzLjlyZW0gIzFiM2E2OTJiIGluc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiOWM3ZGE4NTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwLjRlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkgYW5kIChtaW4taGVpZ2h0OiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1M3ZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmNjNWQ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5YmE0YjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLmxvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHBsYWNlSG9sZGVyU2hpbW1lcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byByaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNmYWZhZmEgOCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZjFmMWYxIDM4JSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNmYWZhZmEgNTQlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwMHB4IDY0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMS42dncgMi41dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjE1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxLjF2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDY1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzEuMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuN3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNnZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE2MTlweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC42dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNjYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuc2VsZWN0ZWQtdmlkZW8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAuN3JlbSAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMTVzIGVhc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmlkZW8tZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudnMtdGFibGVfX3RkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjNlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudmlkZW8tdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzd2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzd2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzd2dztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTl2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE5dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMy42dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMy42dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMy42dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5Ljl2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMzQlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMxJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjdGVzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogIzgwODA4MDczO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN0ZXN0MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmZmZmZmYwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN0ZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmNTkxNzZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI3Rlc3QyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmZmZmZmYwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC52aWRlby1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNGVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlby1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLWFkZC12aWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjsgLy8gYm9yZGVyOiAycHggc29saWQgI2ZmYjM0YjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjE1cmVtIDAuNHJlbSByZ2IoMTAyIDExMyAxNDMgLyA0MCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnZzLWJ1dHRvbl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IGluaXRpYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLXJlbW92ZS12aWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjNyZW0gMC41cmVtIHJnYigxMDIgMTEzIDE0MyAvIDMxJSkgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC52cy1idXR0b25fX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLXZhbGlkLXNlbGVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm90LWZvdW5kIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxOXJlbTtcclxuXHJcbiAgICAgICAgLm5mLXRhZyB7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAycmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcmVtIDAuOHJlbSByZ2JhKDEzNywgMTM3LCAxMzcsIDAuMik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjZyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNDVyZW07XHJcbiAgICAgICAgICAgIHRvcDogLTAuMXJlbTtcclxuXHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi50YWcge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYucGFydC1vZi1ib2R5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInZpZGVvLXBsYXllclwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tY2xvc2UtcGxheWVyXCIgQGNsaWNrPVwiY2xvc2VWaWRlb1BsYXllclwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImtpdi14IGljb24tMjFcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1mcmFtZVwiIGtleT1cInZpZGVvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHlvdXR1YmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnBsYXllci12YXJzPVwicGxheWVyVmFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2aWRlby1pZD1cImdldEV4ZXJjaXNlLnZpZGVvLnlvdXR1YmVJZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBlbmRlZD1cInZpZGVvRW5kZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJ5b3V0dWJlXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC95b3V0dWJlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b20tYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJhci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4ZXJjaXNlLWNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGVyY2ljZSB7eyBnZXRFeGVyY2lzZS5wb3NpdGlvbiArIDEgfX0ve3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRFeGVyY2lzZXMgPyBnZXRFeGVyY2lzZXMubGVuZ3RoIDogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGlyZXRcIj4tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhlcmNpc2UtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZ2V0RXhlcmNpc2UudmlkZW8ubmFtZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhlcmNpc2Utc2VyaWVzLXJlcHMtb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VyaWVzLXJlcHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZXJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImtpdi1zZXJpZXMgaWNvbi0xOFwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3Bhbj57eyBnZXRFeGVyY2lzZS5udW1iZXJPZlNlcmllcyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzw6lyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXBzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJraXYtcmVwcyBpY29uLTE5XCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuPnt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByw6lww6l0aXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmQtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZ2V0RXhlcmNpc2Uub3B0aW9uXCIgY2xhc3M9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zIDogPHNwYW4+e3sgZ2V0RXhlcmNpc2Uub3B0aW9uIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJnZXRFeGVyY2lzZS5ob2xkXCIgY2xhc3M9XCJob2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVuaXIgOiA8c3Bhbj57eyBnZXRFeGVyY2lzZS5ob2xkIH19czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZ2V0RXhlcmNpc2UudGVtcG9cIiBjbGFzcz1cInRlbXBvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcG8gOiA8c3Bhbj57eyBnZXRFeGVyY2lzZS50ZW1wbyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnMtdG9vbHRpcCBjbGFzcz1cImtpdi1oZWxwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWhlbHBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGUgdGVtcG8sIGMnZXN0IHRvdXQgc2ltcGxlbWVudCBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnl0aG1lIGRlIGxhIHLDqXDDqXRpdGlvbiwgaW5kaXF1YW50IHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGUgbW91dmVtZW50IGRvaXQgw6p0cmUgbGVudCwgZXhwbG9zaWYgb3VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyw7Rsw6kuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92cy10b29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tbmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dnMtYnV0dG9uIEBjbGljaz1cIm5leHRFeGVyY2lzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImdldEV4ZXJjaXNlID09PSBnZXRUaGVMYXN0RXhlcmNpc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5GZXJtZXI8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5TdWl2YW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZzLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZG9jdG9yOiBPYmplY3QsXHJcbiAgICAgICAgZXhlcmNpc2U6IE9iamVjdCxcclxuICAgICAgICBleGVyY2lzZXM6IEFycmF5LFxyXG4gICAgICAgIHdvcmtzaGVldDogT2JqZWN0LFxyXG4gICAgICAgIGxhc3RFeGVyY2lzZTogT2JqZWN0LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgICAgICAgICAgcmVsOiAwLFxyXG4gICAgICAgICAgICAgICAgc2hvd2luZm86IDAsXHJcbiAgICAgICAgICAgICAgICBlY3ZlcjogMixcclxuICAgICAgICAgICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBnZXRFeGVyY2lzZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhlcmNpc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRFeGVyY2lzZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4ZXJjaXNlcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFdvcmtzaGVldCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud29ya3NoZWV0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGhlTGFzdEV4ZXJjaXNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXN0RXhlcmNpc2U7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdmlkZW9FbmRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcmVmcy55b3V0dWJlLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgICAgICAgdGhpcy4kcmVmcy55b3V0dWJlLnBsYXllci5zdG9wVmlkZW8oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5leHRFeGVyY2lzZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0RXhlcmNpc2UgPT09IHRoaXMuZ2V0VGhlTGFzdEV4ZXJjaXNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlkZW9QbGF5ZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5leGVyY2lzZUZvclBsYXlpbmcgPSB0aGlzLmV4ZXJjaXNlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIChlKSA9PiBlLnBvc2l0aW9uID09PSB0aGlzLmV4ZXJjaXNlLnBvc2l0aW9uICsgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VWaWRlb1BsYXllcigpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsb3NlVmlkZW9QbGF5ZXJcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi52aWRlby1wbGF5ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTExMTE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC41cmVtKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCA0NiwgODQsIDAuOCk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWNsb3NlLXBsYXllciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICAgIHRvcDogMXJlbTtcclxuICAgICAgICByaWdodDogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNTtcclxuXHJcbiAgICAgICAgJi5kYXJrIHtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgdG9wOiAxLjVyZW07XHJcbiAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMiUgMTElO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwJSAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDguNSUgMTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2LjUlIDEwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZpZGVvLWZyYW1lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MC41dnc7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IDk4LjRyZW07XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1NS40cmVtO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMXJlbSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIGFuZCAobWluLWhlaWdodDogMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOC4ydnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMy45cmVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIGFuZCAobWluLWhlaWdodDogMzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0LjJ2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00LjJyZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNC43cmVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOS40dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MnZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiAzODVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzMuNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjB2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogNDY1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2LjR2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY1dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDU1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMS40dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NnZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiA2MzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzYuNHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjV2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogNzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzLjh2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk4LjRyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTkuMXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzR2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWluLWhlaWdodDogMzg1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LjF2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQ2NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMC4xdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NHZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtaW4taGVpZ2h0OiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUuMXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjN2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWluLWhlaWdodDogNjMwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLjF2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcxdnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NS4xdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5OXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIuM3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjJ2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDM4NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNi4xdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyOXZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNDY1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxLjF2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM4dnc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEzNzBweCkgYW5kIChtaW4taGVpZ2h0OiA1NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjYuMXZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDd2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTM3MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMS4xdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NXZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzcwcHgpIGFuZCAobWluLWhlaWdodDogNzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1LjF2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk5cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20tYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRncmF5LWxpZ2h0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5ib3R0b20tYmFyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDAuMXJlbTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjhyZW07XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5leGVyY2lzZS1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZS1jb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpcmV0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2UtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idG4tbmV4dCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTYwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZXhlcmNpc2Utc2VyaWVzLXJlcHMtb3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIuM3JlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuODVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VyaWVzLXJlcHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlcmllcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjE4cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjU1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2Vjb25kLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC44cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjdyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZW1wbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmtpdi1oZWxwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0wLjFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaWNvbi1oZWxwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmNmYmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDFjMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDhkMWMwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Q2Y2ZiZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VsZWN0UGFydE9mQm9keS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODc0ZmQ5MGMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VsZWN0UGFydE9mQm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODc0ZmQ5MGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4NzRmZDkwY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzg3NGZkOTBjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzg3NGZkOTBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzg3NGZkOTBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NzRmZDkwYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4NzRmZDkwYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9jb21wb25lbnRzL1NlbGVjdFBhcnRPZkJvZHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTcwM2UyNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFnUGFydE9mQm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc1NzAzZTI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc1NzAzZTI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc1NzAzZTI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTcwM2UyNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NTcwM2UyNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9jb21wb25lbnRzL1RhZ1BhcnRPZkJvZHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTQxMmY0NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vV29ya1NoZWV0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vV29ya1NoZWV0UGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhNDEyZjQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhNDEyZjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhNDEyZjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTQxMmY0NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YTQxMmY0NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya1NoZWV0UGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04M2EzNGFkYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXERhbWllblxcXFxEb2N1bWVudHNcXFxcMDFfRGV2XFxcXGtpdmlkXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzgzYTM0YWRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzgzYTM0YWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzgzYTM0YWRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODNhMzRhZGEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODNhMzRhZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvZG9jdG9yL1dvcmtzaGVldC9FeGVyY2lzZXNQbGF5bGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZpZGVvTGlicmFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzY2MDBlZTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9WaWRlb0xpYnJhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxEYW1pZW5cXFxcRG9jdW1lbnRzXFxcXDAxX0RldlxcXFxraXZpZFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjNjYwMGVlOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjNjYwMGVlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjNjYwMGVlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNjYwMGVlOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjNjYwMGVlOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvTGlicmFyeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jODQ2NzljMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WaWRlb1BsYXllci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9WaWRlb1BsYXllci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jODQ2NzljMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImM4NDY3OWMwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcRGFtaWVuXFxcXERvY3VtZW50c1xcXFwwMV9EZXZcXFxca2l2aWRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzg0Njc5YzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzg0Njc5YzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzg0Njc5YzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jODQ2NzljMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjODQ2NzljMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9kb2N0b3IvV29ya3NoZWV0L0V4ZXJjaXNlc1BsYXlsaXN0L1ZpZGVvUGxheWVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhZ1BhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFnUGFydE9mQm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vV29ya1NoZWV0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZGVvTGlicmFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9QbGF5ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdFBhcnRPZkJvZHkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODc0ZmQ5MGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1dvcmtTaGVldFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4ZXJjaXNlc1BsYXlsaXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMTNbMF0ucnVsZXNbMF0udXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbNF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWRlb0xpYnJhcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xM1swXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEzWzBdLnJ1bGVzWzBdLnVzZVs0XSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZGVvUGxheWVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWM4NDY3OWMwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NzRmZDkwYyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWdQYXJ0T2ZCb2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTcwM2UyNCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Xb3JrU2hlZXRQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTQxMmY0NCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeGVyY2lzZXNQbGF5bGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODNhMzRhZGEmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9MaWJyYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNjYwMGVlOCZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWRlb1BsYXllci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yzg0Njc5YzAmc2NvcGVkPXRydWUmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJjbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LWNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmhpZGVTZWxlY3RCb3gsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJoaWRlU2VsZWN0Qm94XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdC1maWx0ZXJcIlxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogIV92bS5sb2FkaW5nUGFydHNPZkJvZHksXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWxvYWRpbmdQYXJ0c09mQm9keVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImdldFBhcnRPZkJvZHlTZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYXJ0b2Zib2R5LXNlbGVjdGVkIHBhcnQtb2YtYm9keVwiLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnJlc2V0U2VsZWN0IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJwaWVkXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1waWVkXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9waWVkLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgUGllZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSBcImphbWJlXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1qYW1iZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvamFtYmUuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBKYW1iZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSBcImJyYXNcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWJyYXNcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2JyYXMuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBCcmFzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZ2V0UGFydE9mQm9keVNlbGVjdGVkLmljb24gPT09IFwibWFpblwiXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tbWFpblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbWFpbi5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIE1haW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJlcGF1bGVcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWVwYXVsZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvZXBhdWxlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgw4lwYXVsZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSBcImRvc1wiXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tZG9zXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9kb3Muc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBEb3NcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJjZXJ2aWNhbGVzXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1jZXJ2aWNhbGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9jZXJ2aWNhbGVzLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgQ2VydmljYWxlc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5pY29uID09PSBcImxvbWJhaXJlc1wiXG4gICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tbG9tYmFpcmVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9sb21iYWlyZXMuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBMb21iYWlyZXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5nZXRQYXJ0T2ZCb2R5U2VsZWN0ZWQuaWNvbiA9PT0gXCJ0aG9yYWNpcXVlXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi10aG9yYWNpcXVlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS90aG9yYWNpcXVlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgVGhvcmFjaXF1ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dCB3c253XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZC5uYW1lKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmdldFBhcnRPZkJvZHlTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFnZXRQYXJ0T2ZCb2R5U2VsZWN0ZWRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiYi1yLWItemVyb1wiOiBfdm0uc2VsZWN0Qm94IH0sXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJwYXJ0b2Zib2R5LWNob2ljZS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogIV92bS5zZWxlY3RCb3ggPyBcIlBhcnRpZSBkdSBjb3Jwc1wiIDogXCJSZWNoZXJjaGV6XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpbHRlciB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RCb3ggPSB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGtleXVwOiBfdm0uc2VsZWN0Qm94V2l0aFRocm90dGxlLFxuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLmZpbHRlciA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhcnJvdy10b2dnbGUtYm94XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnNlbGVjdEJveCB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZVNlbGVjdEJveCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZzLWljb24tYXJyb3dcIiB9KV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJoZWlnaHRcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RCb3gsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0Qm94XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdC1ib3hcIixcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmZvY3VzSW5wdXRTZWxlY3QgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLnBhcnRzT2ZCb2R5RmlsdGVyZWQubGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhcnRzT2ZCb2R5RmlsdGVyZWQsIGZ1bmN0aW9uKHBhcnQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYXJ0LW9mLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdFBhcnRPZkJvZHkocGFydClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pY29uID09PSBcInBpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tcGllZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9waWVkLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIFBpZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pY29uID09PSBcImphbWJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWphbWJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2phbWJlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIEphbWJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJicmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWJyYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvYnJhcy5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBCcmFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJtYWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLW1haW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbWFpbi5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBNYWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJlcGF1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tZXBhdWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2VwYXVsZS5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSDDiXBhdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQuaWNvbiA9PT0gXCJkb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tZG9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2Rvcy5zdmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJJY29uZSBEb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pY29uID09PSBcImNlcnZpY2FsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tY2VydmljYWxlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9jZXJ2aWNhbGVzLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIENlcnZpY2FsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydC5pY29uID09PSBcImxvbWJhaXJlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1sb21iYWlyZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvbG9tYmFpcmVzLnN2Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkljb25lIExvbWJhaXJlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0Lmljb24gPT09IFwidGhvcmFjaXF1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi10aG9yYWNpcXVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3Rob3JhY2lxdWUuc3ZnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgVGhvcmFjaXF1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IHdzbndcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocGFydC5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kLXBvYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWN1bmUgcGFydGllIGR1IGNvcnBzIG5lIGNvcnJlc3BvbmQuXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9hZGluZ1BhcnRzT2ZCb2R5LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb2FkaW5nUGFydHNPZkJvZHlcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGxvYWRpbmctcG9iXCJcbiAgICAgIH0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZzLWJ1dHRvblwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidGFnIHBhcnQtb2YtYm9keVwiLCBhdHRyczogeyBzaXplOiBcIm1pbmlcIiB9IH0sXG4gICAgW1xuICAgICAgX3ZtLnBhcnRPZkJvZHkuaWNvbiA9PT0gXCJwaWVkXCJcbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLXBpZWRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvcGllZC5zdmdcIiksXG4gICAgICAgICAgICAgIGFsdDogXCJJY29uZSBQaWVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwiamFtYmVcIlxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tamFtYmVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvamFtYmUuc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgSmFtYmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBhcnRPZkJvZHkuaWNvbiA9PT0gXCJicmFzXCJcbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWJyYXNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvYnJhcy5zdmdcIiksXG4gICAgICAgICAgICAgIGFsdDogXCJJY29uZSBCcmFzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwibWFpblwiXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1tYWluXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L21haW4uc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgTWFpblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFydE9mQm9keS5pY29uID09PSBcImVwYXVsZVwiXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1lcGF1bGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvZXBhdWxlLnN2Z1wiKSxcbiAgICAgICAgICAgICAgYWx0OiBcIkljb25lIMOJcGF1bGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBhcnRPZkJvZHkuaWNvbiA9PT0gXCJkb3NcIlxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24tZG9zXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L2Rvcy5zdmdcIiksXG4gICAgICAgICAgICAgIGFsdDogXCJJY29uZSBEb3NcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnBhcnRPZkJvZHkuaWNvbiA9PT0gXCJjZXJ2aWNhbGVzXCJcbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWNlcnZpY2FsZXNcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uL2ltZy9pY29ucy9wYXJ0LW9mLWJvZHkvY2VydmljYWxlcy5zdmdcIiksXG4gICAgICAgICAgICAgIGFsdDogXCJJY29uZSBDZXJ2aWNhbGVzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwibG9tYmFpcmVzXCJcbiAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWxvbWJhaXJlc1wiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vaW1nL2ljb25zL3BhcnQtb2YtYm9keS9sb21iYWlyZXMuc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgTG9tYmFpcmVzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wYXJ0T2ZCb2R5Lmljb24gPT09IFwidGhvcmFjaXF1ZVwiXG4gICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi10aG9yYWNpcXVlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi9pbWcvaWNvbnMvcGFydC1vZi1ib2R5L3Rob3JhY2lxdWUuc3ZnXCIpLFxuICAgICAgICAgICAgICBhbHQ6IFwiSWNvbmUgVGhvcmFjaXF1ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0IHdzbndcIiB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhcnRPZkJvZHkubmFtZSkpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY29tcGxldGVkIGljb24tMjJcIiB9KVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiwgYXR0cnM6IHsgaWQ6IFwid29ya3NoZWV0XCIgfSB9LCBbXG4gICAgX2MoXCJoZWFkZXJcIiwgW1xuICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgcGFydC1vZi1ib2R5XCIgfSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF92bS5wYXRpZW50XG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmVzY3JpLWZvci1wYXRpZW50LWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRlcmljdFRvRGFzaGJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByZXNjcmktZm9yLXBhdGllbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZzLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1c2VyLWF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIjI2XCIsIGNpcmNsZTogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnBhdGllbnQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnBhdGllbnQuYXZhdGFyVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIvaW1nL2F2YXRhci1kZWZhdWx0LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2YXRhciBkZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXRpZW50LmZpcnN0bmFtZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhdGllbnQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlci1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRVc2VyTmFtZShfdm0ucGF0aWVudCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBcInZvaXJcIiA9PT0gX3ZtLmFjdGlvblxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUtdmlld1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGhpZGRlbjogX3ZtLnBhdGllbnQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlZGVyaWN0VG9EYXNoYm9hcmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRXb3Jrc2hlZXQudGl0bGUpKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0V29ya3NoZWV0LnBhcnRPZkJvZHlcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiVGFnUGFydE9mQm9keVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBhcnRPZkJvZHk6IF92bS5nZXRXb3Jrc2hlZXQucGFydE9mQm9keSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1hcnJvdy1sZWZ0IGljb24tMzFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBoaWRkZW46IF92bS5wYXRpZW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZWRlcmljdFRvRGFzaGJvYXJkKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIlRpdHJlIGRlIGxhIGZpY2hlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRpdGxlSXNFbXB0eU1lc3NhZ2UgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGl0bGVJc0VtcHR5TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVzc2FnZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGl0bGVJc0VtcHR5TWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ud29ya3NoZWV0LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ud29ya3NoZWV0LCBcInRpdGxlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIndvcmtzaGVldC50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIFwidm9pclwiICE9PSBfdm0uYWN0aW9uXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtcGFyYW1zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtZGV0YWlsc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlZGl0aW9uXCIgPT09IF92bS5hY3Rpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrSWZXb3Jrc2hlZXRTZXNzaW9uc0V4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJlZGl0aW9uXCIgPT09IF92bS5hY3Rpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hlY2tJZldvcmtzaGVldFNlc3Npb25zRXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhdmVydC1zZXNzaW9ucy1zdGFydFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtaW5mbyBpY29uLTE3XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3VzIG5lIHBvdXZleiBwbHVzIG1vZGlmaWVyIGxhIGR1csOpZSBkZSBsYVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzY3JpcHRpb24gY2FyIGxlIHBhdGllbnQgYSBkw6lqw6AgZMOpbWFycsOpIHNlc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9ucy5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3b3Jrc2hlZXQtdGltaW5nLXBlcndlZWtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGVyV2Vla1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIlggcGFyIHNlbS4gKG1heDogNylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBcIjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrSWZEdXJhdGlvblZhbHVlSXNFbXB0eU9yTnVsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ud29ya3NoZWV0LnBlcldlZWssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLndvcmtzaGVldC5wZXJXZWVrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ud29ya3NoZWV0LCBcInBlcldlZWtcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwid29ya3NoZWV0LnBlcldlZWtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwid29ya3NoZWV0LXRpbWluZy1wZXJkYXlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY2FsZW5kYXIgaWNvbi0xMFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGVyRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiWCBwYXIgam91ciAobWF4OiAzKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IFwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1cjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2tJZkR1cmF0aW9uVmFsdWVJc0VtcHR5T3JOdWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS53b3Jrc2hlZXQucGVyRGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS53b3Jrc2hlZXQucGVyRGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ud29ya3NoZWV0LCBcInBlckRheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ3b3Jrc2hlZXQucGVyRGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndvcmtzaGVldC1wZXJpb2RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtY2xvY2sgaWNvbi0xMVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZHVyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJEdXLDqWUgZW4gc2VtLiAobWF4OiA1MilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBcIjUyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibHVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja0lmRHVyYXRpb25WYWx1ZUlzRW1wdHlPck51bGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLndvcmtzaGVldC5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ud29ya3NoZWV0LmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ud29ya3NoZWV0LCBcImR1cmF0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIndvcmtzaGVldC5kdXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VsZWN0LWZpbHRlci1ibG9ja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNlbGVjdFBhcnRPZkJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGFydE9mQm9keTogX3ZtLndvcmtzaGVldC5wYXJ0T2ZCb2R5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5U2VsZWN0ZWQ6IF92bS5zZXRQYXJ0T2ZCb2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5UmVzZXQ6IF92bS5yZXNldFBvQlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhcnRPZkJvZHlJc0VtcHR5TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVycm9yLW1lc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGFydE9mQm9keUlzRW1wdHlNZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJtYWluXCIsIFtcbiAgICAgIF9jKFxuICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAgeyBhdHRyczogeyBpZDogXCJleGVyY2lzZXMtcGxheWxpc3RcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIkV4ZXJjaXNlc1BsYXlsaXN0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGRvY3RvcjogX3ZtLmRvY3RvcixcbiAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgIGFjdGlvbjogX3ZtLmFjdGlvbixcbiAgICAgICAgICAgICAgd29ya3NoZWV0OiBfdm0uZ2V0V29ya3NoZWV0LFxuICAgICAgICAgICAgICBleGVyY2lzZXM6IF92bS5nZXRFeGVyY2lzZXMsXG4gICAgICAgICAgICAgIGxvYWRpbmdWaWRlb3M6IF92bS5sb2FkaW5nVmlkZW9zLFxuICAgICAgICAgICAgICB2aWRlb3M6IF92bS52aWRlb3MsXG4gICAgICAgICAgICAgIGNzcmZUb2tlblJlbW92ZUV4ZXJjaXNlOiBfdm0uY3NyZlRva2VuUmVtb3ZlRXhlcmNpc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi12YWxpZFwiLFxuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgX3ZtLmJ0bkxvYWRpbmdWYWxpZEVkaXRXb3Jrc2hlZXQgfHxcbiAgICAgICAgICAgIF92bS5idG5Mb2FkaW5nVmFsaWRDcmVhdGVXb3Jrc2hlZXQgfHxcbiAgICAgICAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIFwiZWRpdGlvblwiID09PSBfdm0uYWN0aW9uXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nVmFsaWRFZGl0V29ya3NoZWV0IH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZEVkaXQgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFZhbGlkZXIgbGVzIG1vZGlmaWNhdGlvbnNcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgXCJjcmVhdGlvblwiID09PSBfdm0uYWN0aW9uICYmICFfdm0ucGF0aWVudFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0IH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZENyZWF0ZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2hlY2stY2lyY2xlXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgQ3LDqWVyIGxhIGZpY2hlXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIFwiY3JlYXRpb25cIiA9PT0gX3ZtLmFjdGlvbiAmJiBfdm0ucGF0aWVudFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZ1ZhbGlkQ3JlYXRlV29ya3NoZWV0IH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZENyZWF0ZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2hlY2stY2lyY2xlXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgQ3LDqWVyIGxhIHByZXNjcmlwdGlvblxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtYXJyb3ctbGVmdCBpY29uLTMxXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaDFcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJwcmVzY3JpcHRpb24gXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJwb3VyXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlcy1saXN0XCIgfSwgW1xuICAgICAgICBfdm0ubG9hZGluZ1xuICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0RXhlcmNpc2VzLCBmdW5jdGlvbihleGVyY2lzZSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRodW1ibmFpbC13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBcInZvaXJcIiAhPT0gX3ZtLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRucy1hcnJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5wb3NpdGlvbiAhPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY2lyY2xlOiBcIlwiLCBpY29uOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cFBvc2l0aW9uKGV4ZXJjaXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNvcnQtdXBcIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnBvc2l0aW9uICE9IF92bS5nZXRFeGVyY2lzZXMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgaWNvbjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZG93blBvc2l0aW9uKGV4ZXJjaXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNvcnQtZG93blwiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuLXBsYXlsaXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlblZpZGVvUGxheWVyKGV4ZXJjaXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiIFZvaXJcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRodW1ibmFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsKCdcIiArIGV4ZXJjaXNlLnZpZGVvLnRodW1ibmFpbFVybCArIFwiJylcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1oMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhleGVyY2lzZS52aWRlby5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2b2lyXCIgIT09IF92bS5hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZW1vdmUtZXhlcmNpc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZUV4ZXJjaXNlKGV4ZXJjaXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRyYXNoXCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIFwidm9pclwiICE9PSBfdm0uYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VyaWVzLXJlcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXJpZXNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtc2VyaWVzIGljb24tMThcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJOYiBkZSBzw6lyaWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrSWZWYWx1ZUlzRW1wdHlPck51bGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS5udW1iZXJPZlNlcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoZXhlcmNpc2UsIFwibnVtYmVyT2ZTZXJpZXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhlcmNpc2UubnVtYmVyT2ZTZXJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmVwc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1yZXBzIGljb24tMTlcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJOYiBkZSByw6lww6l0aXRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrSWZWYWx1ZUlzRW1wdHlPck51bGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS5udW1iZXJPZlJlcGV0aXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm51bWJlck9mUmVwZXRpdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIFwidm9pclwiICE9PSBfdm0uYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IGV4ZXJjaXNlLm9wdGlvbkFjdGl2ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIk9wdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja1ZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5vcHRpb25BY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS5vcHRpb25BY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoZXhlcmNpc2UsIFwib3B0aW9uQWN0aXZlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhlcmNpc2Uub3B0aW9uQWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhZXhlcmNpc2Uub3B0aW9uQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBmaWxsZWQ6IGV4ZXJjaXNlLm9wdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJTw6lsZWN0aW9ubmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXhlcmNpc2Uub3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGV4ZXJjaXNlLCBcIm9wdGlvblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4ZXJjaXNlLm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZXhlcmNpc2UudmlkZW8ub3B0aW9ucywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mob3B0aW9uLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJob2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IGV4ZXJjaXNlLmhvbGRBY3RpdmUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJUZW5pclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnMtc3dpdGNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja1ZhbHVlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5ob2xkQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJob2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4ZXJjaXNlLmhvbGRBY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoZXhlcmNpc2UsIFwiaG9sZEFjdGl2ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4ZXJjaXNlLmhvbGRBY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZzLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgZGlzYWJsZWQ6ICFleGVyY2lzZS5ob2xkQWN0aXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1wbGFjZWhvbGRlclwiOiBcIlNlY29uZGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS5ob2xkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGV4ZXJjaXNlLCBcImhvbGRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJleGVyY2lzZS5ob2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZW1wb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBleGVyY2lzZS50ZW1wb0FjdGl2ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIlRlbXBvXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlLnRlbXBvQWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleGVyY2lzZS50ZW1wb0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChleGVyY2lzZSwgXCJ0ZW1wb0FjdGl2ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4ZXJjaXNlLnRlbXBvQWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGRpc2FibGVkOiAhZXhlcmNpc2UudGVtcG9BY3RpdmUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLXBsYWNlaG9sZGVyXCI6IFwiKGV4OiAyIC0gMCAtIDEgLSAwKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV4ZXJjaXNlLnRlbXBvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGV4ZXJjaXNlLCBcInRlbXBvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhlcmNpc2UudGVtcG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtaGVscFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlIHRlbXBvLCBjJ2VzdCB0b3V0IHNpbXBsZW1lbnQgbGVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeXRobWUgZGUgbGEgcsOpcMOpdGl0aW9uLCBpbmRpcXVhbnQgcXVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGUgbW91dmVtZW50IGRvaXQgw6p0cmUgbGVudCwgZXhwbG9zaWYgb3VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250csO0bMOpLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWhlbHBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGV4ZXJjaXNlLnRlbXBvQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXF1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBcInZvaXJcIiA9PT0gX3ZtLmFjdGlvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlcmllcy1yZXBzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VyaWVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LXNlcmllcyBpY29uLTE4XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGV4ZXJjaXNlLm51bWJlck9mU2VyaWVzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc8Opcmllc1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2UubnVtYmVyT2ZSZXBldGl0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJlcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwia2l2LXJlcHMgaWNvbi0xOVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByw6lww6l0aXRpb25zXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2Uub3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnMgOiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoZXhlcmNpc2Uub3B0aW9uKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS5ob2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5pciA6IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhleGVyY2lzZS5ob2xkKSArIFwic1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGVyY2lzZS50ZW1wb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGVtcG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcG8gOiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGV4ZXJjaXNlLnRlbXBvKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtpdi1oZWxwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZSB0ZW1wbywgYydlc3QgdG91dCBzaW1wbGVtZW50IGxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnl0aG1lIGRlIGxhIHLDqXDDqXRpdGlvbiwgaW5kaXF1YW50IHF1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlIG1vdXZlbWVudCBkb2l0IMOqdHJlIGxlbnQsIGV4cGxvc2lmIG91XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHLDtGzDqS5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1oZWxwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtcXVlc3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBcInZvaXJcIiAhPT0gX3ZtLmFjdGlvblxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhZGQtdmlkZW9zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuLWFkZC12aWRlb3NcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuVmlkZW9MaWJyYXJ5KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEteW91dHViZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBBam91dGVyIGRlcyB2aWTDqW9zXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS52aWRlb1BsYXllclRvZ2dsZVxuICAgICAgICAgICAgPyBfYyhcIlZpZGVvUGxheWVyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZG9jdG9yOiBfdm0uZG9jdG9yLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBfdm0uZ2V0V29ya3NoZWV0LFxuICAgICAgICAgICAgICAgICAgZXhlcmNpc2U6IF92bS5leGVyY2lzZUZvclBsYXlpbmcsXG4gICAgICAgICAgICAgICAgICBleGVyY2lzZXM6IF92bS5nZXRFeGVyY2lzZXMsXG4gICAgICAgICAgICAgICAgICBsYXN0RXhlcmNpc2U6IF92bS5nZXRUaGVMYXN0RXhlcmNpc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsb3NlVmlkZW9QbGF5ZXI6IF92bS5jbG9zZVZpZGVvUGxheWVyIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnZpZGVvTGlicmFyeVRvZ2dsZVxuICAgICAgICAgICAgPyBfYyhcIlZpZGVvTGlicmFyeVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGRvY3RvcjogX3ZtLmRvY3RvcixcbiAgICAgICAgICAgICAgICAgIGxvYWRpbmdWaWRlb3M6IF92bS5sb2FkaW5nVmlkZW9zLFxuICAgICAgICAgICAgICAgICAgdmlkZW9zOiBfdm0udmlkZW9zXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xvc2VWaWRlb0xpYnJhcnk6IF92bS5jbG9zZVZpZGVvTGlicmFyeSxcbiAgICAgICAgICAgICAgICAgIFwidmlkZW9zLXNlbGVjdGlvblwiOiBfdm0uYWRkVmlkZW9zU2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZzLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kYWxDb25maXJtUmVtb3ZlRXhlcmNpc2UsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5tb2RhbENvbmZpcm1SZW1vdmVFeGVyY2lzZSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxDb25maXJtUmVtb3ZlRXhlcmNpc2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbmZpcm0tdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNvbmZpcm1lciBsYSBzdXBwcmVzc2lvbiBkZVwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb25maXJtLWRldGFpbCByZW1vdmUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29uZmlybS1pY29uIHJlbW92ZS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdHJhc2hcIiB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnJlbW92ZUV4ZXJjaXNlRGV0YWlscy52aWRlby5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29uZmlybS1idXR0b25zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2cy1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kYWxDb25maXJtUmVtb3ZlRXhlcmNpc2UgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIEFubnVsZXJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5idG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nVmFsaWRSZW1vdmVFeGVyY2lzZSB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS52YWxpZFJlbW92ZUV4ZXJjaXNlIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgQ29uZmlybWVyXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlIGxvYWRpbmctYmxvY2tcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSB0aHVtYm5haWwtd3JhcHBlclwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaDIgdy00NVwiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXJpZXMtcmVwc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHNlcmllcyB3LTI1XCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgcmVwcyB3LTE1XCIgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IG9wdGlvbiB3LTI1XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSB0ZW1wbyB3LTE1XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBob2xkIHctMjVcIiB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21tZW50YXJ5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHRpdGxlIHctMjVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGlucHV0XCIgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJleGVyY2lzZSBsb2FkaW5nLWJsb2NrXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgdGh1bWJuYWlsLXdyYXBwZXJcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGgyIHctMzVcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWxzXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VyaWVzLXJlcHNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBzZXJpZXMgdy0xNVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHJlcHMgdy0yNVwiIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBvcHRpb24gdy0yNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgdGVtcG8gdy0xNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaG9sZCB3LTI1XCIgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tbWVudGFyeVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSB0aXRsZSB3LTI1XCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBpbnB1dFwiIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2UgbG9hZGluZy1ibG9ja1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHRodW1ibmFpbC13cmFwcGVyXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSBoMiB3LTQ1XCIgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlcmllcy1yZXBzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgc2VyaWVzIHctMTVcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvYWRpbmctZ3JheSByZXBzIHctMTVcIiB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgb3B0aW9uIHctMjVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IHRlbXBvIHctMTVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZy1ncmF5IGhvbGQgdy0yNVwiIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbW1lbnRhcnlcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgdGl0bGUgdy0yNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nLWdyYXkgaW5wdXRcIiB9KVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInZpZGVvLWxpYnJhcnlcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJraXYtYmxvY2tcIiwgYXR0cnM6IHsgaWQ6IFwidmlkZW8tbGlicmFyeVwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZzLWRpYWxvZ19fY2xvc2UgYnRuLWNsb3NlLWxpYnJhcnktc21cIixcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlVmlkZW9MaWJyYXJ5IH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInZzLWljb24tY2xvc2UgdnMtaWNvbi1ob3Zlci14XCIgfSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgVmlkw6lvdGjDqHF1ZVxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1ZpZGVvc1xuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvdW50LXZpZGVvc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggfHwgX3ZtLnNlbGVjdGVkVGFncy5sZW5ndGggfHwgX3ZtLnNlbGVjdGVkUG9CXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbHRlclwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRUb3RhbFZpZGVvc0ZpbHRlcmVkKSArIFwiIHZpZMOpb1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VG90YWxWaWRlb3NGaWx0ZXJlZCA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoIHx8IF92bS5zZWxlY3RlZFRhZ3MubGVuZ3RoIHx8IF92bS5zZWxlY3RlZFBvQlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRyw6llXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRUb3RhbFZpZGVvc0ZpbHRlcmVkID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcInNcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHJpbWFyeS1hY3Rpb25zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2cy1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtcGxhY2Vob2xkZXJcIjogXCJGaWx0cmVyIHBhciBub20gZGUgdmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhZ2UgPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJraXYtc2VsZWN0IHRhZ3NcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0VGFnc0Zyb21BbGxWaWRlb3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk1vdHMtQ2zDqXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRUYWdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRUYWdzID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFRhZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0VGFnc0Zyb21BbGxWaWRlb3MsIGZ1bmN0aW9uKHRhZywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaSwgYXR0cnM6IHsgbGFiZWw6IHRhZywgdmFsdWU6IHRhZyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0YWcpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwibm90RGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVjdW4gbW90LWNsw6kgbmUgY29ycmVzcG9uZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9hZGluZyBzZWxlY3QtdGFnc1wiIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIlNlbGVjdFBhcnRPZkJvZHlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGFydE9mQm9keTogX3ZtLnNlbGVjdGVkUG9CIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0T2ZCb2R5U2VsZWN0ZWQ6IF92bS5maWx0ZXJCeVBhcnRPZkJvZHksXG4gICAgICAgICAgICAgICAgICAgIHBhcnRPZkJvZHlSZXNldDogX3ZtLnJlc2V0U2VsZWN0ZWRQb0JcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmlkZW8tbGlicmFyeS1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAhX3ZtLmxvYWRpbmdWaWRlb3MgJiYgX3ZtLmdldFZpZGVvcy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZpZGVvcy1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5nZXRWaWRlb3MsIGZ1bmN0aW9uKHZpZGVvLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWQtdmlkZW9cIjogX3ZtLnNlbGVjdGVkVmlkZW9zLmluY2x1ZGVzKHZpZGVvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZpZGVvLXRodW1ibmFpbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2aWRlby1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS52aWV3VmlkZW8odmlkZW8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdmlkZW8udGh1bWJuYWlsVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInZpZ25ldHRlIGRlIGxhIHZpZMOpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTEycHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIC03NyA1MTIuMDAyMTMgNTEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUxMnB0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidGVzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm01MDEuNDUzMTI1IDU2LjA5Mzc1Yy01LjkwMjM0NC0yMS45MzM1OTQtMjMuMTk1MzEzLTM5LjIyMjY1Ni00NS4xMjUtNDUuMTI4OTA2LTQwLjA2NjQwNi0xMC45NjQ4NDQtMjAwLjMzMjAzMS0xMC45NjQ4NDQtMjAwLjMzMjAzMS0xMC45NjQ4NDRzLTE2MC4yNjE3MTkgMC0yMDAuMzI4MTI1IDEwLjU0Njg3NWMtMjEuNTA3ODEzIDUuOTAyMzQ0LTM5LjIyMjY1NyAyMy42MTcxODctNDUuMTI1IDQ1LjU0Njg3NS0xMC41NDI5NjkgNDAuMDYyNS0xMC41NDI5NjkgMTIzLjE0ODQzOC0xMC41NDI5NjkgMTIzLjE0ODQzOHMwIDgzLjUwMzkwNiAxMC41NDI5NjkgMTIzLjE0ODQzN2M1LjkwNjI1IDIxLjkyOTY4NyAyMy4xOTUzMTIgMzkuMjIyNjU2IDQ1LjEyODkwNiA0NS4xMjg5MDYgNDAuNDg0Mzc1IDEwLjk2NDg0NCAyMDAuMzI4MTI1IDEwLjk2NDg0NCAyMDAuMzI4MTI1IDEwLjk2NDg0NHMxNjAuMjYxNzE5IDAgMjAwLjMyODEyNS0xMC41NDY4NzVjMjEuOTMzNTk0LTUuOTAyMzQ0IDM5LjIyMjY1Ni0yMy4xOTUzMTIgNDUuMTI4OTA2LTQ1LjEyNSAxMC41NDI5NjktNDAuMDY2NDA2IDEwLjU0Mjk2OS0xMjMuMTQ4NDM4IDEwLjU0Mjk2OS0xMjMuMTQ4NDM4cy40MjE4NzUtODMuNTA3ODEyLTEwLjU0Njg3NS0xMjMuNTcwMzEyem0wIDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBcIiNmMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInRlc3QyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibTIwNC45Njg3NSAyNTYgMTMzLjI2OTUzMS03Ni43NTc4MTItMTMzLjI2OTUzMS03Ni43NTc4MTN6bTAgMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IFwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInZpZGVvLWRldGFpbHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmlkZW8tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ubmFtZS5sZW5ndGggPCA0NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModmlkZW8ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8ubmFtZS5zdWJzdHJpbmcoMCwgNDUpICsgXCIuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uc2VsZWN0ZWRWaWRlb3MuaW5jbHVkZXModmlkZW8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tYWRkLXZpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjaXJjbGU6IFwiXCIsIHNpemU6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkVmlkZW8odmlkZW8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBsdXMtaWNvblwiLCB7IGF0dHJzOiB7IHNpemU6IFwiMnhcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnMtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1yZW1vdmUtdmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNpcmNsZTogXCJcIiwgc2l6ZTogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVWaWRlbyh2aWRlbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiY2hlY2staWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCIyeFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0ubG9hZGluZ1ZpZGVvcyAmJlxuICAgICAgICAgICAgICAhX3ZtLmdldFZpZGVvcy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgIV92bS5zZWFyY2ggJiZcbiAgICAgICAgICAgICAgIV92bS5zZWxlY3RlZFRhZ3MubGVuZ3RoICYmXG4gICAgICAgICAgICAgICFfdm0uc2VsZWN0ZWRQb0JcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCIgfSwgW192bS5fbSgwKV0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5sb2FkaW5nVmlkZW9zICYmXG4gICAgICAgICAgICAgICFfdm0uZ2V0VmlkZW9zLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAoX3ZtLnNlYXJjaCB8fCBfdm0uc2VsZWN0ZWRUYWdzLmxlbmd0aCB8fCBfdm0uc2VsZWN0ZWRQb0IpXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdC1mb3VuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYWIgZmEteW91dHViZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdWN1bmUgdmlkw6lvIG4nYSDDqXTDqSB0cm91dsOpZSBhdmVjXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoJ1wiJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2VhcmNoKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdignXCInKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5zZWFyY2ggJiYgX3ZtLnNlbGVjdGVkVGFncy5sZW5ndGgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnNlYXJjaCAmJiBfdm0uc2VsZWN0ZWRQb0IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVGFncy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWxlY3RlZFRhZ3MsIGZ1bmN0aW9uKHRhZywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGksIHN0YXRpY0NsYXNzOiBcIm5mLXRhZyB0YWdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQgd3Nud1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0YWcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRQb0JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuZi10YWcgcGFydC1vZi1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dCB3c253XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNlbGVjdGVkUG9CLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubG9hZGluZ1ZpZGVvc1xuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2FkaW5nIHZpZGVvcy1saXN0XCIgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udmlkZW9zLmxlbmd0aCA+IF92bS5tYXhcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInZzLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbnMtZG90dGVkXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IF92bS5nZXRMZW5ndGgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRTZWFyY2goX3ZtLnZpZGVvcywgX3ZtLnNlYXJjaCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYXhcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvdW50LXBhZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBQYWdlIDogXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucGFnZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ0bi12YWxpZC1zZWxlY3Rpb25cIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInZzLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uYnRuTG9hZGluZ1ZhbGlkVmlkZW9zU2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nVmFsaWRWaWRlb3NTZWxlY3Rpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkVmlkZW9zU2VsZWN0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jaGVjay1jaXJjbGVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVmFsaWRlciBsYSBzZWxlY3Rpb25cXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2cy1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZpZXctdmlkZW9cIixcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RhbFZpZXdWaWRlbyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLm1vZGFsVmlld1ZpZGVvID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RhbFZpZXdWaWRlb1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ5b3V0dWJlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwicGxheWVyLXZhcnNcIjogX3ZtLnBsYXllclZhcnMsXG4gICAgICAgICAgICAgIFwidmlkZW8taWRcIjogX3ZtLnNlbGVjdGVkVmlld1ZpZGVvLnlvdXR1YmVJZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhYiBmYS15b3V0dWJlXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJJbCBuJ3kgYSBhdWN1bmUgdmlkw6lvXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInZpZGVvLXBsYXllclwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tY2xvc2UtcGxheWVyXCIsXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZVZpZGVvUGxheWVyIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi14IGljb24tMjFcIiB9KV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBrZXk6IFwidmlkZW9cIiwgc3RhdGljQ2xhc3M6IFwidmlkZW8tZnJhbWVcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInlvdXR1YmVcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJ5b3V0dWJlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwicGxheWVyLXZhcnNcIjogX3ZtLnBsYXllclZhcnMsXG4gICAgICAgICAgICAgICAgICBcInZpZGVvLWlkXCI6IF92bS5nZXRFeGVyY2lzZS52aWRlby55b3V0dWJlSWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGVuZGVkOiBfdm0udmlkZW9FbmRlZCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiZmFkZVwiIH0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbS1iYXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b20tYmFyLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlLWRldGFpbHNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhlcmNpc2UtY291bnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBFeGVyY2ljZSBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0RXhlcmNpc2UucG9zaXRpb24gKyAxKSArXG4gICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRFeGVyY2lzZXMgPyBfdm0uZ2V0RXhlcmNpc2VzLmxlbmd0aCA6IDApICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGlyZXRcIiB9LCBbX3ZtLl92KFwiLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZ2V0RXhlcmNpc2UudmlkZW8ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4ZXJjaXNlLXNlcmllcy1yZXBzLW9wdGlvbnNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2VyaWVzLXJlcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXJpZXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJraXYtc2VyaWVzIGljb24tMThcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2V0RXhlcmNpc2UubnVtYmVyT2ZTZXJpZXMpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzw6lyaWVzXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVwc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImtpdi1yZXBzIGljb24tMTlcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldEV4ZXJjaXNlLm51bWJlck9mUmVwZXRpdGlvbnMpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHLDqXDDqXRpdGlvbnNcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNlY29uZC1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5nZXRFeGVyY2lzZS5vcHRpb25cbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbnMgOiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRFeGVyY2lzZS5vcHRpb24pKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmdldEV4ZXJjaXNlLmhvbGRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJob2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5pciA6IFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmdldEV4ZXJjaXNlLmhvbGQpICsgXCJzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uZ2V0RXhlcmNpc2UudGVtcG9cbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRlbXBvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcG8gOiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmdldEV4ZXJjaXNlLnRlbXBvKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2cy10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJraXYtaGVscFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlIHRlbXBvLCBjJ2VzdCB0b3V0IHNpbXBsZW1lbnQgbGVcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByeXRobWUgZGUgbGEgcsOpcMOpdGl0aW9uLCBpbmRpcXVhbnQgcXVlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGUgbW91dmVtZW50IGRvaXQgw6p0cmUgbGVudCwgZXhwbG9zaWYgb3VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250csO0bMOpLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI2OTU1MTgwMDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24taGVscFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1xdWVzdGlvblwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4tbmV4dFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInZzLWJ1dHRvblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0ubmV4dEV4ZXJjaXNlIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmdldEV4ZXJjaXNlID09PSBfdm0uZ2V0VGhlTGFzdEV4ZXJjaXNlXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJGZXJtZXJcIildKVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiU3VpdmFudFwiKV0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbIlZ1ZSIsIldvcmtTaGVldFBhZ2UiLCJheGlvcyIsIlZ1ZUF4aW9zIiwidXNlIiwiVnVlc2F4IiwiVnVlWW91dHViZSIsInJlbmRlciIsImgiLCIkbW91bnQiXSwic291cmNlUm9vdCI6IiJ9