"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ "./assets/homepage.js");



/***/ }),

/***/ "./assets/homepage.js":
/*!****************************!*\
  !*** ./assets/homepage.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simple_parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-parallax-js */ "./node_modules/simple-parallax-js/dist/simpleParallax.min.js");
/* harmony import */ var simple_parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_parallax_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");



var parallaxTop = document.querySelector('.parallax-top');
var parallaxBot = document.querySelector('.parallax-bot');
var btnGoToTop = document.querySelector('.btn-go-to-top');

if (parallaxTop || parallaxBot || btnGoToTop) {
  new (simple_parallax_js__WEBPACK_IMPORTED_MODULE_0___default())(parallaxTop, {
    delay: .8,
    orientation: 'down',
    transition: 'cubic-bezier(0,0,0,1)'
  });
  new (simple_parallax_js__WEBPACK_IMPORTED_MODULE_0___default())(parallaxBot, {
    delay: .8,
    orientation: 'down',
    transition: 'cubic-bezier(0,0,0,1)'
  }); // When the user scrolls down 200px from the top of the document, show the button

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btnGoToTop.style.display = "flex";
    } else {
      btnGoToTop.style.display = "none";
    }
  } // When the user clicks on the button, scroll to the top of the document


  btnGoToTop.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari

    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
  aos__WEBPACK_IMPORTED_MODULE_1___default().init();
}

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_aos_dist_aos_js-node_modules_aos_dist_aos_css-node_modules_simple-parall-ca19ef"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBLElBQU1FLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxJQUFNRSxVQUFVLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBbkI7O0FBRUEsSUFBSUYsV0FBVyxJQUFJRyxXQUFmLElBQThCQyxVQUFsQyxFQUE4QztBQUMxQyxNQUFJTiwyREFBSixDQUFtQkUsV0FBbkIsRUFBZ0M7QUFDNUJLLElBQUFBLEtBQUssRUFBRSxFQURxQjtBQUU1QkMsSUFBQUEsV0FBVyxFQUFFLE1BRmU7QUFHNUJDLElBQUFBLFVBQVUsRUFBRTtBQUhnQixHQUFoQztBQU1BLE1BQUlULDJEQUFKLENBQW1CSyxXQUFuQixFQUFnQztBQUM1QkUsSUFBQUEsS0FBSyxFQUFFLEVBRHFCO0FBRTVCQyxJQUFBQSxXQUFXLEVBQUUsTUFGZTtBQUc1QkMsSUFBQUEsVUFBVSxFQUFFO0FBSGdCLEdBQWhDLEVBUDBDLENBYTFDOztBQUNBQyxFQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsWUFBWTtBQUFFQyxJQUFBQSxjQUFjO0FBQUksR0FBbEQ7O0FBRUEsV0FBU0EsY0FBVCxHQUEwQjtBQUN0QixRQUFJVCxRQUFRLENBQUNVLElBQVQsQ0FBY0MsU0FBZCxHQUEwQixHQUExQixJQUFpQ1gsUUFBUSxDQUFDWSxlQUFULENBQXlCRCxTQUF6QixHQUFxQyxHQUExRSxFQUErRTtBQUMzRVIsTUFBQUEsVUFBVSxDQUFDVSxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEzQjtBQUNILEtBRkQsTUFFTztBQUNIWCxNQUFBQSxVQUFVLENBQUNVLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0g7QUFDSixHQXRCeUMsQ0F3QjFDOzs7QUFDQVgsRUFBQUEsVUFBVSxDQUFDWSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFZO0FBQzdDZixJQUFBQSxRQUFRLENBQUNVLElBQVQsQ0FBY0MsU0FBZCxHQUEwQixDQUExQixDQUQ2QyxDQUNoQjs7QUFDN0JYLElBQUFBLFFBQVEsQ0FBQ1ksZUFBVCxDQUF5QkQsU0FBekIsR0FBcUMsQ0FBckMsQ0FGNkMsQ0FFTDtBQUMzQyxHQUhEO0FBS0FiLEVBQUFBLCtDQUFBO0FBQ0g7Ozs7Ozs7Ozs7O0FDdkNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vaG9tZXBhZ2UuanMnO1xyXG5cclxuIiwiaW1wb3J0IHNpbXBsZVBhcmFsbGF4IGZyb20gJ3NpbXBsZS1wYXJhbGxheC1qcyc7XHJcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcclxuaW1wb3J0ICdhb3MvZGlzdC9hb3MuY3NzJztcclxuXHJcbmNvbnN0IHBhcmFsbGF4VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4LXRvcCcpO1xyXG5jb25zdCBwYXJhbGxheEJvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheC1ib3QnKTtcclxuY29uc3QgYnRuR29Ub1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tZ28tdG8tdG9wJyk7XHJcblxyXG5pZiAocGFyYWxsYXhUb3AgfHwgcGFyYWxsYXhCb3QgfHwgYnRuR29Ub1RvcCkge1xyXG4gICAgbmV3IHNpbXBsZVBhcmFsbGF4KHBhcmFsbGF4VG9wLCB7XHJcbiAgICAgICAgZGVsYXk6IC44LFxyXG4gICAgICAgIG9yaWVudGF0aW9uOiAnZG93bicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2N1YmljLWJlemllcigwLDAsMCwxKSdcclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBzaW1wbGVQYXJhbGxheChwYXJhbGxheEJvdCwge1xyXG4gICAgICAgIGRlbGF5OiAuOCxcclxuICAgICAgICBvcmllbnRhdGlvbjogJ2Rvd24nLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdjdWJpYy1iZXppZXIoMCwwLDAsMSknXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBXaGVuIHRoZSB1c2VyIHNjcm9sbHMgZG93biAyMDBweCBmcm9tIHRoZSB0b3Agb2YgdGhlIGRvY3VtZW50LCBzaG93IHRoZSBidXR0b25cclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHsgc2Nyb2xsRnVuY3Rpb24oKSB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwMCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMjAwKSB7XHJcbiAgICAgICAgICAgIGJ0bkdvVG9Ub3Auc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bkdvVG9Ub3Auc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYnV0dG9uLCBzY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgZG9jdW1lbnRcclxuICAgIGJ0bkdvVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7IC8vIEZvciBTYWZhcmlcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDsgLy8gRm9yIENocm9tZSwgRmlyZWZveCwgSUUgYW5kIE9wZXJhXHJcbiAgICB9KTtcclxuXHJcbiAgICBBT1MuaW5pdCgpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJzaW1wbGVQYXJhbGxheCIsIkFPUyIsInBhcmFsbGF4VG9wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyYWxsYXhCb3QiLCJidG5Hb1RvVG9wIiwiZGVsYXkiLCJvcmllbnRhdGlvbiIsInRyYW5zaXRpb24iLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInNjcm9sbEZ1bmN0aW9uIiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==