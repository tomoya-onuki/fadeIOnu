/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../fadeIOnu/dist/FadeIn.js":
/*!**********************************!*\
  !*** ../fadeIOnu/dist/FadeIn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fadeIn = void 0;\nfunction fadeIn(elem, _duration, _display) {\n    if (elem !== null) {\n        const duration = _duration != null ? _duration : 500;\n        const display = _display != null ? _display : 'block';\n        elem.style.display = display;\n        elem.animate([\n            { opacity: '0' },\n            { opacity: '1' }\n        ], {\n            duration: duration\n        });\n    }\n}\nexports.fadeIn = fadeIn;\n\n\n//# sourceURL=webpack://test/../fadeIOnu/dist/FadeIn.js?");

/***/ }),

/***/ "../fadeIOnu/dist/FadeOut.js":
/*!***********************************!*\
  !*** ../fadeIOnu/dist/FadeOut.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fadeOut = void 0;\nfunction fadeOut(elem, _duration) {\n    if (elem !== null) {\n        const duration = _duration != null ? _duration : 500;\n        const firstDisplay = elem.style.display !== '' ? elem.style.display : 'block';\n        elem.animate([\n            { opacity: '1', display: firstDisplay },\n            { opacity: '0', display: 'none' }\n        ], {\n            duration: duration\n        });\n        elem.style.display = 'none';\n    }\n}\nexports.fadeOut = fadeOut;\n\n\n//# sourceURL=webpack://test/../fadeIOnu/dist/FadeOut.js?");

/***/ }),

/***/ "../fadeIOnu/dist/index.js":
/*!*********************************!*\
  !*** ../fadeIOnu/dist/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./FadeIn */ \"../fadeIOnu/dist/FadeIn.js\"), exports);\n__exportStar(__webpack_require__(/*! ./FadeOut */ \"../fadeIOnu/dist/FadeOut.js\"), exports);\n\n\n//# sourceURL=webpack://test/../fadeIOnu/dist/index.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst fadeIOnu_1 = __webpack_require__(/*! fadeIOnu */ \"../fadeIOnu/dist/index.js\");\nwindow.onload = (event) => {\n    const elem = document.querySelector(\"#a0\");\n    const durationSliderElem = document.querySelector(\"#duration\");\n    const inElem = document.querySelector(\"#in\");\n    inElem.addEventListener(\"click\", () => {\n        const duration = Number(durationSliderElem.value);\n        (0, fadeIOnu_1.fadeIn)(elem, duration);\n    });\n    const outElem = document.querySelector(\"#out\");\n    outElem.addEventListener(\"click\", () => {\n        const duration = Number(durationSliderElem.value);\n        console.log(duration);\n        (0, fadeIOnu_1.fadeOut)(elem, duration);\n    });\n};\n\n\n//# sourceURL=webpack://test/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;