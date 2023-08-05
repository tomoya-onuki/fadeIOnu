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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fadeIn = void 0;\nfunction fadeIn(elem, _duration, _display) {\n    return new Promise(async (resolve) => {\n        if (elem !== null) {\n            const duration = _duration != null ? _duration : 500;\n            const display = _display != null ? _display : 'block';\n            const frameRate = 40;\n            const coef = 1 / (duration / frameRate);\n            elem.style.opacity = '0';\n            elem.style.display = display;\n            var opacity = Number(elem.style.opacity);\n            var animation = setInterval(() => {\n                opacity += coef;\n                elem.style.opacity = String(opacity);\n                if (opacity >= 1) {\n                    clearInterval(animation);\n                    resolve(true);\n                }\n            }, frameRate);\n        }\n    });\n}\nexports.fadeIn = fadeIn;\n\n\n//# sourceURL=webpack://test/../fadeIOnu/dist/FadeIn.js?");

/***/ }),

/***/ "../fadeIOnu/dist/FadeOut.js":
/*!***********************************!*\
  !*** ../fadeIOnu/dist/FadeOut.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.fadeOut = void 0;\nfunction fadeOut(elem, _duration) {\n    return new Promise(async (resolve) => {\n        if (elem !== null) {\n            const duration = _duration != null ? _duration : 500;\n            const frameRate = 40;\n            const coef = 1 / (duration / frameRate);\n            var opacity = Number(elem.style.opacity);\n            elem.style.opacity = '1';\n            var animation = setInterval(() => {\n                opacity -= coef;\n                elem.style.opacity = String(opacity);\n                if (opacity <= 0) {\n                    elem.style.display = 'none';\n                    clearInterval(animation);\n                    resolve(true);\n                }\n            }, frameRate);\n        }\n    });\n}\nexports.fadeOut = fadeOut;\n\n\n//# sourceURL=webpack://test/../fadeIOnu/dist/FadeOut.js?");

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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst fadeIOnu_1 = __webpack_require__(/*! fadeIOnu */ \"../fadeIOnu/dist/index.js\");\nwindow.onload = (event) => {\n    const elem = document.querySelector(\"#a0\");\n    const durationSliderElem = document.querySelector(\"#duration\");\n    const inElem = document.querySelector(\"#in\");\n    inElem.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\n        const duration = Number(durationSliderElem.value);\n        yield (0, fadeIOnu_1.fadeIn)(elem, duration);\n        console.log(\"fadein !!\");\n    }));\n    const outElem = document.querySelector(\"#out\");\n    outElem.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\n        const duration = Number(durationSliderElem.value);\n        yield (0, fadeIOnu_1.fadeOut)(elem, duration);\n        console.log(\"fadeout !!\");\n    }));\n};\n\n\n//# sourceURL=webpack://test/./src/index.ts?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;