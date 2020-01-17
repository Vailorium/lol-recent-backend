(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/app.ts":
/*!***********************!*\
  !*** ./server/app.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);



var App = /** @class */ (function () {
    function App(controllers, port) {
        this.app = express__WEBPACK_IMPORTED_MODULE_0__();
        this.port = port;
        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }
    App.prototype.initializeMiddleware = function () {
        this.app.use(body_parser__WEBPACK_IMPORTED_MODULE_2__["urlencoded"]({ extended: true }));
        this.app.use(body_parser__WEBPACK_IMPORTED_MODULE_2__["json"]());
        this.app.use(cors__WEBPACK_IMPORTED_MODULE_1__({
            origin: 'http://localhost:4200'
        }));
    };
    App.prototype.initializeControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.app.use('/api', controller.router);
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server started on port " + _this.port);
        });
    };
    return App;
}());
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./server/controllers/RiotController.ts":
/*!**********************************************!*\
  !*** ./server/controllers/RiotController.ts ***!
  \**********************************************/
/*! exports provided: RiotController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiotController", function() { return RiotController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment */ "./server/environment/index.ts");



var request = __webpack_require__(/*! request */ "request");
var API_KEY = _environment__WEBPACK_IMPORTED_MODULE_2__["API_KEY"];
var RiotController = /** @class */ (function () {
    function RiotController() {
        var _this = this;
        this.router = express__WEBPACK_IMPORTED_MODULE_1__["Router"]();
        this.getChampionRotation = function (req, res, next) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                request({
                    uri: "https://oc1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=" + API_KEY
                }).pipe(res);
                return [2 /*return*/];
            });
        }); };
        this.getSummonerDetails = function (req, res, next) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                request({
                    uri: "https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + req.body.summonerName + "?api_key=" + API_KEY
                }).pipe(res);
                console.log(res.error);
                return [2 /*return*/];
            });
        }); };
        this.getEncryptedSummonerId = function (summonerName) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        request({
                            uri: "https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + API_KEY
                        }, function (error, response, data) {
                            if (error) {
                                console.log(error);
                                reject(error);
                            }
                            console.log(data);
                            resolve(JSON.parse(data).id);
                        });
                    })];
            });
        }); };
        this.getChampionMasteries = function (req, res, next) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var encryptedSummonerId;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(API_KEY);
                        return [4 /*yield*/, this.getEncryptedSummonerId(req.body.summonerName)];
                    case 1:
                        encryptedSummonerId = _a.sent();
                        console.log(encryptedSummonerId);
                        request({
                            uri: "https://oc1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + encryptedSummonerId + "?api_key=" + API_KEY
                        }, function (error, response, data) {
                            // console.log(error, response, data);
                        }).pipe(res);
                        return [2 /*return*/];
                }
            });
        }); };
        this.intializeRoutes();
    }
    RiotController.prototype.intializeRoutes = function () {
        this.router.get('/champion-rotation', this.getChampionRotation);
        this.router.post('/summoner-details', this.getSummonerDetails);
        this.router.post('/champion-masteries', this.getChampionMasteries);
    };
    return RiotController;
}());



/***/ }),

/***/ "./server/controllers/index.ts":
/*!*************************************!*\
  !*** ./server/controllers/index.ts ***!
  \*************************************/
/*! exports provided: RiotController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RiotController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RiotController */ "./server/controllers/RiotController.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RiotController", function() { return _RiotController__WEBPACK_IMPORTED_MODULE_0__["RiotController"]; });




/***/ }),

/***/ "./server/environment/apikey.ts":
/*!**************************************!*\
  !*** ./server/environment/apikey.ts ***!
  \**************************************/
/*! exports provided: API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
var API_KEY = ( true) ? "RGAPI-727cef9b-a8f9-4faa-b686-fa63973c0f30" : undefined;


/***/ }),

/***/ "./server/environment/index.ts":
/*!*************************************!*\
  !*** ./server/environment/index.ts ***!
  \*************************************/
/*! exports provided: API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikey */ "./server/environment/apikey.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return _apikey__WEBPACK_IMPORTED_MODULE_0__["API_KEY"]; });




/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./server/app.ts");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers */ "./server/controllers/index.ts");


var app = new _app__WEBPACK_IMPORTED_MODULE_0__["default"]([
    new _controllers__WEBPACK_IMPORTED_MODULE_1__["RiotController"]()
], 3000);
app.listen();


/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./server/server ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./server/server */"./server/server.ts");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=server.map