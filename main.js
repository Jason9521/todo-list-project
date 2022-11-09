/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n:root {\r\n    --pale-green: #cad2c5;\r\n    --green-one: #84a98c;\r\n    --green-two: #52796f;\r\n    --green-three: #354f52;\r\n    --green-four: #2f3e46;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n        background-color: var(--pale-green);\r\n        font-family: 'Roboto', sans-serif;\r\n        \r\n}\r\n\r\n.page-title {\r\n    display: flex;\r\n    padding: 2rem;\r\n    background-color: var(--green-two);\r\n}\r\n\r\n.page-title h2 {\r\n    font-size: 3rem;\r\n    margin: 0 auto;\r\n    color: #fff;\r\n}\r\n\r\n.menu-toggle {\r\n    position: absolute;\r\n    top: 45px;\r\n    color: #fff\r\n}\r\n\r\n.menu-toggle.visible {\r\n    left: 310px;\r\n}\r\n\r\n.add-task {\r\n    display: flex;\r\n    align-self: center;\r\n    color: #fff;\r\n}\r\n\r\n.menu-toggle:hover,\r\n.add-task:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* SIDE MENU */\r\n\r\n.side-menu.visible {\r\n    left: 0;\r\n}\r\n\r\n.side-menu {\r\n    width: 300px;\r\n    height: 100vh;\r\n    position: relative;\r\n    left: -300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-shrink: 0;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    background-color: var(--green-three);\r\n    color: #fff;\r\n    transition: .5s;\r\n}\r\n\r\n.side-menu button {   \r\n    width: 80%;\r\n    margin: 1.5rem 0;\r\n    padding: 0.5rem 0;\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    background-color: var(--green-three);\r\n    border: solid 2px var(--green-two);\r\n    border-radius: 5px;\r\n    transition: .2s;\r\n}\r\n\r\n.side-menu button:hover {\r\n    cursor: pointer;\r\n    background-color: var(--green-two);\r\n}\r\n\r\n.side-menu h2 {\r\n    width: 80%;\r\n    margin: 3rem 0 1rem;\r\n    border-bottom: 3px solid var(--green-two);\r\n    padding-bottom: 0.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.side-menu i {\r\n    padding-right: 0.7rem;\r\n}\r\n\r\n.project-entries {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.project-entries div {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.project-entries button {\r\n    height: 1.6rem;\r\n    width: 11rem;\r\n    margin: 0 auto;\r\n    border: solid 2px var(--green-two);\r\n    border-radius: 5px;\r\n    background-color: var(--green-three);\r\n    font-size: 0.75rem;\r\n    line-height: 0.6rem;\r\n}\r\n\r\n.project-entries button:hover {\r\n    background-color: var(--green-two);\r\n    border: solid 2px var(--green-two);\r\n}\r\n\r\n.project-delete {\r\n    margin-left: 0.6rem;\r\n    transition: .2s;\r\n}\r\n\r\n.project-delete:hover {\r\n    cursor: pointer;\r\n    color: var(--green-one);\r\n}\r\n\r\n/* PAGE INTERFACE */\r\n\r\n.interface-container {\r\n    display: flex;\r\n}\r\n\r\n.page-interface {\r\n    position: relative;\r\n    font-size: 1.5rem;\r\n    right: 300px;\r\n    transition: .5s;\r\n    padding: 2rem 4rem;\r\n}\r\n\r\n.page-interface.visible {\r\n    right: 0px;\r\n}\r\n\r\n.page-interface h2 {\r\n    color: var(--green-three);\r\n    width: 100vw;\r\n    border-bottom: solid 3px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.entry-title {\r\n    display: flex;\r\n    align-items: baseline;\r\n}\r\n\r\n.entry-title input {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.task-entries {\r\n    width: 60%;\r\n    /* max-width: 1050px; */\r\n}\r\n\r\n.task-entry {\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: space-between;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.date {\r\n    display: flex;\r\n    flex-grow: 2;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n    \r\n}\r\n.task-title {\r\n    width: 10rem;\r\n}\r\n\r\n\r\n\r\n.entry-buttons i {\r\n    margin: 0 0.3rem;\r\n}\r\n\r\n/* TASK MODAL */\r\n\r\n.modal {\r\n    position: absolute;\r\n    flex-direction: column;\r\n    top: -20%;  \r\n    left: 50%; \r\n    transform: translate(-50%, 50%);\r\n    background-color: var(--green-two);\r\n    height: 74vh;\r\n    width: 50vw;\r\n    max-width: 550px;\r\n    border: solid 4px #fff;\r\n    border-radius: 10px;\r\n    opacity: 0.5;\r\n    z-index: 0;\r\n}\r\n\r\n@keyframes fade-in {\r\n    0% { top: -25%; }\r\n    100% { top: -20%; opacity: 1; }\r\n}\r\n\r\n.modal::backdrop {\r\n    background-color: rgba(0,0,0,0.5);\r\n}\r\n\r\n\r\n.form-title {\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n}\r\n\r\n.form-title h2 {\r\n    padding: 1.5rem 0;\r\n}\r\n\r\n.form-title i {\r\n    padding-right: 0.5rem;\r\n    color: black;\r\n}\r\n\r\n.fa-square-xmark {\r\n    position: absolute;\r\n    top: 38px;\r\n    right: 10px;\r\n    color: black;\r\n}\r\n\r\n.fa-square-xmark:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-input {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.modal label,\r\n.project-modal label {\r\n    display: flex;\r\n    padding: 0 0 0.4rem;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.modal textarea {\r\n    resize: vertical;\r\n}\r\n\r\n.modal textarea::placeholder {\r\n    padding-left: 1rem;\r\n}\r\n\r\n.modal input,\r\n.modal textarea,\r\n.modal select {\r\n    margin: 0 auto;\r\n    width: 85%;\r\n    margin-bottom: 1rem;\r\n    padding: 0.2rem ;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n.modal button,\r\n.project-modal button {\r\n    display: flex;\r\n    margin: 0.8rem auto;\r\n    padding: 0.5rem 2.5rem;\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.modal button:hover,\r\n.project-modal button:hover {\r\n    cursor: pointer;\r\n    color: #fff;\r\n    background-color: var(--green-one);\r\n    transition: 0.3s;\r\n}\r\n\r\n.modal select:hover,\r\n.due-date:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.task-error {\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    top: 50%;  \r\n    left: 50%; \r\n    width: 48vw;\r\n    max-width: 550px;\r\n    /* margin: 0 auto; */\r\n    padding: 0.5rem 0;\r\n    text-align: center;\r\n    background-color: red;\r\n    color: #fff;\r\n    z-index: 2;\r\n    visibility: hidden;\r\n}\r\n\r\n/* PROJECT MODAL */\r\n\r\n.project-modal {\r\n    height: 16rem;\r\n    width: 20rem;\r\n    margin: auto;\r\n    background-color: var(--green-two);\r\n    max-width: 300px;\r\n    border: solid 3px #fff;\r\n    border-radius: 10px;\r\n    opacity: 0.5;\r\n}\r\n\r\n.project-modal input {\r\n    height: 1.5rem;\r\n    width: 85%;\r\n    padding-left: 0.2rem;\r\n    margin: 1.5rem 0;\r\n}\r\n\r\n.project-error {\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    top: 45%;  \r\n    left: 50%;\r\n    width: 18rem;\r\n    /* max-width: 550px; */\r\n    padding: 0.3rem 0;\r\n    text-align: center;\r\n    background-color: red;\r\n    color: #fff;\r\n    font-size: 0.8rem;\r\n    z-index: 2;\r\n    visibility: hidden;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\r\n:root {\r\n    --pale-green: #cad2c5;\r\n    --green-one: #84a98c;\r\n    --green-two: #52796f;\r\n    --green-three: #354f52;\r\n    --green-four: #2f3e46;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n        background-color: var(--pale-green);\r\n        font-family: 'Roboto', sans-serif;\r\n        \r\n}\r\n\r\n.page-title {\r\n    display: flex;\r\n    padding: 2rem;\r\n    background-color: var(--green-two);\r\n}\r\n\r\n.page-title h2 {\r\n    font-size: 3rem;\r\n    margin: 0 auto;\r\n    color: #fff;\r\n}\r\n\r\n.menu-toggle {\r\n    position: absolute;\r\n    top: 45px;\r\n    color: #fff\r\n}\r\n\r\n.menu-toggle.visible {\r\n    left: 310px;\r\n}\r\n\r\n.add-task {\r\n    display: flex;\r\n    align-self: center;\r\n    color: #fff;\r\n}\r\n\r\n.menu-toggle:hover,\r\n.add-task:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* SIDE MENU */\r\n\r\n.side-menu.visible {\r\n    left: 0;\r\n}\r\n\r\n.side-menu {\r\n    width: 300px;\r\n    height: 100vh;\r\n    position: relative;\r\n    left: -300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-shrink: 0;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    background-color: var(--green-three);\r\n    color: #fff;\r\n    transition: .5s;\r\n}\r\n\r\n.side-menu button {   \r\n    width: 80%;\r\n    margin: 1.5rem 0;\r\n    padding: 0.5rem 0;\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #fff;\r\n    background-color: var(--green-three);\r\n    border: solid 2px var(--green-two);\r\n    border-radius: 5px;\r\n    transition: .2s;\r\n}\r\n\r\n.side-menu button:hover {\r\n    cursor: pointer;\r\n    background-color: var(--green-two);\r\n}\r\n\r\n.side-menu h2 {\r\n    width: 80%;\r\n    margin: 3rem 0 1rem;\r\n    border-bottom: 3px solid var(--green-two);\r\n    padding-bottom: 0.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.side-menu i {\r\n    padding-right: 0.7rem;\r\n}\r\n\r\n.project-entries {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.project-entries div {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.project-entries button {\r\n    height: 1.6rem;\r\n    width: 11rem;\r\n    margin: 0 auto;\r\n    border: solid 2px var(--green-two);\r\n    border-radius: 5px;\r\n    background-color: var(--green-three);\r\n    font-size: 0.75rem;\r\n    line-height: 0.6rem;\r\n}\r\n\r\n.project-entries button:hover {\r\n    background-color: var(--green-two);\r\n    border: solid 2px var(--green-two);\r\n}\r\n\r\n.project-delete {\r\n    margin-left: 0.6rem;\r\n    transition: .2s;\r\n}\r\n\r\n.project-delete:hover {\r\n    cursor: pointer;\r\n    color: var(--green-one);\r\n}\r\n\r\n/* PAGE INTERFACE */\r\n\r\n.interface-container {\r\n    display: flex;\r\n}\r\n\r\n.page-interface {\r\n    position: relative;\r\n    font-size: 1.5rem;\r\n    right: 300px;\r\n    transition: .5s;\r\n    padding: 2rem 4rem;\r\n}\r\n\r\n.page-interface.visible {\r\n    right: 0px;\r\n}\r\n\r\n.page-interface h2 {\r\n    color: var(--green-three);\r\n    width: 100vw;\r\n    border-bottom: solid 3px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.entry-title {\r\n    display: flex;\r\n    align-items: baseline;\r\n}\r\n\r\n.entry-title input {\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.task-entries {\r\n    width: 60%;\r\n    /* max-width: 1050px; */\r\n}\r\n\r\n.task-entry {\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: space-between;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.date {\r\n    display: flex;\r\n    flex-grow: 2;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n    \r\n}\r\n.task-title {\r\n    width: 10rem;\r\n}\r\n\r\n\r\n\r\n.entry-buttons i {\r\n    margin: 0 0.3rem;\r\n}\r\n\r\n/* TASK MODAL */\r\n\r\n.modal {\r\n    position: absolute;\r\n    flex-direction: column;\r\n    top: -20%;  \r\n    left: 50%; \r\n    transform: translate(-50%, 50%);\r\n    background-color: var(--green-two);\r\n    height: 74vh;\r\n    width: 50vw;\r\n    max-width: 550px;\r\n    border: solid 4px #fff;\r\n    border-radius: 10px;\r\n    opacity: 0.5;\r\n    z-index: 0;\r\n}\r\n\r\n@keyframes fade-in {\r\n    0% { top: -25%; }\r\n    100% { top: -20%; opacity: 1; }\r\n}\r\n\r\n.modal::backdrop {\r\n    background-color: rgba(0,0,0,0.5);\r\n}\r\n\r\n\r\n.form-title {\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: center;\r\n}\r\n\r\n.form-title h2 {\r\n    padding: 1.5rem 0;\r\n}\r\n\r\n.form-title i {\r\n    padding-right: 0.5rem;\r\n    color: black;\r\n}\r\n\r\n.fa-square-xmark {\r\n    position: absolute;\r\n    top: 38px;\r\n    right: 10px;\r\n    color: black;\r\n}\r\n\r\n.fa-square-xmark:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.modal-input {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.modal label,\r\n.project-modal label {\r\n    display: flex;\r\n    padding: 0 0 0.4rem;\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.modal textarea {\r\n    resize: vertical;\r\n}\r\n\r\n.modal textarea::placeholder {\r\n    padding-left: 1rem;\r\n}\r\n\r\n.modal input,\r\n.modal textarea,\r\n.modal select {\r\n    margin: 0 auto;\r\n    width: 85%;\r\n    margin-bottom: 1rem;\r\n    padding: 0.2rem ;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n}\r\n\r\n.modal button,\r\n.project-modal button {\r\n    display: flex;\r\n    margin: 0.8rem auto;\r\n    padding: 0.5rem 2.5rem;\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.modal button:hover,\r\n.project-modal button:hover {\r\n    cursor: pointer;\r\n    color: #fff;\r\n    background-color: var(--green-one);\r\n    transition: 0.3s;\r\n}\r\n\r\n.modal select:hover,\r\n.due-date:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.task-error {\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    top: 50%;  \r\n    left: 50%; \r\n    width: 48vw;\r\n    max-width: 550px;\r\n    /* margin: 0 auto; */\r\n    padding: 0.5rem 0;\r\n    text-align: center;\r\n    background-color: red;\r\n    color: #fff;\r\n    z-index: 2;\r\n    visibility: hidden;\r\n}\r\n\r\n/* PROJECT MODAL */\r\n\r\n.project-modal {\r\n    height: 16rem;\r\n    width: 20rem;\r\n    margin: auto;\r\n    background-color: var(--green-two);\r\n    max-width: 300px;\r\n    border: solid 3px #fff;\r\n    border-radius: 10px;\r\n    opacity: 0.5;\r\n}\r\n\r\n.project-modal input {\r\n    height: 1.5rem;\r\n    width: 85%;\r\n    padding-left: 0.2rem;\r\n    margin: 1.5rem 0;\r\n}\r\n\r\n.project-error {\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    top: 45%;  \r\n    left: 50%;\r\n    width: 18rem;\r\n    /* max-width: 550px; */\r\n    padding: 0.3rem 0;\r\n    text-align: center;\r\n    background-color: red;\r\n    color: #fff;\r\n    font-size: 0.8rem;\r\n    z-index: 2;\r\n    visibility: hidden;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "projectArray": () => (/* binding */ projectArray)
/* harmony export */ });




const addProject = document.getElementById('addProject');
const projectEntries = document.getElementById('projectEntries');
const projectTitle = document.getElementById('projectTitle');
const projectModal = document.getElementById('projectModal')
const closeProjectModal = document.getElementById('closeProjectModal')
const taskProject = document.getElementById('taskProject')
const projectError = document.getElementById('projectError')
const interfaceHeader = document.getElementById('interfaceHeader')
const taskEntries = document.getElementById('taskEntries')

let projectArray = []
let projectOptions = ["Inbox"]

class Project {

    constructor() {
        this.title = projectTitle.value
        this.storedTasks = []
    }

    storeProject() {
        projectArray.push(this)
        console.log(projectArray)
    }

    displayTasks() {

        projectEntries.childNodes.forEach(node => {
            if (node.nodeName == 'DIV') {

                projectArray.forEach(project => {
                    if (project.title == node.childNodes[1].textContent) {
                       
                        project.storedTasks.forEach(task => {
                            
                            let taskDiv = document.createElement('div')
                            taskDiv.classList.add('task-entry')
                            taskEntries.appendChild(taskDiv)

                            let entryTitle = document.createElement('div')
                                entryTitle.classList.add('entry-title')
                                taskDiv.appendChild(entryTitle)

                                let checkBox = document.createElement('input')
                                    checkBox.type = 'checkbox'
                                
                                let titleText = document.createElement('h6')
                                    titleText.textContent = task.title

                                entryTitle.appendChild(checkBox)
                                entryTitle.appendChild(titleText)

                            let entryDate = document.createElement('h6')
                                entryDate.textContent = task.dueDate
                                taskDiv.appendChild(entryDate)
                            
                            let entryButtons = document.createElement('div')
                                entryButtons.classList.add('entry-buttons')
                                taskDiv.appendChild(entryButtons)

                                let newEntryButton = document.createElement('i')
                                    newEntryButton.setAttribute('class','fa-solid fa-pen-to-square')

                                let deleteEntryButton = document.createElement('i')
                                    deleteEntryButton.setAttribute('class', 'fa-solid fa-xmark')

                            entryButtons.appendChild(newEntryButton)
                            entryButtons.appendChild(deleteEntryButton)
                        })  
                    }
                })
            }
        })
    }   
            

    createProjectBtn() {

        let projectDiv = document.createElement('div')
        projectEntries.appendChild(projectDiv)

            let projectIcon = document.createElement('i')
            projectIcon.setAttribute('class', 'fa-solid fa-list-ul')

            let projectButton = document.createElement('button')
            projectButton.onclick = e => {
                this.loadProject(e)
                this.displayTasks(e)
            }
            projectButton.textContent = this.title

            let projectDelete = document.createElement('i')
            projectDelete.setAttribute('class', 'fa-regular fa-trash-can fa-lg project-delete')
            projectDelete.onclick = e => {
                this.deleteOption(e);
                e.target.parentNode.remove()
            }

            projectDiv.appendChild(projectIcon)
            projectDiv.appendChild(projectButton)
            projectDiv.appendChild(projectDelete)
    }
    
    addOption() {

        let newOption = document.createElement('option')
        newOption.value = this.title
        newOption.textContent = this.title
        taskProject.appendChild(newOption)
        // projectOptions.push(this.title)
    }

    deleteOption() {

            taskProject.childNodes.forEach(node => {
                if (node.nodeType == 1) {
                    if(node.value == this.title) {
                        taskProject.removeChild(node)
                        this.deleteProject()
                    }
                }
            })
        }

    deleteProject() {

        let result = projectArray.filter(project => project.title !== this.title)
        projectArray = result 
    }

    loadProject() {
        interfaceHeader.textContent = this.title

        // Deletes nodes, but not current interface tasks
        taskEntries.childNodes.forEach(node => {
            taskEntries.removeChild(node)
        })
        console.log(taskEntries.childNodes)

        // Load new tasks
    }

    showError() {
        projectError.style.visibility = 'hidden'
    }

    projectError() {

        let projectSubmit = false

        if (this.title == '') {
            projectError.textContent = '"Project Name" field is required'
            projectError.style.visibility = 'visible'
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

        else {
            projectSubmit = true
        }

        if (projectSubmit) {
            this.storeProject()
            this.createProjectBtn()
            this.addOption()
            this.resetValue()
            projectModal.close()
        }
    }

    resetValue() {
        projectTitle.value = ''
    }
    
}


    
addProject.addEventListener('click', function() {
    projectModal.showModal()
    projectModal.style.animation = 'fade-in 0.5s forwards';
})

closeProjectModal.addEventListener('click', function() {
    projectModal.close()
})

submitProject.addEventListener('click', function(e) {
    e.preventDefault()
    let project = new Project
    project.projectError()
})


/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "submitTask": () => (/* binding */ submitTask)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");


;


const addTask = document.getElementById('addTask');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const submitTask = document.getElementById('submitTask');
const taskTitle = document.getElementById('taskTitle')
const taskDescription = document.getElementById('taskDescription')
const taskProject = document.getElementById('taskProject')
const taskPriority = document.getElementById('taskPriority')
const dueDate = document.getElementById('dueDate')
const taskError = document.getElementById('taskError')

class Task {

    constructor() {
        
        this.title = taskTitle.value;
        this.description = taskDescription.value;
        this.project = taskProject.value;
        this.priority = taskPriority.value;
        this.dueDate = dueDate.value;
    }

    storeData() {

        _addProject__WEBPACK_IMPORTED_MODULE_0__.projectArray.forEach(project => {
            if (project.title == this.project) {
                project.storedTasks.push(this)
            }
        })
    }

    loadData() {
        // Compile data into an array and display tasks according to stored data
    }

    showError() {
        taskError.style.visibility = 'hidden'
    }

    taskError() {

        let taskSubmit = false

        if (this.title == '' || this.title == null) {
            taskError.textContent = '"Title" field is required'
            taskError.style.visibility = 'visible'
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

        else if (this.project == '') {
            taskError.textContent = '"Project" field is required'
            taskError.style.visibility = 'visible'
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

        else if (this.priority == '') {
            taskError.textContent = '"Priority" field is required'
            taskError.style.visibility = 'visible'
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

        else if (this.dueDate == '') {
            taskError.textContent = '"Due Date" field is required'
            taskError.style.visibility = 'visible'
            setTimeout(() => {
                this.showError()
            }, 5000);
        }

        else {
            taskSubmit = true
        }

        if (taskSubmit) {
            this.storeData()
            this.resetValues()
            modal.close()
        }
    }

    resetValues() {
        taskTitle.value = ''
        taskDescription.value = ''
        taskProject.value = ''
        taskPriority.value = ''
        dueDate.value = ''
    }
}

addTask.addEventListener('click', function() {
    modal.showModal()
    modal.style.animation = 'fade-in 0.5s forwards';
})

closeModal.addEventListener('click', function() {
    modal.close()
})

submitTask.addEventListener('click', function(e) {
    e.preventDefault()
    let data = new Task
    data.taskError()
})





/***/ }),

/***/ "./src/menuToggle.js":
/*!***************************!*\
  !*** ./src/menuToggle.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuToggle": () => (/* binding */ menuToggle)
/* harmony export */ });


const menuToggle = document.getElementById('menuToggle')
const sideMenu = document.getElementById('sideMenu')
const pageInterface = document.getElementById('pageInterface')


menuToggle.addEventListener('click', function() {
    sideMenu.classList.toggle('visible')
    pageInterface.classList.toggle('visible')
})

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menuToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuToggle */ "./src/menuToggle.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");


;





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFNBQVMsS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLG9CQUFvQiwrQkFBK0IsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNVztBQUNaO0FBQ0EsQ0FBMkM7QUFDSTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BIcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O1VDVkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FZO0FBQ1o7QUFDQSxDQUFxQjtBQUNxQjtBQUM2QjtBQUNtQjtBQUMxRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC8uL3NyYy9tZW51VG9nZ2xlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLXBhbGUtZ3JlZW46ICNjYWQyYzU7XFxyXFxuICAgIC0tZ3JlZW4tb25lOiAjODRhOThjO1xcclxcbiAgICAtLWdyZWVuLXR3bzogIzUyNzk2ZjtcXHJcXG4gICAgLS1ncmVlbi10aHJlZTogIzM1NGY1MjtcXHJcXG4gICAgLS1ncmVlbi1mb3VyOiAjMmYzZTQ2O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JlZW4pO1xcclxcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgXFxyXFxufVxcclxcblxcclxcbi5wYWdlLXRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tdHdvKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtdGl0bGUgaDIge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtdG9nZ2xlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDQ1cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmXFxyXFxufVxcclxcblxcclxcbi5tZW51LXRvZ2dsZS52aXNpYmxlIHtcXHJcXG4gICAgbGVmdDogMzEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXRvZ2dsZTpob3ZlcixcXHJcXG4uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNJREUgTUVOVSAqL1xcclxcblxcclxcbi5zaWRlLW1lbnUudmlzaWJsZSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLW1lbnUge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogLTMwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi10aHJlZSk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLW1lbnUgYnV0dG9uIHsgICBcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLXRocmVlKTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZ3JlZW4tdHdvKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLW1lbnUgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi10d28pO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1tZW51IGgyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiAzcmVtIDAgMXJlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWdyZWVuLXR3byk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtbWVudSBpIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMC43cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1lbnRyaWVzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZW50cmllcyBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1lbnRyaWVzIGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMS42cmVtO1xcclxcbiAgICB3aWR0aDogMTFyZW07XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1ncmVlbi10d28pO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLXRocmVlKTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1lbnRyaWVzIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLXR3byk7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWdyZWVuLXR3byk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGVsZXRlOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tb25lKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUEFHRSBJTlRFUkZBQ0UgKi9cXHJcXG5cXHJcXG4uaW50ZXJmYWNlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWludGVyZmFjZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHJpZ2h0OiAzMDBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWludGVyZmFjZS52aXNpYmxlIHtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtaW50ZXJmYWNlIGgyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuLXRocmVlKTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5lbnRyeS10aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudHJ5LXRpdGxlIGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWVudHJpZXMge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICAvKiBtYXgtd2lkdGg6IDEwNTBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZW50cnkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1ncm93OiAyO1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLnRhc2stdGl0bGUge1xcclxcbiAgICB3aWR0aDogMTByZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5lbnRyeS1idXR0b25zIGkge1xcclxcbiAgICBtYXJnaW46IDAgMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUQVNLIE1PREFMICovXFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0b3A6IC0yMCU7ICBcXHJcXG4gICAgbGVmdDogNTAlOyBcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tdHdvKTtcXHJcXG4gICAgaGVpZ2h0OiA3NHZoO1xcclxcbiAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcclxcbiAgICAwJSB7IHRvcDogLTI1JTsgfVxcclxcbiAgICAxMDAlIHsgdG9wOiAtMjAlOyBvcGFjaXR5OiAxOyB9XFxyXFxufVxcclxcblxcclxcbi5tb2RhbDo6YmFja2Ryb3Age1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5mb3JtLXRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGl0bGUgaDIge1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGl0bGUgaSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtc3F1YXJlLXhtYXJrIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDM4cHg7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mYS1zcXVhcmUteG1hcms6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1pbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBsYWJlbCxcXHJcXG4ucHJvamVjdC1tb2RhbCBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAwLjRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgdGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW5wdXQsXFxyXFxuLm1vZGFsIHRleHRhcmVhLFxcclxcbi5tb2RhbCBzZWxlY3Qge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtIDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGJ1dHRvbixcXHJcXG4ucHJvamVjdC1tb2RhbCBidXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDAuOHJlbSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMi41cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgYnV0dG9uOmhvdmVyLFxcclxcbi5wcm9qZWN0LW1vZGFsIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLW9uZSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBzZWxlY3Q6aG92ZXIsXFxyXFxuLmR1ZS1kYXRlOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1lcnJvciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHRvcDogNTAlOyAgXFxyXFxuICAgIGxlZnQ6IDUwJTsgXFxyXFxuICAgIHdpZHRoOiA0OHZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcclxcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KRUNUIE1PREFMICovXFxyXFxuXFxyXFxuLnByb2plY3QtbW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDE2cmVtO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tdHdvKTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1tb2RhbCBpbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZXJyb3Ige1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB0b3A6IDQ1JTsgIFxcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiAxOHJlbTtcXHJcXG4gICAgLyogbWF4LXdpZHRoOiA1NTBweDsgKi9cXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixzQkFB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QUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tcGFsZS1ncmVlbjogI2NhZDJjNTtcXHJcXG4gICAgLS1ncmVlbi1vbmU6ICM4NGE5OGM7XFxyXFxuICAgIC0tZ3JlZW4tdHdvOiAjNTI3OTZmO1xcclxcbiAgICAtLWdyZWVuLXRocmVlOiAjMzU0ZjUyO1xcclxcbiAgICAtLWdyZWVuLWZvdXI6ICMyZjNlNDY7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmVlbik7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtdGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi10d28pO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS10aXRsZSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS10b2dnbGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDVweDtcXHJcXG4gICAgY29sb3I6ICNmZmZcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtdG9nZ2xlLnZpc2libGUge1xcclxcbiAgICBsZWZ0OiAzMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtdG9nZ2xlOmhvdmVyLFxcclxcbi5hZGQtdGFzazpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogU0lERSBNRU5VICovXFxyXFxuXFxyXFxuLnNpZGUtbWVudS52aXNpYmxlIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtbWVudSB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAtMzAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLXRocmVlKTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRyYW5zaXRpb246IC41cztcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtbWVudSBidXR0b24geyAgIFxcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tdGhyZWUpO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1ncmVlbi10d28pO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtbWVudSBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLXR3byk7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLW1lbnUgaDIge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IDNyZW0gMCAxcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZ3JlZW4tdHdvKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1tZW51IGkge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWVudHJpZXMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1lbnRyaWVzIGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWVudHJpZXMgYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAxLjZyZW07XFxyXFxuICAgIHdpZHRoOiAxMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWdyZWVuLXR3byk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tdGhyZWUpO1xcclxcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWVudHJpZXMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tdHdvKTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tZ3JlZW4tdHdvKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGVsZXRlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZWxldGU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbi1vbmUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQQUdFIElOVEVSRkFDRSAqL1xcclxcblxcclxcbi5pbnRlcmZhY2UtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtaW50ZXJmYWNlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgcmlnaHQ6IDMwMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtaW50ZXJmYWNlLnZpc2libGUge1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1pbnRlcmZhY2UgaDIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tdGhyZWUpO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudHJ5LXRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnktdGl0bGUgaW5wdXQge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZW50cmllcyB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIC8qIG1heC13aWR0aDogMTA1MHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1lbnRyeSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWdyb3c6IDI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4udGFzay10aXRsZSB7XFxyXFxuICAgIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmVudHJ5LWJ1dHRvbnMgaSB7XFxyXFxuICAgIG1hcmdpbjogMCAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFRBU0sgTU9EQUwgKi9cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRvcDogLTIwJTsgIFxcclxcbiAgICBsZWZ0OiA1MCU7IFxcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi10d28pO1xcclxcbiAgICBoZWlnaHQ6IDc0dmg7XFxyXFxuICAgIHdpZHRoOiA1MHZ3O1xcclxcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDRweCAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxyXFxuICAgIDAlIHsgdG9wOiAtMjUlOyB9XFxyXFxuICAgIDEwMCUgeyB0b3A6IC0yMCU7IG9wYWNpdHk6IDE7IH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsOjpiYWNrZHJvcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZvcm0tdGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZSBoMiB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZSBpIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5mYS1zcXVhcmUteG1hcmsge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMzhweDtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXNxdWFyZS14bWFyazpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGxhYmVsLFxcclxcbi5wcm9qZWN0LW1vZGFsIGxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMCAwIDAuNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBpbnB1dCxcXHJcXG4ubW9kYWwgdGV4dGFyZWEsXFxyXFxuLm1vZGFsIHNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW0gO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgYnV0dG9uLFxcclxcbi5wcm9qZWN0LW1vZGFsIGJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbjogMC44cmVtIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAyLjVyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBidXR0b246aG92ZXIsXFxyXFxuLnByb2plY3QtbW9kYWwgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tb25lKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHNlbGVjdDpob3ZlcixcXHJcXG4uZHVlLWRhdGU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWVycm9yIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgdG9wOiA1MCU7ICBcXHJcXG4gICAgbGVmdDogNTAlOyBcXHJcXG4gICAgd2lkdGg6IDQ4dnc7XFxyXFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIFBST0pFQ1QgTU9EQUwgKi9cXHJcXG5cXHJcXG4ucHJvamVjdC1tb2RhbCB7XFxyXFxuICAgIGhlaWdodDogMTZyZW07XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi10d28pO1xcclxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW1vZGFsIGlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcclxcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1lcnJvciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHRvcDogNDUlOyAgXFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDE4cmVtO1xcclxcbiAgICAvKiBtYXgtd2lkdGg6IDU1MHB4OyAqL1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW0gMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0J1xyXG5cclxuZXhwb3J0IHthZGRQcm9qZWN0LCBwcm9qZWN0QXJyYXl9XHJcblxyXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcclxuY29uc3QgcHJvamVjdEVudHJpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEVudHJpZXMnKTtcclxuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUaXRsZScpO1xyXG5jb25zdCBwcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE1vZGFsJylcclxuY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VQcm9qZWN0TW9kYWwnKVxyXG5jb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJvamVjdCcpXHJcbmNvbnN0IHByb2plY3RFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RXJyb3InKVxyXG5jb25zdCBpbnRlcmZhY2VIZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50ZXJmYWNlSGVhZGVyJylcclxuY29uc3QgdGFza0VudHJpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0VudHJpZXMnKVxyXG5cclxubGV0IHByb2plY3RBcnJheSA9IFtdXHJcbmxldCBwcm9qZWN0T3B0aW9ucyA9IFtcIkluYm94XCJdXHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gcHJvamVjdFRpdGxlLnZhbHVlXHJcbiAgICAgICAgdGhpcy5zdG9yZWRUYXNrcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVQcm9qZWN0KCkge1xyXG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHRoaXMpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlUYXNrcygpIHtcclxuXHJcbiAgICAgICAgcHJvamVjdEVudHJpZXMuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PSAnRElWJykge1xyXG5cclxuICAgICAgICAgICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09IG5vZGUuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnN0b3JlZFRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1lbnRyeScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRW50cmllcy5hcHBlbmRDaGlsZCh0YXNrRGl2KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2VudHJ5LXRpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGVudHJ5VGl0bGUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5VGl0bGUuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGVudHJ5RGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVudHJ5QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlCdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2VudHJ5LWJ1dHRvbnMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZW50cnlCdXR0b25zKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RW50cnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RW50cnlCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2ZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmUnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlRW50cnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlRW50cnlCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYS1zb2xpZCBmYS14bWFyaycpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlCdXR0b25zLmFwcGVuZENoaWxkKG5ld0VudHJ5QnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlCdXR0b25zLmFwcGVuZENoaWxkKGRlbGV0ZUVudHJ5QnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIGNyZWF0ZVByb2plY3RCdG4oKSB7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0RW50cmllcy5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxyXG5cclxuICAgICAgICAgICAgbGV0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICAgICAgICAgIHByb2plY3RJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmEtc29saWQgZmEtbGlzdC11bCcpXHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgIHByb2plY3RCdXR0b24ub25jbGljayA9IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvamVjdChlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VGFza3MoZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gdGhpcy50aXRsZVxyXG5cclxuICAgICAgICAgICAgbGV0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgICAgICAgICAgcHJvamVjdERlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhLXJlZ3VsYXIgZmEtdHJhc2gtY2FuIGZhLWxnIHByb2plY3QtZGVsZXRlJylcclxuICAgICAgICAgICAgcHJvamVjdERlbGV0ZS5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZU9wdGlvbihlKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbilcclxuICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKVxyXG4gICAgICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REZWxldGUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZE9wdGlvbigpIHtcclxuXHJcbiAgICAgICAgbGV0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gdGhpcy50aXRsZVxyXG4gICAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IHRoaXMudGl0bGVcclxuICAgICAgICB0YXNrUHJvamVjdC5hcHBlbmRDaGlsZChuZXdPcHRpb24pXHJcbiAgICAgICAgLy8gcHJvamVjdE9wdGlvbnMucHVzaCh0aGlzLnRpdGxlKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZU9wdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHRhc2tQcm9qZWN0LmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihub2RlLnZhbHVlID09IHRoaXMudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1Byb2plY3QucmVtb3ZlQ2hpbGQobm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3QoKSB7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSAhPT0gdGhpcy50aXRsZSlcclxuICAgICAgICBwcm9qZWN0QXJyYXkgPSByZXN1bHQgXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFByb2plY3QoKSB7XHJcbiAgICAgICAgaW50ZXJmYWNlSGVhZGVyLnRleHRDb250ZW50ID0gdGhpcy50aXRsZVxyXG5cclxuICAgICAgICAvLyBEZWxldGVzIG5vZGVzLCBidXQgbm90IGN1cnJlbnQgaW50ZXJmYWNlIHRhc2tzXHJcbiAgICAgICAgdGFza0VudHJpZXMuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICB0YXNrRW50cmllcy5yZW1vdmVDaGlsZChub2RlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2codGFza0VudHJpZXMuY2hpbGROb2RlcylcclxuXHJcbiAgICAgICAgLy8gTG9hZCBuZXcgdGFza3NcclxuICAgIH1cclxuXHJcbiAgICBzaG93RXJyb3IoKSB7XHJcbiAgICAgICAgcHJvamVjdEVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgfVxyXG5cclxuICAgIHByb2plY3RFcnJvcigpIHtcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3RTdWJtaXQgPSBmYWxzZVxyXG5cclxuICAgICAgICBpZiAodGhpcy50aXRsZSA9PSAnJykge1xyXG4gICAgICAgICAgICBwcm9qZWN0RXJyb3IudGV4dENvbnRlbnQgPSAnXCJQcm9qZWN0IE5hbWVcIiBmaWVsZCBpcyByZXF1aXJlZCdcclxuICAgICAgICAgICAgcHJvamVjdEVycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpXHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2plY3RTdWJtaXQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvamVjdFN1Ym1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlUHJvamVjdCgpXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdEJ0bigpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkT3B0aW9uKClcclxuICAgICAgICAgICAgdGhpcy5yZXNldFZhbHVlKClcclxuICAgICAgICAgICAgcHJvamVjdE1vZGFsLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRWYWx1ZSgpIHtcclxuICAgICAgICBwcm9qZWN0VGl0bGUudmFsdWUgPSAnJ1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4gICAgXHJcbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHByb2plY3RNb2RhbC5zaG93TW9kYWwoKVxyXG4gICAgcHJvamVjdE1vZGFsLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlLWluIDAuNXMgZm9yd2FyZHMnO1xyXG59KVxyXG5cclxuY2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHByb2plY3RNb2RhbC5jbG9zZSgpXHJcbn0pXHJcblxyXG5zdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0XHJcbiAgICBwcm9qZWN0LnByb2plY3RFcnJvcigpXHJcbn0pXHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vYWRkUHJvamVjdFwiXHJcbmV4cG9ydCB7IFRhc2sgLGFkZFRhc2ssIGNsb3NlTW9kYWwsIHN1Ym1pdFRhc2t9XHJcblxyXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2snKTtcclxuY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbmNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0VGFzaycpO1xyXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RpdGxlJylcclxuY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjcmlwdGlvbicpXHJcbmNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcm9qZWN0JylcclxuY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQcmlvcml0eScpXHJcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpXHJcbmNvbnN0IHRhc2tFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRXJyb3InKVxyXG5cclxuY2xhc3MgVGFzayB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRhc2tUaXRsZS52YWx1ZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHRhc2tQcm9qZWN0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkudmFsdWU7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9yZURhdGEoKSB7XHJcblxyXG4gICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdC50aXRsZSA9PSB0aGlzLnByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3Quc3RvcmVkVGFza3MucHVzaCh0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGF0YSgpIHtcclxuICAgICAgICAvLyBDb21waWxlIGRhdGEgaW50byBhbiBhcnJheSBhbmQgZGlzcGxheSB0YXNrcyBhY2NvcmRpbmcgdG8gc3RvcmVkIGRhdGFcclxuICAgIH1cclxuXHJcbiAgICBzaG93RXJyb3IoKSB7XHJcbiAgICAgICAgdGFza0Vycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xyXG4gICAgfVxyXG5cclxuICAgIHRhc2tFcnJvcigpIHtcclxuXHJcbiAgICAgICAgbGV0IHRhc2tTdWJtaXQgPSBmYWxzZVxyXG5cclxuICAgICAgICBpZiAodGhpcy50aXRsZSA9PSAnJyB8fCB0aGlzLnRpdGxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFza0Vycm9yLnRleHRDb250ZW50ID0gJ1wiVGl0bGVcIiBmaWVsZCBpcyByZXF1aXJlZCdcclxuICAgICAgICAgICAgdGFza0Vycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpXHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm9qZWN0ID09ICcnKSB7XHJcbiAgICAgICAgICAgIHRhc2tFcnJvci50ZXh0Q29udGVudCA9ICdcIlByb2plY3RcIiBmaWVsZCBpcyByZXF1aXJlZCdcclxuICAgICAgICAgICAgdGFza0Vycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpXHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcmlvcml0eSA9PSAnJykge1xyXG4gICAgICAgICAgICB0YXNrRXJyb3IudGV4dENvbnRlbnQgPSAnXCJQcmlvcml0eVwiIGZpZWxkIGlzIHJlcXVpcmVkJ1xyXG4gICAgICAgICAgICB0YXNrRXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKClcclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmR1ZURhdGUgPT0gJycpIHtcclxuICAgICAgICAgICAgdGFza0Vycm9yLnRleHRDb250ZW50ID0gJ1wiRHVlIERhdGVcIiBmaWVsZCBpcyByZXF1aXJlZCdcclxuICAgICAgICAgICAgdGFza0Vycm9yLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpXHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tTdWJtaXQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFza1N1Ym1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlRGF0YSgpXHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRWYWx1ZXMoKVxyXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VmFsdWVzKCkge1xyXG4gICAgICAgIHRhc2tUaXRsZS52YWx1ZSA9ICcnXHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gJydcclxuICAgICAgICB0YXNrUHJvamVjdC52YWx1ZSA9ICcnXHJcbiAgICAgICAgdGFza1ByaW9yaXR5LnZhbHVlID0gJydcclxuICAgICAgICBkdWVEYXRlLnZhbHVlID0gJydcclxuICAgIH1cclxufVxyXG5cclxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgbW9kYWwuc2hvd01vZGFsKClcclxuICAgIG1vZGFsLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlLWluIDAuNXMgZm9yd2FyZHMnO1xyXG59KVxyXG5cclxuY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgbW9kYWwuY2xvc2UoKVxyXG59KVxyXG5cclxuc3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgbGV0IGRhdGEgPSBuZXcgVGFza1xyXG4gICAgZGF0YS50YXNrRXJyb3IoKVxyXG59KVxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgeyBtZW51VG9nZ2xlIH1cclxuXHJcbmNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudVRvZ2dsZScpXHJcbmNvbnN0IHNpZGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVNZW51JylcclxuY29uc3QgcGFnZUludGVyZmFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlSW50ZXJmYWNlJylcclxuXHJcblxyXG5tZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBzaWRlTWVudS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJylcclxuICAgIHBhZ2VJbnRlcmZhY2UuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpXHJcbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgbWVudVRvZ2dsZSB9IGZyb20gJy4vbWVudVRvZ2dsZSc7XHJcbmltcG9ydCB7IGFkZFRhc2ssIGNsb3NlTW9kYWwsIHN1Ym1pdFRhc2ssIHRhc2tBcnJheSB9IGZyb20gJy4vYWRkVGFzayc7XHJcbmltcG9ydCB7IGFkZFByb2plY3QsIGNsb3NlUHJvamVjdE1vZGFsLCBzdWJtaXRQcm9qZWN0LCBwcm9qZWN0QXJyYXkgfSBmcm9tICcuL2FkZFByb2plY3QnO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9