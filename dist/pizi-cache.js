/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Get cache API
var appCache = window.applicationCache;

// Return pizi-cache object
/* harmony default export */ __webpack_exports__["default"] = ({
    getStatus: function getStatus() {
        var status = 'UKNOWN CACHE STATUS';
        switch (appCache.status) {

            case appCache.UNCACHED:
                // UNCACHED == 0
                status = 'UNCACHED';
                break;
            case appCache.IDLE:
                // IDLE == 1
                status = 'IDLE';
                break;
            case appCache.CHECKING:
                // CHECKING == 2
                status = 'CHECKING';
                break;
            case appCache.DOWNLOADING:
                // DOWNLOADING == 3
                status = 'DOWNLOADING';
                break;
            case appCache.UPDATEREADY:
                // UPDATEREADY == 4
                status = 'UPDATEREADY';
                break;
            case appCache.OBSOLETE:
                // OBSOLETE == 5
                status = 'OBSOLETE';
                break;
        };
        return status;
    },
    init: function init() {
        // Check if a new cache is available on page load.
        window.addEventListener('load', function (e) {
            window.applicationCache.addEventListener('updateready', function (e) {
                if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                    console.info("Manifest changed, updating cache...");
                    appCache.swapCache();
                    window.location.reload();
                } else {
                    // Manifest didn't changed. Nothing new to server.
                    console.info("No changes in Manifest.");
                }
            }, false);
        }, false);
    }
});

/***/ })
/******/ ]);