/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html, body{
    height: 100%;
    user-select: none;
}

*, *::before, *::after{
    padding: 0;
    margin: 0;
}

body{
    --main-content: white;
    --side-bar: #eee;
    --btn-topbar: #607AB6;

    background-color: #eee;
    color: black;
    box-sizing: border-box;
    display: flex; 
    flex-flow: column wrap;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1, h2, h3{
    margin-block-start: 0em;
    margin-block-end: 0em;
}

input {
    font-weight: 500;
    font-size: 18px;
    border: none;
    width: 90%;
    /* border: 1px solid salmon; */
    background-color: transparent;
}

input:hover, input:focus, input:active {
    outline: none;
}

.input-container {
    height: 24px;
    width: inherit;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    border-bottom: 1px solid grey;
    /* border: 1px solid blue; */
}

#div{
    display: flex;
    flex-flow: column;
    padding: 3rem 5rem;
    user-select: none;
    /* border: 1px solid yellow; */
}

#wrapper{
    /* border: 1px solid red; */
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form {
    /* border: 1px solid orange; */
    width: fit-content;
    display: grid;
    grid-template-columns: 23rem 13rem;
    gap: 10px;
}

button {
    background-color: sandybrown;
    border: none;
    border-radius: 10px;
    padding: 12px 32px;
    font-weight: 550;
    font-size: 20px;
}

button:hover {
    background-color: rgb(184, 125, 73);
}

object{
    pointer-events: none;
    cursor: pointer;
}

select {
    width: 170px; 
    padding: 13px 20px 13px 0px;
    font-size: 18px; 
    border-color: #eee;       /* changes with the background */
    border-bottom: 1px solid #252432;
    background-color: transparent;
}

#submit-btn-div {
    grid-area: 8 / 1 / 9 / 3;
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

#form-title-div {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
}

.info-container{
    /* border: 3px solid green; */
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.name-container {
    grid-area: 1 / 1 / 2 / 3;
}

.username-container {
    grid-area: 2 / 1 / 3 / 3;
}

.birthday-container {
    grid-area: 3 / 1 / 4 / 3;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-security{
    -webkit-text-security: disc;
}

.address-houseN-container {
    grid-area: 4 / 1 / 5 / 3;
}

.telephone-container {
    grid-area: 5 / 1 / 6 / 3;
}

.email-container {
    grid-area: 6 / 1 / 7 / 3;
}

.password-container {
    grid-area: 7 / 1 / 8 / 3;
}

.label-text {
    font-size: 20px;
    font-weight: 500;
}

.wrapper-flex-column {
    /* border: 1px solid orange; */
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.wrapper-grid {
    /* border: 1px solid orange; */
    display: grid;
    grid-template-columns: 65% 30%;
    gap: 30px;
}

.input-container-w-label {
    display: flex;
    flex-direction: column;
    gap: 2px;
    height: 80px;
    /* border: 1px solid purple; */
}

.bday-w-label {
    height: 100px;
}

.smaller-label-text {
    font-size: 13px;
    color: grey;
}

.birthday-input-container {
    display: flex;
    justify-content: space-between;
    height: 90px;
}

.bigger-div-74 {
    grid-column: 1 / 2;
}

.smaller-div-20 { 
    grid-column: 2 / 3;
    /* border: 1px solid red; */
}

/* for svg's */
.warning-div {
    display: flex;
    align-items: center;
    gap: 6px;
    /* border: 1px solid blue; */
}

.warning-div:hover{
    cursor: pointer;
}

.warning-svg, .round-warning-svg {
    width: 16px;
    height: 16px;
    filter: invert(11%) sepia(84%) saturate(4269%) hue-rotate(350deg) brightness(109%) contrast(95%);
}

.warning-text {
    color: #B91618;
    font-size: 15px;
}

.red-star { color: grey; }

.green-tick-svg {
    /* border: 1px solid red; */
    width: 20px;
    height: 20px;
    filter: invert(66%) sepia(71%) saturate(762%) hue-rotate(64deg) brightness(103%) contrast(92%);
}


/* addition for password  */
.grandparent{
    position: relative;
}

#parent-div{
    /* border: 1px solid red; */
    position: absolute;
    right: -17rem;
}

.child-div {
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    visibility: hidden;
}

.child-div.show {
    visibility: visible;
}

.dot-div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.dot {
    background-color: grey;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.child-h3 {
    font-size: 15px;
    font-weight: 300;
    color: grey;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body{\r\n    height: 100%;\r\n    user-select: none;\r\n}\r\n\r\n*, *::before, *::after{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody{\r\n    --main-content: white;\r\n    --side-bar: #eee;\r\n    --btn-topbar: #607AB6;\r\n\r\n    background-color: #eee;\r\n    color: black;\r\n    box-sizing: border-box;\r\n    display: flex; \r\n    flex-flow: column wrap;\r\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nh1, h2, h3{\r\n    margin-block-start: 0em;\r\n    margin-block-end: 0em;\r\n}\r\n\r\ninput {\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n    border: none;\r\n    width: 90%;\r\n    /* border: 1px solid salmon; */\r\n    background-color: transparent;\r\n}\r\n\r\ninput:hover, input:focus, input:active {\r\n    outline: none;\r\n}\r\n\r\n.input-container {\r\n    height: 24px;\r\n    width: inherit;\r\n    display: flex;\r\n    align-items: center; \r\n    justify-content: space-between;\r\n    border-bottom: 1px solid grey;\r\n    /* border: 1px solid blue; */\r\n}\r\n\r\n#div{\r\n    display: flex;\r\n    flex-flow: column;\r\n    padding: 3rem 5rem;\r\n    user-select: none;\r\n    /* border: 1px solid yellow; */\r\n}\r\n\r\n#wrapper{\r\n    /* border: 1px solid red; */\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nform {\r\n    /* border: 1px solid orange; */\r\n    width: fit-content;\r\n    display: grid;\r\n    grid-template-columns: 23rem 13rem;\r\n    gap: 10px;\r\n}\r\n\r\nbutton {\r\n    background-color: sandybrown;\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 12px 32px;\r\n    font-weight: 550;\r\n    font-size: 20px;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: rgb(184, 125, 73);\r\n}\r\n\r\nobject{\r\n    pointer-events: none;\r\n    cursor: pointer;\r\n}\r\n\r\nselect {\r\n    width: 170px; \r\n    padding: 13px 20px 13px 0px;\r\n    font-size: 18px; \r\n    border-color: #eee;       /* changes with the background */\r\n    border-bottom: 1px solid #252432;\r\n    background-color: transparent;\r\n}\r\n\r\n#submit-btn-div {\r\n    grid-area: 8 / 1 / 9 / 3;\r\n    padding: 80px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#form-title-div {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 70px;\r\n}\r\n\r\n.info-container{\r\n    /* border: 3px solid green; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 6px;\r\n}\r\n\r\n.name-container {\r\n    grid-area: 1 / 1 / 2 / 3;\r\n}\r\n\r\n.username-container {\r\n    grid-area: 2 / 1 / 3 / 3;\r\n}\r\n\r\n.birthday-container {\r\n    grid-area: 3 / 1 / 4 / 3;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.input-security{\r\n    -webkit-text-security: disc;\r\n}\r\n\r\n.address-houseN-container {\r\n    grid-area: 4 / 1 / 5 / 3;\r\n}\r\n\r\n.telephone-container {\r\n    grid-area: 5 / 1 / 6 / 3;\r\n}\r\n\r\n.email-container {\r\n    grid-area: 6 / 1 / 7 / 3;\r\n}\r\n\r\n.password-container {\r\n    grid-area: 7 / 1 / 8 / 3;\r\n}\r\n\r\n.label-text {\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n}\r\n\r\n.wrapper-flex-column {\r\n    /* border: 1px solid orange; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.wrapper-grid {\r\n    /* border: 1px solid orange; */\r\n    display: grid;\r\n    grid-template-columns: 65% 30%;\r\n    gap: 30px;\r\n}\r\n\r\n.input-container-w-label {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2px;\r\n    height: 80px;\r\n    /* border: 1px solid purple; */\r\n}\r\n\r\n.bday-w-label {\r\n    height: 100px;\r\n}\r\n\r\n.smaller-label-text {\r\n    font-size: 13px;\r\n    color: grey;\r\n}\r\n\r\n.birthday-input-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 90px;\r\n}\r\n\r\n.bigger-div-74 {\r\n    grid-column: 1 / 2;\r\n}\r\n\r\n.smaller-div-20 { \r\n    grid-column: 2 / 3;\r\n    /* border: 1px solid red; */\r\n}\r\n\r\n/* for svg's */\r\n.warning-div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    /* border: 1px solid blue; */\r\n}\r\n\r\n.warning-div:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.warning-svg, .round-warning-svg {\r\n    width: 16px;\r\n    height: 16px;\r\n    filter: invert(11%) sepia(84%) saturate(4269%) hue-rotate(350deg) brightness(109%) contrast(95%);\r\n}\r\n\r\n.warning-text {\r\n    color: #B91618;\r\n    font-size: 15px;\r\n}\r\n\r\n.red-star { color: grey; }\r\n\r\n.green-tick-svg {\r\n    /* border: 1px solid red; */\r\n    width: 20px;\r\n    height: 20px;\r\n    filter: invert(66%) sepia(71%) saturate(762%) hue-rotate(64deg) brightness(103%) contrast(92%);\r\n}\r\n\r\n\r\n/* addition for password  */\r\n.grandparent{\r\n    position: relative;\r\n}\r\n\r\n#parent-div{\r\n    /* border: 1px solid red; */\r\n    position: absolute;\r\n    right: -17rem;\r\n}\r\n\r\n.child-div {\r\n    /* border: 1px solid blue; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    visibility: hidden;\r\n}\r\n\r\n.child-div.show {\r\n    visibility: visible;\r\n}\r\n\r\n.dot-div{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.dot {\r\n    background-color: grey;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.child-h3 {\r\n    font-size: 15px;\r\n    font-weight: 300;\r\n    color: grey;\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/image/check-solid.svg":
/*!***********************************!*\
  !*** ./src/image/check-solid.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1983f17ccbc2e1c6f9a9.svg";

/***/ }),

/***/ "./src/image/circle-exclamation-solid.svg":
/*!************************************************!*\
  !*** ./src/image/circle-exclamation-solid.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "079ee4927a7028aaca5e.svg";

/***/ }),

/***/ "./src/image/triangle-exclamation-solid.svg":
/*!**************************************************!*\
  !*** ./src/image/triangle-exclamation-solid.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e3aa02d82ef947dfcbb.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/css/style.css */ "./src/css/style.css");
/* harmony import */ var _src_image_triangle_exclamation_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/image/triangle-exclamation-solid.svg */ "./src/image/triangle-exclamation-solid.svg");
/* harmony import */ var _src_image_circle_exclamation_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/image/circle-exclamation-solid.svg */ "./src/image/circle-exclamation-solid.svg");
/* harmony import */ var _src_image_check_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/image/check-solid.svg */ "./src/image/check-solid.svg");




const div = document.getElementById('div');

// class Form {
//     constructor(firstName, lastName, userName, birthday, street, houseNumber, city, zipcode, county, country, telephone, emailSet, emailConfirm, passwordSet, passwordConfirm) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.userName = userName;
//         this.birthday = birthday;
//         this.address = address;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.county = county;
//         this.country = country;
//         this.telephone = telephone;
//         this.emailSet = emailSet;
//         this.emailConfirm = emailConfirm;
//         this.passwordSet = passwordSet;
//         this.passwordConfirm = passwordConfirm;
//     }

const MsgPop = function () {
  const requiredMsg = text => {
    if (text === '') return '';
    const warningDiv = document.createElement('div');
    warningDiv.classList.add('warning-div');
    const warningSign = document.createElement('object');
    warningSign.setAttribute('type', 'image/svg+xml');
    warningSign.classList.add('warning-svg');
    warningSign.data = _src_image_triangle_exclamation_solid_svg__WEBPACK_IMPORTED_MODULE_1__;
    warningDiv.appendChild(warningSign);
    const warningText = document.createElement('h3');
    warningText.classList.add('warning-text');
    warningText.textContent = `${text}`;
    warningDiv.appendChild(warningText);
    return warningDiv;
  };
  const roundWarningSign = () => {
    const roundWarning = document.createElement('object');
    roundWarning.setAttribute('data', 'image/svg+xml');
    roundWarning.classList.add('round-warning-svg');
    roundWarning.data = _src_image_circle_exclamation_solid_svg__WEBPACK_IMPORTED_MODULE_2__;
    return roundWarning;
  };
  const incorrectValue = () => {
    const warningDiv = document.createElement('div');
    warningDiv.classList.add('warning-div');
    warningDiv.appendChild(roundWarningSign());
    const warningText = document.createElement('h3');
    warningText.classList.add('warning-text');
    warningText.textContent = `Incorrect value`;
    warningDiv.appendChild(warningText);
    return warningDiv;
  };
  const usernameTaken = () => {
    const warningDiv = document.createElement('div');
    warningDiv.classList.add('warning-div');
    warningDiv.appendChild(roundWarningSign());
    const warningText = document.createElement('h3');
    warningText.classList.add('warning-text');
    warningText.textContent = `Username is taken`;
    warningDiv.appendChild(warningText);
    return warningDiv;
  };
  const greenTick = () => {
    const greenTick = document.createElement('object');
    greenTick.setAttribute('data', 'image/svg+xml');
    greenTick.classList.add('green-tick-svg');
    greenTick.data = _src_image_check_solid_svg__WEBPACK_IMPORTED_MODULE_3__;
    return greenTick;
  };
  const turnStarRedClr = text => {
    const star = document.createElement('span');
    star.classList.add('red-star');
    star.textContent = '*';
    text.appendChild(star);
  };
  return {
    requiredMsg,
    incorrectValue,
    usernameTaken,
    greenTick,
    turnStarRedClr
  };
}();
const ChangeDivClrs = function () {
  const changeToRed = (text, dot) => {
    text.style.color = 'red';
    dot.style.backgroundColor = 'red';
  };
  const changeToGreen = (text, dot) => {
    text.style.color = 'green';
    dot.style.backgroundColor = 'green';
  };
  return {
    changeToRed,
    changeToGreen
  };
}();
const ValidationCheck = function () {
  const arr = [];
  for (let i = 1; i <= 6; i++) {
    let object = {
      text: document.getElementById(`dot-div-text-${i}`),
      dot: document.getElementById(`dot-div-${i}`)
    };
    arr.push(object);
  }

  // allows letters, white space, number, dash and dot, no other special char: for first and last name, and street name
  const allowLetterAndDot = input => {
    const msgArr = ['Empty field', 'Minimum required amount of characters: 2. Current input too short', 'Invalid character'];
    if (input.value === '') {
      return MsgPop.requiredMsg(msgArr[0]);
    } else if (input.validity.tooShort) {
      return MsgPop.requiredMsg(msgArr[1]);
    } else if (/^[^?!@#\|&()<>/$%^_,]+$/gm.test(input.value)) {
      return;
    } else return MsgPop.requiredMsg(msgArr[2]);
  };

  // allows letters, number, special characters, but no white space: for username
  const usernameChecker = (text, username) => {
    const msgArr = ['Empty field', 'Minimum required amount of characters: 6. Current input too short', 'No space between characters', `${username} is taken`];
    if (text.value === '') {
      return MsgPop.requiredMsg(msgArr[0]);
    } else if (text.validity.tooShort) {
      return MsgPop.requiredMsg(msgArr[1]);
    } else if (username === 'testing') {
      return MsgPop.requiredMsg(msgArr[3]);
    } else if (/^[^\s]+$/gm.test(text.value)) {
      return;
    } else return MsgPop.requiredMsg(msgArr[2]);
  };

  // allows letters and white space, no number or special char: for city 
  const forCity = text => {
    const msgArr = ['Empty field', 'Current input too short. Minimum length: 2', 'Invalid character'];
    if (text.value === '') {
      return MsgPop.requiredMsg(msgArr[0]);
    } else if (text.validity.tooShort) {
      return MsgPop.requiredMsg(msgArr[1]);
    } else if (/^[^?!@|#&(/)$\<>%.^-_,\d]+$/gm.test(text.value)) {
      return;
    } else return MsgPop.requiredMsg(msgArr[2]);
  };

  // allows letters and white space, no number or special char: for county
  const forCounty = text => {
    const msgArr = ['Current input too short. Minimum length: 2', 'Invalid character'];
    if (text.value === '') {
      return null;
    }
    if (text.validity.tooShort) {
      return MsgPop.requiredMsg(msgArr[0]);
    } else if (/^[^?!@|#&(/)$\<>%.^-_,\d]+$/gm.test(text.value)) {
      return;
    } else return MsgPop.requiredMsg(msgArr[1]);
  };

  // allow only letters: for country
  const allowOnlyLetter = text => {
    if (text.value === '') {
      return MsgPop.requiredMsg("Empty field");
    } else if (/^[^?!@|#&()$\<>%.^-_,\d]+$/gm.test(text.value)) {
      return;
    } else return MsgPop.requiredMsg("Only alphabetical characters allowed");
  };

  // allow a few special char, numbers and letters, but no white space: for zipcode
  const forZipcode = text => {
    if (text.value === '') {
      return MsgPop.requiredMsg('Empty field');
    } else if (/^[^?!@|#&$\<>%^_,]+$/gm.test(text.value)) {
      return;
    } else return MsgPop.requiredMsg('Invalid character');
  };

  // allow a few special char, numbers and letters, but no white space: for house number
  const forHouseNumber = text => {
    if (text.value === '') {
      return null;
    } else if (/^[^?!@|#&$\<>%^_,]+$/gm.test(text.value)) {
      return;
    } else return MsgPop.requiredMsg('Invalid character');
  };

  // for email
  const emailChecker = text => {
    const msgArr = ['Empty field', 'Invalid character', `Please enter the part prior to '@'`, `Your email address is missing an '@'`, `The email address can contain only one '@'`, `Please enter the part following '@'`, `'.' is in an incorrect position. Please enter characters between '@' and '.'`];
    if (text.value === '') {
      return MsgPop.requiredMsg(msgArr[0]);
    } else if (/[?!#&()$%^,]/gm.test(text.value)) {
      return MsgPop.requiredMsg(msgArr[1]);
    } else if (/^[^@]+$/gm.test(text.value)) {
      return MsgPop.requiredMsg(msgArr[3]);
    } else if (!/[^\s][@]/gm.test(text.value)) {
      return MsgPop.requiredMsg(msgArr[2]);
    } else if (/(?:.*(?:(?:@))){2}/gm.test(text.value)) {
      return MsgPop.requiredMsg(msgArr[4]);
    } else if (/@$/gm.test(text.value)) {
      return MsgPop.requiredMsg(msgArr[5]);
    } else if (/@\./gm.test(text.value)) {
      return MsgPop.requiredMsg(msgArr[6]);
    } else return;
  };

  // for password
  const passwordChecker = (text, objectArr) => {
    if (text.value === '') return null;
    if (text.validity.tooShort) {
      ChangeDivClrs.changeToRed(objectArr[0].text, objectArr[0].dot);
    } else ChangeDivClrs.changeToGreen(objectArr[0].text, objectArr[0].dot);
    if (/[a-z]+/gm.test(text.value)) {
      ChangeDivClrs.changeToGreen(objectArr[1].text, objectArr[1].dot);
    } else ChangeDivClrs.changeToRed(objectArr[1].text, objectArr[1].dot);
    if (/[A-Z]+/gm.test(text.value)) {
      ChangeDivClrs.changeToGreen(objectArr[2].text, objectArr[2].dot);
    } else ChangeDivClrs.changeToRed(objectArr[2].text, objectArr[2].dot);
    if (/^[^\d]+$/gm.test(text.value)) {
      ChangeDivClrs.changeToRed(objectArr[3].text, objectArr[3].dot);
    } else ChangeDivClrs.changeToGreen(objectArr[3].text, objectArr[3].dot);
    if (/^[^?!@#\|&()/$%^_,]+$/gm.test(text.value)) {
      ChangeDivClrs.changeToRed(objectArr[4].text, objectArr[4].dot);
    } else ChangeDivClrs.changeToGreen(objectArr[4].text, objectArr[4].dot);
    if (!/^[^\s]+$/gm.test(text.value)) {
      ChangeDivClrs.changeToRed(objectArr[5].text, objectArr[5].dot);
    } else ChangeDivClrs.changeToGreen(objectArr[5].text, objectArr[5].dot);
  };
  return {
    allowOnlyLetter,
    allowLetterAndDot,
    forCity,
    forCounty,
    forZipcode,
    forHouseNumber,
    emailChecker,
    usernameChecker,
    passwordChecker
  };
}();
const FormBasicGui = function () {
  const fullNameDiv = parent => {
    const nameContainer = document.createElement('div');
    nameContainer.classList.add('info-container', 'name-container');
    parent.appendChild(nameContainer);
    const labelDivName = document.createElement('div');
    labelDivName.classList.add('label-div');
    nameContainer.appendChild(labelDivName);
    const labelName = document.createElement('label');
    labelName.classList.add('label-text');
    labelName.textContent = 'Name';
    labelDivName.appendChild(labelName);
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper-flex-column');
    nameContainer.appendChild(wrapper);
    const fnameInputContainer = document.createElement('div');
    fnameInputContainer.classList.add('input-container-w-label');
    wrapper.appendChild(fnameInputContainer);
    const fNameLabel = document.createElement('label');
    fNameLabel.classList.add('smaller-label-text');
    fNameLabel.setAttribute('for', 'firstName');
    fNameLabel.textContent = 'First name';
    fnameInputContainer.appendChild(fNameLabel);
    MsgPop.turnStarRedClr(fNameLabel);
    const firstNameInputDiv = document.createElement('div');
    firstNameInputDiv.classList.add('input-container');
    fnameInputContainer.appendChild(firstNameInputDiv);
    const firstNameInput = document.createElement('input');
    firstNameInput.setAttribute('type', 'text');
    firstNameInput.setAttribute('id', 'firstName');
    firstNameInput.minLength = '2';
    firstNameInput.name = 'given-name';
    firstNameInput.required = true;
    firstNameInput.placeholder = 'Angelica';
    firstNameInputDiv.appendChild(firstNameInput);
    const greenTick1 = MsgPop.greenTick();
    var warning1;
    var temp;
    firstNameInput.addEventListener('input', () => {
      warning1 = ValidationCheck.allowLetterAndDot(firstNameInput);
    });
    firstNameInput.addEventListener('keyup', () => {
      if (warning1 === undefined) {
        if (fnameInputContainer.lastChild === temp) fnameInputContainer.lastChild.remove();
        firstNameInputDiv.appendChild(greenTick1);
      } else {
        if (firstNameInputDiv.lastChild === greenTick1) greenTick1.remove();
        if (fnameInputContainer.lastChild === temp) fnameInputContainer.lastChild.remove();
        temp = warning1;
        fnameInputContainer.appendChild(warning1);
      }
      ;
    });
    const lnameInputContainer = document.createElement('div');
    lnameInputContainer.classList.add('input-container-w-label');
    wrapper.appendChild(lnameInputContainer);
    const lastNamelabel = document.createElement('label');
    lastNamelabel.classList.add('smaller-label-text');
    lastNamelabel.setAttribute('for', 'lastName');
    lastNamelabel.textContent = 'Last name';
    lnameInputContainer.appendChild(lastNamelabel);
    MsgPop.turnStarRedClr(lastNamelabel);
    const lastNameInputDiv = document.createElement('div');
    lastNameInputDiv.classList.add('input-container');
    lnameInputContainer.appendChild(lastNameInputDiv);
    const lastNameInput = document.createElement('input');
    lastNameInput.setAttribute('type', 'text');
    lastNameInput.setAttribute('id', 'lastName');
    lastNameInput.minLength = '2';
    lastNameInput.name = 'family-name';
    lastNameInput.required = true;
    lastNameInput.placeholder = 'Demonlord';
    lastNameInputDiv.appendChild(lastNameInput);
    const greenTick2 = MsgPop.greenTick();
    var warning2;
    var temp2;
    lastNameInput.addEventListener('input', () => {
      warning2 = ValidationCheck.allowLetterAndDot(lastNameInput);
    });
    lastNameInput.addEventListener('keyup', () => {
      if (warning2 === undefined) {
        if (lnameInputContainer.lastChild === temp2) lnameInputContainer.lastChild.remove();
        lastNameInputDiv.appendChild(greenTick2);
      } else {
        if (lastNameInputDiv.lastChild === greenTick2) greenTick1.remove();
        if (lnameInputContainer.lastChild === temp2) lnameInputContainer.lastChild.remove();
        temp2 = warning2;
        lnameInputContainer.appendChild(warning2);
      }
      ;
    });
    let object = {
      container: nameContainer,
      firstName: firstNameInput.value,
      lastName: lastNameInput.value
    };
    return object;
  };
  const usernameDiv = parent => {
    const userNameContainer = document.createElement('div');
    userNameContainer.classList.add('info-container', 'username-container');
    parent.appendChild(userNameContainer);
    const labelDivName = document.createElement('div');
    labelDivName.classList.add('label-div');
    userNameContainer.appendChild(labelDivName);
    const labelName = document.createElement('label');
    labelName.classList.add('label-text');
    labelName.setAttribute('for', 'userName');
    labelName.textContent = 'Username';
    labelDivName.appendChild(labelName);
    MsgPop.turnStarRedClr(labelName);
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper-flex-column');
    userNameContainer.appendChild(wrapper);
    const usernameInputContainer = document.createElement('div');
    usernameInputContainer.classList.add('input-container-w-label');
    wrapper.appendChild(usernameInputContainer);
    const usernameInputDiv = document.createElement('div');
    usernameInputDiv.classList.add('input-container');
    usernameInputContainer.appendChild(usernameInputDiv);
    const userNameInput = document.createElement('input');
    userNameInput.setAttribute('type', 'text');
    userNameInput.setAttribute('id', 'userName');
    userNameInput.minLength = '6';
    userNameInput.name = 'name';
    userNameInput.required = true;
    userNameInput.placeholder = 'mattheyddrGnSlyr54';
    usernameInputDiv.appendChild(userNameInput);
    const greenTick = MsgPop.greenTick();
    var warning;
    var temp;
    userNameInput.addEventListener('input', () => {
      warning = ValidationCheck.usernameChecker(userNameInput, userNameInput.value);
    });
    userNameInput.addEventListener('keyup', () => {
      if (warning === undefined) {
        if (usernameInputContainer.lastChild === temp) usernameInputContainer.lastChild.remove();
        usernameInputDiv.appendChild(greenTick);
      } else {
        if (usernameInputDiv.lastChild === greenTick) greenTick.remove();
        if (usernameInputContainer.lastChild === temp) usernameInputContainer.lastChild.remove();
        temp = warning;
        usernameInputContainer.appendChild(warning);
      }
      ;
    });
    let object = {
      container: userNameContainer,
      username: userNameInput.value
    };
    return object;
  };
  const birthdayDiv = parent => {
    const birthdayContainer = document.createElement('div');
    birthdayContainer.classList.add('info-container', 'birthday-container');
    parent.appendChild(birthdayContainer);
    const labelDivName = document.createElement('div');
    labelDivName.classList.add('label-div');
    birthdayContainer.appendChild(labelDivName);
    const labelName = document.createElement('label');
    labelName.classList.add('label-text');
    labelName.textContent = 'Birthday';
    labelDivName.appendChild(labelName);
    MsgPop.turnStarRedClr(labelName);
    const birthdayInputContainer = document.createElement('div');
    birthdayInputContainer.classList.add('birthday-input-container');
    birthdayContainer.appendChild(birthdayInputContainer);
    const dayInputContainer = document.createElement('div');
    dayInputContainer.classList.add('input-container-w-label');
    birthdayInputContainer.appendChild(dayInputContainer);
    const roundWarning1 = MsgPop.incorrectValue();
    const dayInput = document.createElement('select');
    dayInput.setAttribute('inputmode', 'numeric');
    dayInput.required = true;
    dayInputContainer.appendChild(dayInput);
    for (let i = 0; i <= 31; i++) {
      var dayOption = document.createElement('option');
      if (i === 0) {
        dayOption.text = 'DD';
        dayInput.setAttribute('selected', 'selected');
      } else {
        dayOption.value = `day${i}`;
        dayOption.text = `${i}`;
      }
      ;
      dayInput.appendChild(dayOption);
    }
    ;
    var counterDay = false;
    dayInput.addEventListener('click', function () {
      if (dayInput.value === 'DD') {
        counterDay === true ? dayInputContainer.appendChild(roundWarning1) : counterDay = true;
      } else if (dayInputContainer.lastChild === roundWarning1) roundWarning1.remove();
    });
    const monthInputContainer = document.createElement('div');
    monthInputContainer.classList.add('input-container-w-label');
    birthdayInputContainer.appendChild(monthInputContainer);
    const roundWarning2 = MsgPop.incorrectValue();
    const monthInput = document.createElement('select');
    monthInput.setAttribute('inputmode', 'numeric');
    monthInput.required = true;
    monthInputContainer.appendChild(monthInput);
    for (let i = 0; i <= 12; i++) {
      var monthOption = document.createElement('option');
      if (i === 0) {
        monthOption.text = 'MM';
        monthInput.setAttribute('selected', 'selected');
      } else {
        monthOption.value = `month${i}`;
        monthOption.text = `${i}`;
      }
      ;
      monthInput.appendChild(monthOption);
    }
    ;
    var counterMonth = false;
    monthInput.addEventListener('click', function () {
      if (monthInput.value === 'MM') {
        counterMonth === true ? monthInputContainer.appendChild(roundWarning2) : counterMonth = true;
      } else if (monthInputContainer.lastChild === roundWarning2) roundWarning2.remove();
    });
    const yearInputContainer = document.createElement('div');
    yearInputContainer.classList.add('input-container-w-label');
    birthdayInputContainer.appendChild(yearInputContainer);
    const roundWarning3 = MsgPop.incorrectValue();
    const yearInput = document.createElement('select');
    yearInput.setAttribute('inputmode', 'numeric');
    yearInput.required = true;
    yearInputContainer.appendChild(yearInput);
    for (let i = 1939; i <= 2025; i++) {
      var yearOption = document.createElement('option');
      if (i === 1939) {
        yearOption.text = 'YYYY';
        yearInput.setAttribute('selected', 'selected');
      } else {
        yearOption.value = `year${i}`;
        yearOption.text = `${i}`;
      }
      ;
      yearInput.appendChild(yearOption);
    }
    ;
    var counterYear = false;
    yearInput.addEventListener('click', function () {
      if (yearInput.value === 'YYYY') {
        counterYear === true ? yearInputContainer.appendChild(roundWarning3) : counterYear = true;
      } else if (yearInputContainer.lastChild === roundWarning3) roundWarning3.remove();
    });
    let object = {
      container: birthdayContainer,
      dayInput: dayInput.value,
      monthInput: monthInput.value,
      yearInput: yearInput.value
    };
    return object;
  };
  const addressDiv = parent => {
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('info-container', 'address-houseN-container');
    parent.appendChild(addressContainer);
    const labelDivName = document.createElement('div');
    labelDivName.classList.add('label-div');
    addressContainer.appendChild(labelDivName);
    const labelName = document.createElement('label');
    labelName.classList.add('label-text');
    labelName.textContent = 'Address';
    labelDivName.appendChild(labelName);
    countyNCountryDiv();
    cityNPostalCodeDiv();
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper-grid');
    addressContainer.appendChild(wrapper);
    const streetInputContainer = document.createElement('div');
    streetInputContainer.classList.add('input-container-w-label', 'bigger-div-74');
    wrapper.appendChild(streetInputContainer);
    const streetNameLabel = document.createElement('label');
    streetNameLabel.classList.add('smaller-label-text');
    streetNameLabel.setAttribute('for', 'streetName');
    streetNameLabel.textContent = 'Street';
    streetInputContainer.appendChild(streetNameLabel);
    MsgPop.turnStarRedClr(streetNameLabel);
    const streetNameInputDiv = document.createElement('div');
    streetNameInputDiv.classList.add('input-container');
    streetInputContainer.appendChild(streetNameInputDiv);
    const streetNameInput = document.createElement('input');
    streetNameInput.setAttribute('type', 'text');
    streetNameInput.setAttribute('id', 'streetName');
    streetNameInput.name = 'address';
    streetNameInput.required = true;
    streetNameInput.placeholder = '305 Edgemont St.';
    streetNameInputDiv.appendChild(streetNameInput);
    const greenTick1 = MsgPop.greenTick();
    var warning1;
    var temp;
    streetNameInput.addEventListener('input', () => {
      warning1 = ValidationCheck.allowLetterAndDot(streetNameInput);
    });
    streetNameInput.addEventListener('keyup', () => {
      if (warning1 === undefined) {
        if (streetInputContainer.lastChild === temp) streetInputContainer.lastChild.remove();
        streetNameInputDiv.appendChild(greenTick1);
      } else {
        if (streetNameInputDiv.lastChild === greenTick1) greenTick1.remove();
        if (streetInputContainer.lastChild === temp) streetInputContainer.lastChild.remove();
        temp = warning1;
        streetInputContainer.appendChild(warning1);
      }
      ;
    });
    const houseNInputContainer = document.createElement('div');
    houseNInputContainer.classList.add('input-container-w-label', 'smaller-div-20');
    wrapper.appendChild(houseNInputContainer);
    const houseNLabel = document.createElement('label');
    houseNLabel.classList.add('smaller-label-text');
    houseNLabel.setAttribute('for', 'houseNumber');
    houseNLabel.textContent = 'House Number';
    houseNInputContainer.appendChild(houseNLabel);
    const houseNInputDiv = document.createElement('div');
    houseNInputDiv.classList.add('input-container');
    houseNInputContainer.appendChild(houseNInputDiv);
    const houseNInput = document.createElement('input');
    houseNInput.setAttribute('type', 'text');
    houseNInput.setAttribute('id', 'houseNumber');
    houseNInput.name = 'address';
    houseNInput.placeholder = '66A';
    houseNInputDiv.appendChild(houseNInput);
    const greenTick2 = MsgPop.greenTick();
    var warning2;
    var temp2;
    houseNInput.addEventListener('input', () => {
      warning2 = ValidationCheck.forHouseNumber(houseNInput);
    });
    houseNInput.addEventListener('keyup', () => {
      if (warning2 === null) {
        if (houseNInputContainer.lastChild === temp2) houseNInputContainer.lastChild.remove();
        if (houseNInputDiv.lastChild === greenTick2) greenTick2.remove();
      } else if (warning2 === undefined) {
        if (houseNInputContainer.lastChild === temp2) houseNInputContainer.lastChild.remove();
        houseNInputDiv.appendChild(greenTick2);
      } else {
        if (houseNInputDiv.lastChild === greenTick2) greenTick2.remove();
        if (houseNInputContainer.lastChild === temp2) houseNInputContainer.lastChild.remove();
        temp2 = warning2;
        houseNInputContainer.appendChild(warning2);
      }
      ;
    });
    let object = {
      address: `${streetNameInput.value} ${houseNInput.value}`
    };
    return object;
  };
  const telephoneDiv = parent => {
    const telWarning = MsgPop.requiredMsg();
    const telContainer = document.createElement('div');
    telContainer.classList.add('info-container', 'telephone-container');
    parent.appendChild(telContainer);
    const labelDivName = document.createElement('div');
    labelDivName.classList.add('label-div');
    telContainer.appendChild(labelDivName);
    const labelName = document.createElement('label');
    labelName.classList.add('label-text');
    labelName.setAttribute('for', 'phoneNumber');
    labelName.textContent = 'Telephone';
    labelDivName.appendChild(labelName);
    MsgPop.turnStarRedClr(labelName);
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper-flex-column');
    telContainer.appendChild(wrapper);
    const telInputContainer = document.createElement('div');
    telInputContainer.classList.add('input-container-w-label');
    wrapper.appendChild(telInputContainer);
    const telInputDiv = document.createElement('div');
    telInputDiv.classList.add('input-container');
    telInputContainer.appendChild(telInputDiv);
    const greenTick = MsgPop.greenTick();
    const telInput = document.createElement('input');
    telInput.setAttribute('type', 'number');
    telInput.setAttribute('id', 'phoneNumber');
    telInput.setAttribute('inputmode', 'tel');
    telInput.name = 'phone';
    telInput.required = true;
    telInput.placeholder = '+31 8765 4321';
    telInputDiv.appendChild(telInput);
    telInput.addEventListener('keydown', function () {
      if (telInputContainer.lastChild === telWarning) telWarning.remove();
    });
    telInput.addEventListener('keyup', function () {
      //add check for non numberic characters
      if (telInput.value === '') {
        if (telInputDiv.lastChild === greenTick) greenTick.remove();
        telInputContainer.appendChild(telWarning);
      } else telInputDiv.appendChild(greenTick);
    });
    let object = {
      container: telContainer,
      telephone: telInput.value
    };
    return object;
  };
  const cityNPostalCodeDiv = () => {
    var addressDiv = document.querySelector('.address-houseN-container');
    const cityContainer = document.createElement('div');
    cityContainer.classList.add('info-container', 'city-zipcode-container');
    addressDiv.appendChild(cityContainer);
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper-grid');
    cityContainer.appendChild(wrapper);
    const cityInputContainer = document.createElement('div');
    cityInputContainer.classList.add('input-container-w-label', 'bigger-div-74');
    wrapper.appendChild(cityInputContainer);
    const cityLabel = document.createElement('label');
    cityLabel.classList.add('smaller-label-text');
    cityLabel.setAttribute('for', 'cityName');
    cityLabel.textContent = 'City';
    cityInputContainer.appendChild(cityLabel);
    MsgPop.turnStarRedClr(cityLabel);
    const cityInputDiv = document.createElement('div');
    cityInputDiv.classList.add('input-container');
    cityInputContainer.appendChild(cityInputDiv);
    const cityInput = document.createElement('input');
    cityInput.setAttribute('type', 'text');
    cityInput.setAttribute('id', 'cityName');
    cityInput.minLength = '2';
    cityInput.name = 'city';
    cityInput.required = true;
    cityInput.placeholder = 'Moorpark';
    cityInputDiv.appendChild(cityInput);
    const greenTick1 = MsgPop.greenTick();
    var warning1;
    var temp;
    cityInput.addEventListener('input', () => {
      warning1 = ValidationCheck.forCity(cityInput);
    });
    cityInput.addEventListener('keyup', () => {
      if (warning1 === undefined) {
        if (cityInputContainer.lastChild === temp) cityInputContainer.lastChild.remove();
        cityInputDiv.appendChild(greenTick1);
      } else {
        if (cityInputDiv.lastChild === greenTick1) greenTick1.remove();
        if (cityInputContainer.lastChild === temp) cityInputContainer.lastChild.remove();
        temp = warning1;
        cityInputContainer.appendChild(warning1);
      }
      ;
    });
    const zipcodeInputContainer = document.createElement('div');
    zipcodeInputContainer.classList.add('input-container-w-label', 'smaller-div-20');
    wrapper.appendChild(zipcodeInputContainer);
    const zipcodeLabel = document.createElement('label');
    zipcodeLabel.classList.add('smaller-label-text');
    zipcodeLabel.textContent = 'Postal / Zipcode';
    zipcodeInputContainer.appendChild(zipcodeLabel);
    MsgPop.turnStarRedClr(zipcodeLabel);
    const zipcodeInputDiv = document.createElement('div');
    zipcodeInputDiv.classList.add('input-container');
    zipcodeInputContainer.appendChild(zipcodeInputDiv);
    const zipcodeInput = document.createElement('input');
    zipcodeInput.setAttribute('type', 'text');
    zipcodeInput.name = 'zipcode';
    zipcodeInput.required = true;
    zipcodeInput.placeholder = '91706';
    zipcodeInputDiv.appendChild(zipcodeInput);
    const greenTick2 = MsgPop.greenTick();
    var warning2;
    var temp2;
    zipcodeInput.addEventListener('input', () => {
      warning2 = ValidationCheck.forZipcode(zipcodeInput);
    });
    zipcodeInput.addEventListener('keyup', () => {
      if (warning2 === undefined) {
        if (zipcodeInputContainer.lastChild === temp2) zipcodeInputContainer.lastChild.remove();
        zipcodeInputDiv.appendChild(greenTick2);
      } else {
        if (zipcodeInputDiv.lastChild === greenTick2) greenTick2.remove();
        if (zipcodeInputContainer.lastChild === temp2) zipcodeInputContainer.lastChild.remove();
        temp2 = warning2;
        zipcodeInputContainer.appendChild(warning2);
      }
      ;
    });
    let object = {
      container: cityContainer,
      zipCode: zipcodeInput.value,
      city: cityInput.value
    };
    return object;
  };
  const countyNCountryDiv = () => {
    var addressDiv = document.querySelector('.address-houseN-container');
    const countryContainer = document.createElement('div');
    countryContainer.classList.add('info-container', 'county-country-container');
    addressDiv.appendChild(countryContainer);
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper-grid');
    countryContainer.appendChild(wrapper);
    const countyInputContainer = document.createElement('div');
    countyInputContainer.classList.add('input-container-w-label', 'bigger-div-74');
    wrapper.appendChild(countyInputContainer);
    const countyLabel = document.createElement('label');
    countyLabel.classList.add('smaller-label-text');
    countyLabel.setAttribute('for', 'countyName');
    countyLabel.textContent = 'State / County / Province';
    countyInputContainer.appendChild(countyLabel);
    const countyInputDiv = document.createElement('div');
    countyInputDiv.classList.add('input-container');
    countyInputContainer.appendChild(countyInputDiv);
    const countyInput = document.createElement('input');
    countyInput.setAttribute('type', 'text');
    countyInput.setAttribute('id', 'countyName');
    countyInput.minLength = '2';
    countyInput.placeholder = 'California';
    countyInputDiv.appendChild(countyInput);
    const greenTick1 = MsgPop.greenTick();
    var warning1;
    var temp;
    countyInput.addEventListener('input', () => {
      warning1 = ValidationCheck.forCounty(countyInput);
    });
    countyInput.addEventListener('keyup', () => {
      if (warning1 === null) {
        if (countyInputContainer.lastChild === temp) countyInputContainer.lastChild.remove();
        if (countyInputDiv.lastChild === greenTick1) greenTick1.remove();
      } else if (warning1 === undefined) {
        if (countyInputContainer.lastChild === temp) countyInputContainer.lastChild.remove();
        countyInputDiv.appendChild(greenTick1);
      } else {
        if (countyInputDiv.lastChild === greenTick1) greenTick1.remove();
        if (countyInputContainer.lastChild === temp) countyInputContainer.lastChild.remove();
        temp = warning1;
        countyInputContainer.appendChild(warning1);
      }
      ;
    });
    const countryInputContainer = document.createElement('div');
    countryInputContainer.classList.add('input-container-w-label', 'smaller-div-20');
    wrapper.appendChild(countryInputContainer);
    const countryLabel = document.createElement('label');
    countryLabel.classList.add('smaller-label-text');
    countyLabel.setAttribute('for', 'countryName');
    countryLabel.textContent = 'Country';
    countryInputContainer.appendChild(countryLabel);
    MsgPop.turnStarRedClr(countryLabel);
    const countryInputDiv = document.createElement('div');
    countryInputDiv.classList.add('input-container');
    countryInputContainer.appendChild(countryInputDiv);
    const countryInput = document.createElement('input');
    countryInput.setAttribute('type', 'text');
    countryInput.setAttribute('id', 'countryName');
    countryInput.name = 'country';
    countryInput.required = true;
    countryInput.placeholder = 'USA';
    countryInputDiv.appendChild(countryInput);
    const greenTick2 = MsgPop.greenTick();
    var warning2;
    var temp2;
    countryInput.addEventListener('input', () => {
      warning2 = ValidationCheck.allowOnlyLetter(countryInput);
    });
    countryInput.addEventListener('keyup', () => {
      if (warning2 === undefined) {
        if (countryInputContainer.lastChild === temp2) countryInputContainer.lastChild.remove();
        countryInputDiv.appendChild(greenTick2);
      } else {
        if (countryInputDiv.lastChild === greenTick2) greenTick2.remove();
        if (countryInputContainer.lastChild === temp2) countryInputContainer.lastChild.remove();
        temp2 = warning2;
        countryInputContainer.appendChild(warning2);
      }
      ;
    });
    let object = {
      container: countryContainer,
      countyCode: countyInput.value,
      city: countryInput.value
    };
    return object;
  };
  const emailDiv = parent => {
    const emailContainer = document.createElement('div');
    emailContainer.classList.add('info-container', 'email-container');
    parent.appendChild(emailContainer);
    const labelDivName = document.createElement('div');
    labelDivName.classList.add('label-div');
    emailContainer.appendChild(labelDivName);
    const labelName = document.createElement('label');
    labelName.classList.add('label-text');
    labelName.textContent = 'Email';
    labelDivName.appendChild(labelName);
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper-flex-column');
    emailContainer.appendChild(wrapper);
    const emailInputContainer = document.createElement('div');
    emailInputContainer.classList.add('input-container-w-label');
    wrapper.appendChild(emailInputContainer);
    const emailSetLabel = document.createElement('label');
    emailSetLabel.classList.add('smaller-label-text');
    emailSetLabel.setAttribute('for', 'setEmail');
    emailSetLabel.textContent = 'Email';
    emailInputContainer.appendChild(emailSetLabel);
    MsgPop.turnStarRedClr(emailSetLabel);
    const emailSetInputDiv = document.createElement('div');
    emailSetInputDiv.classList.add('input-container');
    emailInputContainer.appendChild(emailSetInputDiv);
    const enterEmailInput = document.createElement('input');
    enterEmailInput.setAttribute('type', 'text');
    enterEmailInput.setAttribute('id', 'setEmail');
    enterEmailInput.setAttribute('inputmode', 'email');
    enterEmailInput.required = true;
    enterEmailInput.placeholder = 'oogieboogie@yahoo.com';
    emailSetInputDiv.appendChild(enterEmailInput);
    const greenTick1 = MsgPop.greenTick();
    var warning;
    var temp;
    enterEmailInput.addEventListener('input', () => {
      warning = ValidationCheck.emailChecker(enterEmailInput);
    });
    enterEmailInput.addEventListener('keyup', () => {
      if (warning === undefined) {
        if (emailInputContainer.lastChild === temp) emailInputContainer.lastChild.remove();
        emailSetInputDiv.appendChild(greenTick1);
      } else {
        if (emailSetInputDiv.lastChild === greenTick1) greenTick1.remove();
        if (emailInputContainer.lastChild === temp) emailInputContainer.lastChild.remove();
        temp = warning;
        emailInputContainer.appendChild(warning);
      }
      ;
    });
    const confirmInputContainer = document.createElement('div');
    confirmInputContainer.classList.add('input-container-w-label');
    wrapper.appendChild(confirmInputContainer);
    const confirmEmailLabel = document.createElement('label');
    confirmEmailLabel.classList.add('smaller-label-text');
    confirmEmailLabel.textContent = 'Confirm email';
    confirmInputContainer.appendChild(confirmEmailLabel);
    MsgPop.turnStarRedClr(confirmEmailLabel);
    const emailConfirmInputDiv = document.createElement('div');
    emailConfirmInputDiv.classList.add('input-container');
    confirmEmailLabel.appendChild(emailConfirmInputDiv);
    const confirmEmailInput = document.createElement('input');
    confirmEmailInput.setAttribute('type', 'text');
    confirmEmailInput.classList.add('input-security');
    confirmEmailInput.required = true;
    emailConfirmInputDiv.appendChild(confirmEmailInput);
    const greenTick2 = MsgPop.greenTick();
    const noMatch = MsgPop.requiredMsg('The emails do not match');
    confirmEmailInput.addEventListener('input', () => {
      if (confirmEmailInput.value === enterEmailInput.value) {
        if (confirmInputContainer.lastChild === noMatch) confirmInputContainer.lastChild.remove();
        emailConfirmInputDiv.appendChild(greenTick2);
      } else {
        if (emailConfirmInputDiv.lastChild === greenTick2) greenTick2.remove();
        confirmInputContainer.appendChild(noMatch);
      }
    });
    let object = {
      container: emailContainer,
      enterEmail: enterEmailInput.value,
      confirmEmail: confirmEmailInput.value
    };
    return object;
  };
  const passwordDiv = parent => {
    const passwordContainer = document.createElement('div');
    passwordContainer.classList.add('info-container', 'password-container');
    parent.appendChild(passwordContainer);
    const labelDivName = document.createElement('div');
    labelDivName.classList.add('label-div');
    passwordContainer.appendChild(labelDivName);
    const labelName = document.createElement('label');
    labelName.classList.add('label-text');
    labelName.textContent = 'Password';
    labelDivName.appendChild(labelName);
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper-flex-column');
    passwordContainer.appendChild(wrapper);
    const passwordInputContainer = document.createElement('div');
    passwordInputContainer.classList.add('input-container-w-label', 'grandparent');
    wrapper.appendChild(passwordInputContainer);
    const createPasswordLabel = document.createElement('label');
    createPasswordLabel.classList.add('smaller-label-text');
    createPasswordLabel.textContent = 'Create password';
    passwordInputContainer.appendChild(createPasswordLabel);
    MsgPop.turnStarRedClr(createPasswordLabel);
    const createPasswordInputDiv = document.createElement('div');
    createPasswordInputDiv.classList.add('input-container');
    passwordInputContainer.appendChild(createPasswordInputDiv);
    const createpasswordInput = document.createElement('input');
    createpasswordInput.setAttribute('type', 'text');
    createpasswordInput.minLength = '8';
    createpasswordInput.required = true;
    createpasswordInput.placeholder = 'Set password';
    createPasswordInputDiv.appendChild(createpasswordInput);
    const parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', 'parent-div');
    passwordInputContainer.appendChild(parentDiv);
    const childDiv = document.createElement('div');
    childDiv.classList.add('child-div');
    parentDiv.appendChild(childDiv);
    const objectArr = [];
    const arrText = ['At least 8 characters', 'At least one lowercase character', 'At least one uppercase character', 'At least one number', 'At least one special character', 'No space between characters'];
    for (let i = 0; i < 6; i++) {
      const div = document.createElement('div');
      div.classList.add('dot-div');
      div.setAttribute('id', `dot-div-text-${i}`);
      childDiv.appendChild(div);
      const dotDiv = document.createElement('div');
      dotDiv.classList.add('dot');
      dotDiv.setAttribute('id', `dot-div-${i}`);
      div.appendChild(dotDiv);
      const h3 = document.createElement('h3');
      h3.classList.add('child-h3');
      h3.textContent = `${arrText[i]}`;
      div.appendChild(h3);
      let object = {
        text: document.getElementById(`dot-div-text-${i}`),
        dot: document.getElementById(`dot-div-${i}`)
      };
      objectArr.push(object);
    }
    ;
    const warning = MsgPop.requiredMsg('Empty field');
    var temp;
    createpasswordInput.addEventListener('input', () => {
      childDiv.classList.add('show');
      temp = ValidationCheck.passwordChecker(createpasswordInput, objectArr);
    });
    createpasswordInput.addEventListener('keyup', () => {
      if (temp === null) {
        passwordInputContainer.appendChild(warning);
      } else {
        if (passwordInputContainer.lastChild === warning) passwordInputContainer.lastChild.remove();
      }
      ;
    });
    const confirmPasswordContainer = document.createElement('div');
    confirmPasswordContainer.classList.add('input-container-w-label');
    wrapper.appendChild(confirmPasswordContainer);
    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.classList.add('smaller-label-text');
    confirmPasswordLabel.textContent = 'Confirm password';
    confirmPasswordContainer.appendChild(confirmPasswordLabel);
    MsgPop.turnStarRedClr(confirmPasswordLabel);
    const confirmPasswordInputDiv = document.createElement('div');
    confirmPasswordInputDiv.classList.add('input-container');
    confirmPasswordContainer.appendChild(confirmPasswordInputDiv);
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.setAttribute('type', 'text');
    confirmPasswordInput.classList.add('input-security');
    confirmPasswordInput.required = true;
    confirmPasswordInput.placeholder = 'Confirm password';
    confirmPasswordInputDiv.appendChild(confirmPasswordInput);
    const greenTick = MsgPop.greenTick();
    const noMatch = MsgPop.requiredMsg('The passwords do not match');
    confirmPasswordInput.addEventListener('input', () => {
      if (confirmPasswordInput.value === createpasswordInput.value) {
        if (confirmPasswordContainer.lastChild === noMatch) confirmPasswordContainer.lastChild.remove();
        confirmPasswordInputDiv.appendChild(greenTick);
      } else {
        if (confirmPasswordInputDiv.lastChild === greenTick) greenTick.remove();
        confirmPasswordContainer.appendChild(noMatch);
      }
      ;
    });
    let object = {
      container: passwordContainer,
      setPassword: createpasswordInput.value,
      confirmPassword: confirmPasswordInput.value
    };
    return object;
  };
  const basicGUI = () => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'wrapper');
    div.appendChild(wrapper);
    const formTitleDiv = document.createElement('div');
    formTitleDiv.setAttribute('id', 'form-title-div');
    wrapper.appendChild(formTitleDiv);
    const formTitle = document.createElement('h1');
    formTitle.setAttribute('id', 'form-title');
    formTitle.textContent = 'Create Account!';
    formTitleDiv.appendChild(formTitle);
    const content = document.createElement('div');
    content.setAttribute('id', 'content');
    wrapper.appendChild(content);
    const form = document.createElement('form');
    form.autocomplete = 'on';
    form.setAttribute('id', 'form');
    content.appendChild(form);
    fullNameDiv(form);
    usernameDiv(form);
    birthdayDiv(form);
    addressDiv(form);
    telephoneDiv(form);
    emailDiv(form);
    passwordDiv(form);
    const submitBtndiv = document.createElement('div');
    submitBtndiv.setAttribute('id', 'submit-btn-div');
    form.appendChild(submitBtndiv);
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('id', 'submit-btn');
    submitBtn.textContent = 'SUBMIT';
    submitBtndiv.appendChild(submitBtn);
    submitBtn.addEventListener('click', function () {
      // trigger();
    });
    return wrapper;
  };
  return {
    basicGUI
  };
}();
window.addEventListener('onload', FormBasicGui.basicGUI());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyx3QkFBd0IsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLHFCQUFxQixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksUUFB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QUMsSUFBSSxFQUFFLFlBQVksQ0FBQztJQUMxQ2dMLFNBQVMsQ0FBQzVLLFdBQVcsR0FBRyxRQUFRO0lBQ2hDMkssWUFBWSxDQUFDN0ssV0FBVyxDQUFDOEssU0FBUyxDQUFDO0lBQ25DQSxTQUFTLENBQUNySCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztNQUMzQztJQUFBLENBQ0gsQ0FBQztJQUVkLE9BQU9aLE9BQU87RUFFbEIsQ0FBQztFQUVELE9BQU87SUFBRTBIO0VBQVMsQ0FBQztBQUV2QixDQUFDLENBQUUsQ0FBQztBQUVKUSxNQUFNLENBQUN0SCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVsQixZQUFZLENBQUNnSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Zvcm12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mb3JtdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZm9ybXZhbGlkYXRpb24vLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsIGJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgICAtLW1haW4tY29udGVudDogd2hpdGU7XHJcbiAgICAtLXNpZGUtYmFyOiAjZWVlO1xyXG4gICAgLS1idG4tdG9wYmFyOiAjNjA3QUI2O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSwgaDIsIGgze1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgc2FsbW9uOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlucHV0OmhvdmVyLCBpbnB1dDpmb2N1cywgaW5wdXQ6YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXHJcbn1cclxuXHJcbiNkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAzcmVtIDVyZW07XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdzsgKi9cclxufVxyXG5cclxuI3dyYXBwZXJ7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTsgKi9cclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIzcmVtIDEzcmVtO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FuZHlicm93bjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNTUwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgMTI1LCA3Myk7XHJcbn1cclxuXHJcbm9iamVjdHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDE3MHB4OyBcclxuICAgIHBhZGRpbmc6IDEzcHggMjBweCAxM3B4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDsgXHJcbiAgICBib3JkZXItY29sb3I6ICNlZWU7ICAgICAgIC8qIGNoYW5nZXMgd2l0aCB0aGUgYmFja2dyb3VuZCAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNTI0MzI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI3N1Ym1pdC1idG4tZGl2IHtcclxuICAgIGdyaWQtYXJlYTogOCAvIDEgLyA5IC8gMztcclxuICAgIHBhZGRpbmc6IDgwcHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNmb3JtLXRpdGxlLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG4uaW5mby1jb250YWluZXJ7XHJcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBncmVlbjsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5uYW1lLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XHJcbn1cclxuXHJcbi51c2VybmFtZS1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xyXG59XHJcblxyXG4uYmlydGhkYXktY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcclxufVxyXG5cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW5wdXQtc2VjdXJpdHl7XHJcbiAgICAtd2Via2l0LXRleHQtc2VjdXJpdHk6IGRpc2M7XHJcbn1cclxuXHJcbi5hZGRyZXNzLWhvdXNlTi1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiA0IC8gMSAvIDUgLyAzO1xyXG59XHJcblxyXG4udGVsZXBob25lLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDUgLyAxIC8gNiAvIDM7XHJcbn1cclxuXHJcbi5lbWFpbC1jb250YWluZXIge1xyXG4gICAgZ3JpZC1hcmVhOiA2IC8gMSAvIDcgLyAzO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogNyAvIDEgLyA4IC8gMztcclxufVxyXG5cclxuLmxhYmVsLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLndyYXBwZXItZmxleC1jb2x1bW4ge1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgb3JhbmdlOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG5cclxuLndyYXBwZXItZ3JpZCB7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7ICovXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2NSUgMzAlO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyLXctbGFiZWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDJweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTsgKi9cclxufVxyXG5cclxuLmJkYXktdy1sYWJlbCB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uc21hbGxlci1sYWJlbC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uYmlydGhkYXktaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcbi5iaWdnZXItZGl2LTc0IHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxufVxyXG5cclxuLnNtYWxsZXItZGl2LTIwIHsgXHJcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXHJcbn1cclxuXHJcbi8qIGZvciBzdmcncyAqL1xyXG4ud2FybmluZy1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDZweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXHJcbn1cclxuXHJcbi53YXJuaW5nLWRpdjpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndhcm5pbmctc3ZnLCAucm91bmQtd2FybmluZy1zdmcge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxMSUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNDI2OSUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDk1JSk7XHJcbn1cclxuXHJcbi53YXJuaW5nLXRleHQge1xyXG4gICAgY29sb3I6ICNCOTE2MTg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5yZWQtc3RhciB7IGNvbG9yOiBncmV5OyB9XHJcblxyXG4uZ3JlZW4tdGljay1zdmcge1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBmaWx0ZXI6IGludmVydCg2NiUpIHNlcGlhKDcxJSkgc2F0dXJhdGUoNzYyJSkgaHVlLXJvdGF0ZSg2NGRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCg5MiUpO1xyXG59XHJcblxyXG5cclxuLyogYWRkaXRpb24gZm9yIHBhc3N3b3JkICAqL1xyXG4uZ3JhbmRwYXJlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNwYXJlbnQtZGl2e1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0xN3JlbTtcclxufVxyXG5cclxuLmNoaWxkLWRpdiB7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jaGlsZC1kaXYuc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZG90LWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuLmRvdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jaGlsZC1oMyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjs7SUFFckIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtSkFBbUo7QUFDdko7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLDhCQUE4QjtJQUM5Qiw2QkFBNkI7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QUNuQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keXtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICAtLW1haW4tY29udGVudDogd2hpdGU7XFxyXFxuICAgIC0tc2lkZS1iYXI6ICNlZWU7XFxyXFxuICAgIC0tYnRuLXRvcGJhcjogIzYwN0FCNjtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oMSwgaDIsIGgze1xcclxcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcXHJcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBzYWxtb247ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpob3ZlciwgaW5wdXQ6Zm9jdXMsIGlucHV0OmFjdGl2ZSB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI2RpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDNyZW0gNXJlbTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdzsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI3dyYXBwZXJ7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTsgKi9cXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIzcmVtIDEzcmVtO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbmR5YnJvd247XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTJweCAzMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTUwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDEyNSwgNzMpO1xcclxcbn1cXHJcXG5cXHJcXG5vYmplY3R7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxNzBweDsgXFxyXFxuICAgIHBhZGRpbmc6IDEzcHggMjBweCAxM3B4IDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4OyBcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZWVlOyAgICAgICAvKiBjaGFuZ2VzIHdpdGggdGhlIGJhY2tncm91bmQgKi9cXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyNTI0MzI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ0bi1kaXYge1xcclxcbiAgICBncmlkLWFyZWE6IDggLyAxIC8gOSAvIDM7XFxyXFxuICAgIHBhZGRpbmc6IDgwcHggMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNmb3JtLXRpdGxlLWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1jb250YWluZXJ7XFxyXFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlcm5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlydGhkYXktY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXHJcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1zZWN1cml0eXtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LXNlY3VyaXR5OiBkaXNjO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcy1ob3VzZU4tY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiA0IC8gMSAvIDUgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4udGVsZXBob25lLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtYXJlYTogNSAvIDEgLyA2IC8gMztcXHJcXG59XFxyXFxuXFxyXFxuLmVtYWlsLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtYXJlYTogNiAvIDEgLyA3IC8gMztcXHJcXG59XFxyXFxuXFxyXFxuLnBhc3N3b3JkLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtYXJlYTogNyAvIDEgLyA4IC8gMztcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyLWZsZXgtY29sdW1uIHtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgb3JhbmdlOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItZ3JpZCB7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTsgKi9cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2NSUgMzAlO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXItdy1sYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmJkYXktdy1sYWJlbCB7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbWFsbGVyLWxhYmVsLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIGNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uYmlydGhkYXktaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBoZWlnaHQ6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbi5iaWdnZXItZGl2LTc0IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG4uc21hbGxlci1kaXYtMjAgeyBcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxyXFxufVxcclxcblxcclxcbi8qIGZvciBzdmcncyAqL1xcclxcbi53YXJuaW5nLWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNnB4O1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ud2FybmluZy1kaXY6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndhcm5pbmctc3ZnLCAucm91bmQtd2FybmluZy1zdmcge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxMSUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNDI2OSUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDk1JSk7XFxyXFxufVxcclxcblxcclxcbi53YXJuaW5nLXRleHQge1xcclxcbiAgICBjb2xvcjogI0I5MTYxODtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLXN0YXIgeyBjb2xvcjogZ3JleTsgfVxcclxcblxcclxcbi5ncmVlbi10aWNrLXN2ZyB7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoNjYlKSBzZXBpYSg3MSUpIHNhdHVyYXRlKDc2MiUpIGh1ZS1yb3RhdGUoNjRkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoOTIlKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogYWRkaXRpb24gZm9yIHBhc3N3b3JkICAqL1xcclxcbi5ncmFuZHBhcmVudHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFyZW50LWRpdntcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAtMTdyZW07XFxyXFxufVxcclxcblxcclxcbi5jaGlsZC1kaXYge1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoaWxkLWRpdi5zaG93IHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdC1kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoaWxkLWgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBjb2xvcjogZ3JleTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnL3NyYy9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IHdhcm5pbmdTaWduVmFyIGZyb20gJy9zcmMvaW1hZ2UvdHJpYW5nbGUtZXhjbGFtYXRpb24tc29saWQuc3ZnJztcclxuaW1wb3J0IHJvdW5kV2FybmluZ1ZhciBmcm9tICcvc3JjL2ltYWdlL2NpcmNsZS1leGNsYW1hdGlvbi1zb2xpZC5zdmcnO1xyXG5pbXBvcnQgZ3JlZW5UaWNrVmFyIGZyb20gJy9zcmMvaW1hZ2UvY2hlY2stc29saWQuc3ZnJztcclxuXHJcbmNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYnKTtcclxuXHJcbi8vIGNsYXNzIEZvcm0ge1xyXG4vLyAgICAgY29uc3RydWN0b3IoZmlyc3ROYW1lLCBsYXN0TmFtZSwgdXNlck5hbWUsIGJpcnRoZGF5LCBzdHJlZXQsIGhvdXNlTnVtYmVyLCBjaXR5LCB6aXBjb2RlLCBjb3VudHksIGNvdW50cnksIHRlbGVwaG9uZSwgZW1haWxTZXQsIGVtYWlsQ29uZmlybSwgcGFzc3dvcmRTZXQsIHBhc3N3b3JkQ29uZmlybSkge1xyXG4vLyAgICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4vLyAgICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuLy8gICAgICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcbi8vICAgICAgICAgdGhpcy5iaXJ0aGRheSA9IGJpcnRoZGF5O1xyXG4vLyAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XHJcbi8vICAgICAgICAgdGhpcy5jaXR5ID0gY2l0eTtcclxuLy8gICAgICAgICB0aGlzLnppcGNvZGUgPSB6aXBjb2RlO1xyXG4vLyAgICAgICAgIHRoaXMuY291bnR5ID0gY291bnR5O1xyXG4vLyAgICAgICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XHJcbi8vICAgICAgICAgdGhpcy50ZWxlcGhvbmUgPSB0ZWxlcGhvbmU7XHJcbi8vICAgICAgICAgdGhpcy5lbWFpbFNldCA9IGVtYWlsU2V0O1xyXG4vLyAgICAgICAgIHRoaXMuZW1haWxDb25maXJtID0gZW1haWxDb25maXJtO1xyXG4vLyAgICAgICAgIHRoaXMucGFzc3dvcmRTZXQgPSBwYXNzd29yZFNldDtcclxuLy8gICAgICAgICB0aGlzLnBhc3N3b3JkQ29uZmlybSA9IHBhc3N3b3JkQ29uZmlybTtcclxuLy8gICAgIH1cclxuXHJcbmNvbnN0IE1zZ1BvcCA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHJlcXVpcmVkTXNnID0gKHRleHQpID0+IHtcclxuICAgICAgICBpZih0ZXh0ID09PSAnJykgcmV0dXJuICcnO1xyXG4gICAgICAgIGNvbnN0IHdhcm5pbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3YXJuaW5nRGl2LmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmctZGl2Jyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3YXJuaW5nU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgICAgICB3YXJuaW5nU2lnbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2Uvc3ZnK3htbCcpO1xyXG4gICAgICAgICAgICB3YXJuaW5nU2lnbi5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nLXN2ZycpO1xyXG4gICAgICAgICAgICB3YXJuaW5nU2lnbi5kYXRhID0gd2FybmluZ1NpZ25WYXI7XHJcbiAgICAgICAgICAgIHdhcm5pbmdEaXYuYXBwZW5kQ2hpbGQod2FybmluZ1NpZ24pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2FybmluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICB3YXJuaW5nVGV4dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nLXRleHQnKTtcclxuICAgICAgICAgICAgd2FybmluZ1RleHQudGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XHJcbiAgICAgICAgICAgIHdhcm5pbmdEaXYuYXBwZW5kQ2hpbGQod2FybmluZ1RleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gd2FybmluZ0RpdjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb3VuZFdhcm5pbmdTaWduID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJvdW5kV2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xyXG4gICAgICAgIHJvdW5kV2FybmluZy5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCAnaW1hZ2Uvc3ZnK3htbCcpO1xyXG4gICAgICAgIHJvdW5kV2FybmluZy5jbGFzc0xpc3QuYWRkKCdyb3VuZC13YXJuaW5nLXN2ZycpO1xyXG4gICAgICAgIHJvdW5kV2FybmluZy5kYXRhID0gcm91bmRXYXJuaW5nVmFyO1xyXG4gICAgICAgIHJldHVybiByb3VuZFdhcm5pbmc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5jb3JyZWN0VmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2FybmluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdhcm5pbmdEaXYuY2xhc3NMaXN0LmFkZCgnd2FybmluZy1kaXYnKTtcclxuXHJcbiAgICAgICAgICAgIHdhcm5pbmdEaXYuYXBwZW5kQ2hpbGQocm91bmRXYXJuaW5nU2lnbigpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdhcm5pbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICAgICAgd2FybmluZ1RleHQuY2xhc3NMaXN0LmFkZCgnd2FybmluZy10ZXh0Jyk7XHJcbiAgICAgICAgICAgIHdhcm5pbmdUZXh0LnRleHRDb250ZW50ID0gYEluY29ycmVjdCB2YWx1ZWA7XHJcbiAgICAgICAgICAgIHdhcm5pbmdEaXYuYXBwZW5kQ2hpbGQod2FybmluZ1RleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gd2FybmluZ0RpdjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VybmFtZVRha2VuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdhcm5pbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3YXJuaW5nRGl2LmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmctZGl2Jyk7XHJcblxyXG4gICAgICAgICAgICB3YXJuaW5nRGl2LmFwcGVuZENoaWxkKHJvdW5kV2FybmluZ1NpZ24oKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3YXJuaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIHdhcm5pbmdUZXh0LmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmctdGV4dCcpO1xyXG4gICAgICAgICAgICB3YXJuaW5nVGV4dC50ZXh0Q29udGVudCA9IGBVc2VybmFtZSBpcyB0YWtlbmA7XHJcbiAgICAgICAgICAgIHdhcm5pbmdEaXYuYXBwZW5kQ2hpbGQod2FybmluZ1RleHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gd2FybmluZ0RpdjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBncmVlblRpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ3JlZW5UaWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XHJcbiAgICAgICAgZ3JlZW5UaWNrLnNldEF0dHJpYnV0ZSgnZGF0YScsICdpbWFnZS9zdmcreG1sJyk7XHJcbiAgICAgICAgZ3JlZW5UaWNrLmNsYXNzTGlzdC5hZGQoJ2dyZWVuLXRpY2stc3ZnJyk7XHJcbiAgICAgICAgZ3JlZW5UaWNrLmRhdGEgPSBncmVlblRpY2tWYXI7XHJcbiAgICAgICAgcmV0dXJuIGdyZWVuVGljaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0dXJuU3RhclJlZENsciA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ3JlZC1zdGFyJyk7XHJcbiAgICAgICAgc3Rhci50ZXh0Q29udGVudCA9ICcqJztcclxuICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHN0YXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVxdWlyZWRNc2csXHJcbiAgICAgICAgaW5jb3JyZWN0VmFsdWUsXHJcbiAgICAgICAgdXNlcm5hbWVUYWtlbixcclxuICAgICAgICBncmVlblRpY2ssXHJcbiAgICAgICAgdHVyblN0YXJSZWRDbHJcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmNvbnN0IENoYW5nZURpdkNscnMgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGNoYW5nZVRvUmVkID0gKHRleHQsIGRvdCkgPT4ge1xyXG4gICAgICAgIHRleHQuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICBkb3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRvR3JlZW4gPSAodGV4dCwgZG90KSA9PiB7XHJcbiAgICAgICAgdGV4dC5zdHlsZS5jb2xvciA9ICdncmVlbic7XHJcbiAgICAgICAgZG90LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hhbmdlVG9SZWQsXHJcbiAgICAgICAgY2hhbmdlVG9HcmVlblxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmNvbnN0IFZhbGlkYXRpb25DaGVjayA9IChmdW5jdGlvbigpeyBcclxuICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICBsZXQgb2JqZWN0ID0ge1xyXG4gICAgICAgICAgICB0ZXh0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZG90LWRpdi10ZXh0LSR7aX1gKSxcclxuICAgICAgICAgICAgZG90OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZG90LWRpdi0ke2l9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJyLnB1c2gob2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbGxvd3MgbGV0dGVycywgd2hpdGUgc3BhY2UsIG51bWJlciwgZGFzaCBhbmQgZG90LCBubyBvdGhlciBzcGVjaWFsIGNoYXI6IGZvciBmaXJzdCBhbmQgbGFzdCBuYW1lLCBhbmQgc3RyZWV0IG5hbWVcclxuICAgIGNvbnN0IGFsbG93TGV0dGVyQW5kRG90ID0gKGlucHV0KSA9PiB7IFxyXG4gICAgICAgIGNvbnN0IG1zZ0FyciA9IFsnRW1wdHkgZmllbGQnLCAnTWluaW11bSByZXF1aXJlZCBhbW91bnQgb2YgY2hhcmFjdGVyczogMi4gQ3VycmVudCBpbnB1dCB0b28gc2hvcnQnLCAnSW52YWxpZCBjaGFyYWN0ZXInXTtcclxuICAgICAgICBpZihpbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1zZ1BvcC5yZXF1aXJlZE1zZyhtc2dBcnJbMF0pO1xyXG4gICAgICAgIH0gZWxzZSBpZihpbnB1dC52YWxpZGl0eS50b29TaG9ydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKG1zZ0FyclsxXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvXltePyFAI1xcfCYoKTw+LyQlXl8sXSskL2dtLnRlc3QoaW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIE1zZ1BvcC5yZXF1aXJlZE1zZyhtc2dBcnJbMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFsbG93cyBsZXR0ZXJzLCBudW1iZXIsIHNwZWNpYWwgY2hhcmFjdGVycywgYnV0IG5vIHdoaXRlIHNwYWNlOiBmb3IgdXNlcm5hbWVcclxuICAgIGNvbnN0IHVzZXJuYW1lQ2hlY2tlciA9ICh0ZXh0LCB1c2VybmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1zZ0FyciA9IFsnRW1wdHkgZmllbGQnLCAnTWluaW11bSByZXF1aXJlZCBhbW91bnQgb2YgY2hhcmFjdGVyczogNi4gQ3VycmVudCBpbnB1dCB0b28gc2hvcnQnLCAnTm8gc3BhY2UgYmV0d2VlbiBjaGFyYWN0ZXJzJywgYCR7dXNlcm5hbWV9IGlzIHRha2VuYF07XHJcbiAgICAgICAgaWYodGV4dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1zZ1BvcC5yZXF1aXJlZE1zZyhtc2dBcnJbMF0pO1xyXG4gICAgICAgIH0gZWxzZSBpZih0ZXh0LnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNc2dQb3AucmVxdWlyZWRNc2cobXNnQXJyWzFdKTtcclxuICAgICAgICB9IGVsc2UgaWYodXNlcm5hbWUgPT09ICd0ZXN0aW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKG1zZ0FyclszXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvXlteXFxzXSskL2dtLnRlc3QodGV4dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKG1zZ0FyclsyXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWxsb3dzIGxldHRlcnMgYW5kIHdoaXRlIHNwYWNlLCBubyBudW1iZXIgb3Igc3BlY2lhbCBjaGFyOiBmb3IgY2l0eSBcclxuICAgIGNvbnN0IGZvckNpdHkgPSAodGV4dCkgPT4geyBcclxuICAgICAgICBjb25zdCBtc2dBcnIgPSBbJ0VtcHR5IGZpZWxkJywgJ0N1cnJlbnQgaW5wdXQgdG9vIHNob3J0LiBNaW5pbXVtIGxlbmd0aDogMicsICdJbnZhbGlkIGNoYXJhY3RlciddO1xyXG4gICAgICAgIGlmKHRleHQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNc2dQb3AucmVxdWlyZWRNc2cobXNnQXJyWzBdKTtcclxuICAgICAgICB9IGVsc2UgaWYodGV4dC52YWxpZGl0eS50b29TaG9ydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKG1zZ0FyclsxXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvXltePyFAfCMmKC8pJFxcPD4lLl4tXyxcXGRdKyQvZ20udGVzdCh0ZXh0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBNc2dQb3AucmVxdWlyZWRNc2cobXNnQXJyWzJdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbGxvd3MgbGV0dGVycyBhbmQgd2hpdGUgc3BhY2UsIG5vIG51bWJlciBvciBzcGVjaWFsIGNoYXI6IGZvciBjb3VudHlcclxuICAgIGNvbnN0IGZvckNvdW50eSA9ICh0ZXh0KSA9PiB7IFxyXG4gICAgICAgIGNvbnN0IG1zZ0FyciA9IFsnQ3VycmVudCBpbnB1dCB0b28gc2hvcnQuIE1pbmltdW0gbGVuZ3RoOiAyJywgJ0ludmFsaWQgY2hhcmFjdGVyJ107XHJcbiAgICAgICAgaWYodGV4dC52YWx1ZSA9PT0gJycpIHsgXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gaWYodGV4dC52YWxpZGl0eS50b29TaG9ydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKG1zZ0FyclswXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvXltePyFAfCMmKC8pJFxcPD4lLl4tXyxcXGRdKyQvZ20udGVzdCh0ZXh0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBNc2dQb3AucmVxdWlyZWRNc2cobXNnQXJyWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbGxvdyBvbmx5IGxldHRlcnM6IGZvciBjb3VudHJ5XHJcbiAgICBjb25zdCBhbGxvd09ubHlMZXR0ZXIgPSAodGV4dCkgPT4geyAgICBcclxuICAgICAgICBpZih0ZXh0LnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKFwiRW1wdHkgZmllbGRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvXltePyFAfCMmKCkkXFw8PiUuXi1fLFxcZF0rJC9nbS50ZXN0KHRleHQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIE1zZ1BvcC5yZXF1aXJlZE1zZyhcIk9ubHkgYWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgYWxsb3dlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbGxvdyBhIGZldyBzcGVjaWFsIGNoYXIsIG51bWJlcnMgYW5kIGxldHRlcnMsIGJ1dCBubyB3aGl0ZSBzcGFjZTogZm9yIHppcGNvZGVcclxuICAgIGNvbnN0IGZvclppcGNvZGUgPSAodGV4dCkgPT4ge1xyXG4gICAgICAgIGlmKHRleHQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNc2dQb3AucmVxdWlyZWRNc2coJ0VtcHR5IGZpZWxkJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvXltePyFAfCMmJFxcPD4lXl8sXSskL2dtLnRlc3QodGV4dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKCdJbnZhbGlkIGNoYXJhY3RlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFsbG93IGEgZmV3IHNwZWNpYWwgY2hhciwgbnVtYmVycyBhbmQgbGV0dGVycywgYnV0IG5vIHdoaXRlIHNwYWNlOiBmb3IgaG91c2UgbnVtYmVyXHJcbiAgICBjb25zdCBmb3JIb3VzZU51bWJlciA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgICAgaWYodGV4dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICgvXltePyFAfCMmJFxcPD4lXl8sXSskL2dtLnRlc3QodGV4dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKCdJbnZhbGlkIGNoYXJhY3RlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBlbWFpbFxyXG4gICAgY29uc3QgZW1haWxDaGVja2VyID0gKHRleHQpID0+IHsgXHJcbiAgICAgICAgY29uc3QgbXNnQXJyID0gWydFbXB0eSBmaWVsZCcsICdJbnZhbGlkIGNoYXJhY3RlcicsIGBQbGVhc2UgZW50ZXIgdGhlIHBhcnQgcHJpb3IgdG8gJ0AnYCwgYFlvdXIgZW1haWwgYWRkcmVzcyBpcyBtaXNzaW5nIGFuICdAJ2AsIGBUaGUgZW1haWwgYWRkcmVzcyBjYW4gY29udGFpbiBvbmx5IG9uZSAnQCdgLCBgUGxlYXNlIGVudGVyIHRoZSBwYXJ0IGZvbGxvd2luZyAnQCdgLCBgJy4nIGlzIGluIGFuIGluY29ycmVjdCBwb3NpdGlvbi4gUGxlYXNlIGVudGVyIGNoYXJhY3RlcnMgYmV0d2VlbiAnQCcgYW5kICcuJ2BdO1xyXG4gICAgICAgIGlmKHRleHQudmFsdWUgPT09ICcnKSB7IFxyXG4gICAgICAgICAgICByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKG1zZ0FyclswXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKC9bPyEjJigpJCVeLF0vZ20udGVzdCh0ZXh0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKG1zZ0FyclsxXSk7XHJcbiAgICAgICAgfSAgZWxzZSBpZiAoL15bXkBdKyQvZ20udGVzdCh0ZXh0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gTXNnUG9wLnJlcXVpcmVkTXNnKG1zZ0FyclszXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghKC9bXlxcc11bQF0vZ20udGVzdCh0ZXh0LnZhbHVlKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1zZ1BvcC5yZXF1aXJlZE1zZyhtc2dBcnJbMl0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoLyg/Oi4qKD86KD86QCkpKXsyfS9nbS50ZXN0KHRleHQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNc2dQb3AucmVxdWlyZWRNc2cobXNnQXJyWzRdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKC9AJC9nbS50ZXN0KHRleHQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNc2dQb3AucmVxdWlyZWRNc2cobXNnQXJyWzVdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKC9AXFwuL2dtLnRlc3QodGV4dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1zZ1BvcC5yZXF1aXJlZE1zZyhtc2dBcnJbNl0pO1xyXG4gICAgICAgIH0gZWxzZSByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGZvciBwYXNzd29yZFxyXG4gICAgY29uc3QgcGFzc3dvcmRDaGVja2VyID0gKHRleHQsIG9iamVjdEFycikgPT4ge1xyXG4gICAgICAgIGlmKHRleHQudmFsdWUgPT09ICcnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgaWYodGV4dC52YWxpZGl0eS50b29TaG9ydCkge1xyXG4gICAgICAgICAgICBDaGFuZ2VEaXZDbHJzLmNoYW5nZVRvUmVkKG9iamVjdEFyclswXS50ZXh0LCBvYmplY3RBcnJbMF0uZG90KTtcclxuICAgICAgICB9IGVsc2UgQ2hhbmdlRGl2Q2xycy5jaGFuZ2VUb0dyZWVuKG9iamVjdEFyclswXS50ZXh0LCBvYmplY3RBcnJbMF0uZG90KTtcclxuXHJcbiAgICAgICAgaWYoL1thLXpdKy9nbS50ZXN0KHRleHQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIENoYW5nZURpdkNscnMuY2hhbmdlVG9HcmVlbihvYmplY3RBcnJbMV0udGV4dCwgb2JqZWN0QXJyWzFdLmRvdCk7XHJcbiAgICAgICAgfSBlbHNlIENoYW5nZURpdkNscnMuY2hhbmdlVG9SZWQob2JqZWN0QXJyWzFdLnRleHQsIG9iamVjdEFyclsxXS5kb3QpO1xyXG5cclxuICAgICAgICBpZigvW0EtWl0rL2dtLnRlc3QodGV4dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgQ2hhbmdlRGl2Q2xycy5jaGFuZ2VUb0dyZWVuKG9iamVjdEFyclsyXS50ZXh0LCBvYmplY3RBcnJbMl0uZG90KTtcclxuICAgICAgICB9IGVsc2UgQ2hhbmdlRGl2Q2xycy5jaGFuZ2VUb1JlZChvYmplY3RBcnJbMl0udGV4dCwgb2JqZWN0QXJyWzJdLmRvdCk7XHJcblxyXG4gICAgICAgIGlmKC9eW15cXGRdKyQvZ20udGVzdCh0ZXh0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICBDaGFuZ2VEaXZDbHJzLmNoYW5nZVRvUmVkKG9iamVjdEFyclszXS50ZXh0LCBvYmplY3RBcnJbM10uZG90KTtcclxuICAgICAgICB9IGVsc2UgQ2hhbmdlRGl2Q2xycy5jaGFuZ2VUb0dyZWVuKG9iamVjdEFyclszXS50ZXh0LCBvYmplY3RBcnJbM10uZG90KTtcclxuXHJcbiAgICAgICAgaWYoL15bXj8hQCNcXHwmKCkvJCVeXyxdKyQvZ20udGVzdCh0ZXh0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICBDaGFuZ2VEaXZDbHJzLmNoYW5nZVRvUmVkKG9iamVjdEFycls0XS50ZXh0LCBvYmplY3RBcnJbNF0uZG90KTtcclxuICAgICAgICB9IGVsc2UgQ2hhbmdlRGl2Q2xycy5jaGFuZ2VUb0dyZWVuKG9iamVjdEFycls0XS50ZXh0LCBvYmplY3RBcnJbNF0uZG90KTtcclxuXHJcbiAgICAgICAgaWYgKCEoL15bXlxcc10rJC9nbS50ZXN0KHRleHQudmFsdWUpKSkge1xyXG4gICAgICAgICAgICBDaGFuZ2VEaXZDbHJzLmNoYW5nZVRvUmVkKG9iamVjdEFycls1XS50ZXh0LCBvYmplY3RBcnJbNV0uZG90KTtcclxuICAgICAgICB9IGVsc2UgQ2hhbmdlRGl2Q2xycy5jaGFuZ2VUb0dyZWVuKG9iamVjdEFycls1XS50ZXh0LCBvYmplY3RBcnJbNV0uZG90KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFsbG93T25seUxldHRlcixcclxuICAgICAgICBhbGxvd0xldHRlckFuZERvdCxcclxuICAgICAgICBmb3JDaXR5LFxyXG4gICAgICAgIGZvckNvdW50eSxcclxuICAgICAgICBmb3JaaXBjb2RlLFxyXG4gICAgICAgIGZvckhvdXNlTnVtYmVyLFxyXG4gICAgICAgIGVtYWlsQ2hlY2tlcixcclxuICAgICAgICB1c2VybmFtZUNoZWNrZXIsXHJcbiAgICAgICAgcGFzc3dvcmRDaGVja2VyXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5cclxuY29uc3QgRm9ybUJhc2ljR3VpID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IGZ1bGxOYW1lRGl2ID0gKHBhcmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZm8tY29udGFpbmVyJywgJ25hbWUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5hbWVDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRGl2TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBsYWJlbERpdk5hbWUuY2xhc3NMaXN0LmFkZCgnbGFiZWwtZGl2Jyk7XHJcbiAgICAgICAgICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxEaXZOYW1lKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsTmFtZS5jbGFzc0xpc3QuYWRkKCdsYWJlbC10ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSAnTmFtZSc7XHJcbiAgICAgICAgICAgICAgICBsYWJlbERpdk5hbWUuYXBwZW5kQ2hpbGQobGFiZWxOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLWZsZXgtY29sdW1uJyk7XHJcbiAgICAgICAgICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZm5hbWVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZm5hbWVJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXItdy1sYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChmbmFtZUlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZk5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZk5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCdzbWFsbGVyLWxhYmVsLXRleHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBmTmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpcnN0TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZOYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnRmlyc3QgbmFtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm5hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChmTmFtZUxhYmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBNc2dQb3AudHVyblN0YXJSZWRDbHIoZk5hbWVMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE5hbWVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm5hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdE5hbWVJbnB1dERpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZmlyc3ROYW1lJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lSW5wdXQubWluTGVuZ3RoID0gJzInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5uYW1lID0gJ2dpdmVuLW5hbWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0FuZ2VsaWNhJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lSW5wdXREaXYuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JlZW5UaWNrMSA9IE1zZ1BvcC5ncmVlblRpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdhcm5pbmcxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZzEgPSBWYWxpZGF0aW9uQ2hlY2suYWxsb3dMZXR0ZXJBbmREb3QoZmlyc3ROYW1lSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod2FybmluZzEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmbmFtZUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gdGVtcCkgZm5hbWVJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lSW5wdXREaXYuYXBwZW5kQ2hpbGQoZ3JlZW5UaWNrMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdE5hbWVJbnB1dERpdi5sYXN0Q2hpbGQgPT09IGdyZWVuVGljazEpIGdyZWVuVGljazEucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZuYW1lSW5wdXRDb250YWluZXIubGFzdENoaWxkID09PSB0ZW1wKSBmbmFtZUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wID0gd2FybmluZzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm5hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh3YXJuaW5nMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsbmFtZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBsbmFtZUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci13LWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxuYW1lSW5wdXRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TmFtZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZWxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NtYWxsZXItbGFiZWwtdGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbGFzdE5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZWxhYmVsLnRleHRDb250ZW50ID0gJ0xhc3QgbmFtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgbG5hbWVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChsYXN0TmFtZWxhYmVsKTtcclxuICAgICAgICAgICAgICAgICAgICBNc2dQb3AudHVyblN0YXJSZWRDbHIobGFzdE5hbWVsYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TmFtZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lSW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuYW1lSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFzdE5hbWVJbnB1dERpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbGFzdE5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lSW5wdXQubWluTGVuZ3RoID0gJzInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVJbnB1dC5uYW1lID0gJ2ZhbWlseS1uYW1lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdEZW1vbmxvcmQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVJbnB1dERpdi5hcHBlbmRDaGlsZChsYXN0TmFtZUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmVlblRpY2syID0gTXNnUG9wLmdyZWVuVGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdhcm5pbmcyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZzIgPSBWYWxpZGF0aW9uQ2hlY2suYWxsb3dMZXR0ZXJBbmREb3QobGFzdE5hbWVJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdhcm5pbmcyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobG5hbWVJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQgPT09IHRlbXAyKSBsbmFtZUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVJbnB1dERpdi5hcHBlbmRDaGlsZChncmVlblRpY2syKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE5hbWVJbnB1dERpdi5sYXN0Q2hpbGQgPT09IGdyZWVuVGljazIpIGdyZWVuVGljazEucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsbmFtZUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gdGVtcDIpIGxuYW1lSW5wdXRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wMiA9IHdhcm5pbmcyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdhcm5pbmcyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IG9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogbmFtZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZmlyc3ROYW1lSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWVJbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlcm5hbWVEaXYgPSAocGFyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB1c2VyTmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhaW5lcicsICd1c2VybmFtZS1jb250YWluZXInKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodXNlck5hbWVDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRGl2TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBsYWJlbERpdk5hbWUuY2xhc3NMaXN0LmFkZCgnbGFiZWwtZGl2Jyk7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsRGl2TmFtZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWUuY2xhc3NMaXN0LmFkZCgnbGFiZWwtdGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxOYW1lLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VzZXJOYW1lJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSAnVXNlcm5hbWUnO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxEaXZOYW1lLmFwcGVuZENoaWxkKGxhYmVsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBNc2dQb3AudHVyblN0YXJSZWRDbHIobGFiZWxOYW1lKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci1mbGV4LWNvbHVtbicpO1xyXG4gICAgICAgICAgICB1c2VyTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci13LWxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHVzZXJuYW1lSW5wdXRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VybmFtZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHVzZXJuYW1lSW5wdXREaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXJOYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lSW5wdXQubWluTGVuZ3RoID0gJzYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZUlucHV0Lm5hbWUgPSAnbmFtZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ21hdHRoZXlkZHJHblNseXI1NCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lSW5wdXREaXYuYXBwZW5kQ2hpbGQodXNlck5hbWVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmVlblRpY2sgPSBNc2dQb3AuZ3JlZW5UaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3YXJuaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nID0gVmFsaWRhdGlvbkNoZWNrLnVzZXJuYW1lQ2hlY2tlcih1c2VyTmFtZUlucHV0LCB1c2VyTmFtZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod2FybmluZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJuYW1lSW5wdXRDb250YWluZXIubGFzdENoaWxkID09PSB0ZW1wKSB1c2VybmFtZUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUlucHV0RGl2LmFwcGVuZENoaWxkKGdyZWVuVGljayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VybmFtZUlucHV0RGl2Lmxhc3RDaGlsZCA9PT0gZ3JlZW5UaWNrKSBncmVlblRpY2sucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJuYW1lSW5wdXRDb250YWluZXIubGFzdENoaWxkID09PSB0ZW1wKSB1c2VybmFtZUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wID0gd2FybmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdhcm5pbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiB1c2VyTmFtZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmlydGhkYXlEaXYgPSAocGFyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiaXJ0aGRheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhaW5lcicsICdiaXJ0aGRheS1jb250YWluZXInKTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoYmlydGhkYXlDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRGl2TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBsYWJlbERpdk5hbWUuY2xhc3NMaXN0LmFkZCgnbGFiZWwtZGl2Jyk7XHJcbiAgICAgICAgICAgIGJpcnRoZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsRGl2TmFtZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWUuY2xhc3NMaXN0LmFkZCgnbGFiZWwtdGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxOYW1lLnRleHRDb250ZW50ID0gJ0JpcnRoZGF5JztcclxuICAgICAgICAgICAgICAgIGxhYmVsRGl2TmFtZS5hcHBlbmRDaGlsZChsYWJlbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgTXNnUG9wLnR1cm5TdGFyUmVkQ2xyKGxhYmVsTmFtZSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBiaXJ0aGRheUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmlydGhkYXlJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiaXJ0aGRheS1pbnB1dC1jb250YWluZXInKTtcclxuICAgICAgICBiaXJ0aGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChiaXJ0aGRheUlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRheUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRheUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci13LWxhYmVsJyk7XHJcbiAgICAgICAgICAgIGJpcnRoZGF5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5SW5wdXRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgcm91bmRXYXJuaW5nMSA9IE1zZ1BvcC5pbmNvcnJlY3RWYWx1ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgZGF5SW5wdXQuc2V0QXR0cmlidXRlKCdpbnB1dG1vZGUnLCAnbnVtZXJpYycpO1xyXG4gICAgICAgICAgICAgICAgZGF5SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGF5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMzE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheU9wdGlvbi50ZXh0ID0gJ0REJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5SW5wdXQuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheU9wdGlvbi52YWx1ZT1gZGF5JHtpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheU9wdGlvbi50ZXh0ID0gYCR7aX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5SW5wdXQuYXBwZW5kQ2hpbGQoZGF5T3B0aW9uKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZXJEYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRheUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF5SW5wdXQudmFsdWUgPT09ICdERCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvdW50ZXJEYXkgPT09IHRydWUpID8gZGF5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocm91bmRXYXJuaW5nMSkgOiAoY291bnRlckRheSA9IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF5SW5wdXRDb250YWluZXIubGFzdENoaWxkID09PSByb3VuZFdhcm5pbmcxKSByb3VuZFdhcm5pbmcxLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtb250aElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1vbnRoSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyLXctbGFiZWwnKTtcclxuICAgICAgICAgICAgYmlydGhkYXlJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChtb250aElucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJvdW5kV2FybmluZzIgPSBNc2dQb3AuaW5jb3JyZWN0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgbW9udGhJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lucHV0bW9kZScsICdudW1lcmljJyk7XHJcbiAgICAgICAgICAgIG1vbnRoSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBtb250aElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1vbnRoSW5wdXQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9udGhPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtb250aE9wdGlvbi50ZXh0ID0gJ01NJztcclxuICAgICAgICAgICAgICAgICAgICBtb250aElucHV0LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhPcHRpb24udmFsdWU9YG1vbnRoJHtpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhPcHRpb24udGV4dCA9IGAke2l9YDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBtb250aElucHV0LmFwcGVuZENoaWxkKG1vbnRoT3B0aW9uKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyTW9udGggPSBmYWxzZTtcclxuICAgICAgICAgICAgbW9udGhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYobW9udGhJbnB1dC52YWx1ZSA9PT0gJ01NJykge1xyXG4gICAgICAgICAgICAgICAgICAgIChjb3VudGVyTW9udGggPT09IHRydWUpID8gbW9udGhJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChyb3VuZFdhcm5pbmcyKSA6IChjb3VudGVyTW9udGggPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9udGhJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQgPT09IHJvdW5kV2FybmluZzIpIHJvdW5kV2FybmluZzIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeWVhcklucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHllYXJJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXItdy1sYWJlbCcpO1xyXG4gICAgICAgICAgICBiaXJ0aGRheUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHllYXJJbnB1dENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByb3VuZFdhcm5pbmczID0gTXNnUG9wLmluY29ycmVjdFZhbHVlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB5ZWFySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgeWVhcklucHV0LnNldEF0dHJpYnV0ZSgnaW5wdXRtb2RlJywgJ251bWVyaWMnKTtcclxuICAgICAgICAgICAgeWVhcklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgeWVhcklucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHllYXJJbnB1dCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOTM5OyBpIDw9IDIwMjU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHllYXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT09IDE5MzkpIHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyT3B0aW9uLnRleHQgPSAnWVlZWSc7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcklucHV0LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhck9wdGlvbi52YWx1ZT1geWVhciR7aX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXJPcHRpb24udGV4dCA9IGAke2l9YDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB5ZWFySW5wdXQuYXBwZW5kQ2hpbGQoeWVhck9wdGlvbik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgY291bnRlclllYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgeWVhcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZih5ZWFySW5wdXQudmFsdWUgPT09ICdZWVlZJykge1xyXG4gICAgICAgICAgICAgICAgICAgIChjb3VudGVyWWVhciA9PT0gdHJ1ZSkgPyB5ZWFySW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocm91bmRXYXJuaW5nMykgOiAoY291bnRlclllYXIgPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeWVhcklucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gcm91bmRXYXJuaW5nMykgcm91bmRXYXJuaW5nMy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IG9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogYmlydGhkYXlDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICBkYXlJbnB1dDogZGF5SW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBtb250aElucHV0OiBtb250aElucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgeWVhcklucHV0OiB5ZWFySW5wdXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZHJlc3NEaXYgPSAocGFyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFkZHJlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mby1jb250YWluZXInLCAnYWRkcmVzcy1ob3VzZU4tY29udGFpbmVyJyk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGFkZHJlc3NDb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbERpdk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsYWJlbERpdk5hbWUuY2xhc3NMaXN0LmFkZCgnbGFiZWwtZGl2Jyk7XHJcbiAgICAgICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbERpdk5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgbGFiZWxOYW1lLmNsYXNzTGlzdC5hZGQoJ2xhYmVsLXRleHQnKTtcclxuICAgICAgICAgICAgbGFiZWxOYW1lLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xyXG4gICAgICAgICAgICBsYWJlbERpdk5hbWUuYXBwZW5kQ2hpbGQobGFiZWxOYW1lKTtcclxuXHJcbiAgICAgICAgY291bnR5TkNvdW50cnlEaXYoKTtcclxuICAgICAgICBjaXR5TlBvc3RhbENvZGVEaXYoKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXItZ3JpZCcpO1xyXG4gICAgICAgIGFkZHJlc3NDb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHJlZXRJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzdHJlZXRJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXItdy1sYWJlbCcsICdiaWdnZXItZGl2LTc0Jyk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc3RyZWV0SW5wdXRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVldE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBzdHJlZXROYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnc21hbGxlci1sYWJlbC10ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICBzdHJlZXROYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc3RyZWV0TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgc3RyZWV0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1N0cmVldCc7XHJcbiAgICAgICAgICAgICAgICBzdHJlZXRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdHJlZXROYW1lTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgTXNnUG9wLnR1cm5TdGFyUmVkQ2xyKHN0cmVldE5hbWVMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVldE5hbWVJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVldE5hbWVJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBzdHJlZXRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdHJlZXROYW1lSW5wdXREaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyZWV0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWV0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVldE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0cmVldE5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWV0TmFtZUlucHV0Lm5hbWUgPSAnYWRkcmVzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVldE5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVldE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICczMDUgRWRnZW1vbnQgU3QuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWV0TmFtZUlucHV0RGl2LmFwcGVuZENoaWxkKHN0cmVldE5hbWVJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmVlblRpY2sxID0gTXNnUG9wLmdyZWVuVGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2FybmluZzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWV0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZzEgPSBWYWxpZGF0aW9uQ2hlY2suYWxsb3dMZXR0ZXJBbmREb3Qoc3RyZWV0TmFtZUlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlZXROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3YXJuaW5nMSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmVldElucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gdGVtcCkgc3RyZWV0SW5wdXRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVldE5hbWVJbnB1dERpdi5hcHBlbmRDaGlsZChncmVlblRpY2sxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmVldE5hbWVJbnB1dERpdi5sYXN0Q2hpbGQgPT09IGdyZWVuVGljazEpIGdyZWVuVGljazEucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmVldElucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gdGVtcCkgc3RyZWV0SW5wdXRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAgPSB3YXJuaW5nMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlZXRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh3YXJuaW5nMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhvdXNlTklucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGhvdXNlTklucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci13LWxhYmVsJywgJ3NtYWxsZXItZGl2LTIwJyk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaG91c2VOSW5wdXRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXNlTkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGhvdXNlTkxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NtYWxsZXItbGFiZWwtdGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgaG91c2VOTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnaG91c2VOdW1iZXInKTtcclxuICAgICAgICAgICAgICAgIGhvdXNlTkxhYmVsLnRleHRDb250ZW50ID0gJ0hvdXNlIE51bWJlcic7XHJcbiAgICAgICAgICAgICAgICBob3VzZU5JbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChob3VzZU5MYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhvdXNlTklucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91c2VOSW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91c2VOSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91c2VOSW5wdXREaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91c2VOSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VzZU5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VzZU5JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXNlTnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXNlTklucHV0Lm5hbWUgPSAnYWRkcmVzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXNlTklucHV0LnBsYWNlaG9sZGVyID0gJzY2QSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXNlTklucHV0RGl2LmFwcGVuZENoaWxkKGhvdXNlTklucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyZWVuVGljazIgPSBNc2dQb3AuZ3JlZW5UaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3YXJuaW5nMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaG91c2VOSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nMiA9IFZhbGlkYXRpb25DaGVjay5mb3JIb3VzZU51bWJlcihob3VzZU5JbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaG91c2VOSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3YXJuaW5nMiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChob3VzZU5JbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQgPT09IHRlbXAyKSBob3VzZU5JbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvdXNlTklucHV0RGl2Lmxhc3RDaGlsZCA9PT0gZ3JlZW5UaWNrMikgZ3JlZW5UaWNrMi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih3YXJuaW5nMiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvdXNlTklucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gdGVtcDIpIGhvdXNlTklucHV0Q29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VzZU5JbnB1dERpdi5hcHBlbmRDaGlsZChncmVlblRpY2syKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvdXNlTklucHV0RGl2Lmxhc3RDaGlsZCA9PT0gZ3JlZW5UaWNrMikgZ3JlZW5UaWNrMi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG91c2VOSW5wdXRDb250YWluZXIubGFzdENoaWxkID09PSB0ZW1wMikgaG91c2VOSW5wdXRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAyID0gd2FybmluZzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91c2VOSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQod2FybmluZzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IG9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IGAke3N0cmVldE5hbWVJbnB1dC52YWx1ZX0gJHtob3VzZU5JbnB1dC52YWx1ZX1gXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0ZWxlcGhvbmVEaXYgPSAocGFyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVsV2FybmluZyA9IE1zZ1BvcC5yZXF1aXJlZE1zZygpO1xyXG5cclxuICAgICAgICBjb25zdCB0ZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mby1jb250YWluZXInLCAndGVsZXBob25lLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0ZWxDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRGl2TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBsYWJlbERpdk5hbWUuY2xhc3NMaXN0LmFkZCgnbGFiZWwtZGl2Jyk7XHJcbiAgICAgICAgICAgIHRlbENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbERpdk5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWUuY2xhc3NMaXN0LmFkZCgnbGFiZWwtdGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxOYW1lLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Bob25lTnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSAnVGVsZXBob25lJztcclxuICAgICAgICAgICAgICAgIGxhYmVsRGl2TmFtZS5hcHBlbmRDaGlsZChsYWJlbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgTXNnUG9wLnR1cm5TdGFyUmVkQ2xyKGxhYmVsTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXItZmxleC1jb2x1bW4nKTtcclxuICAgICAgICB0ZWxDb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgdGVsSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGVsSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyLXctbGFiZWwnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0ZWxJbnB1dENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVsSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHRlbElucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgdGVsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGVsSW5wdXREaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncmVlblRpY2sgPSBNc2dQb3AuZ3JlZW5UaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmVOdW1iZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVsSW5wdXQuc2V0QXR0cmlidXRlKCdpbnB1dG1vZGUnLCAndGVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbElucHV0Lm5hbWUgPSAncGhvbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWxJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbElucHV0LnBsYWNlaG9sZGVyID0gJyszMSA4NzY1IDQzMjEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWxJbnB1dERpdi5hcHBlbmRDaGlsZCh0ZWxJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVsSW5wdXRDb250YWluZXIubGFzdENoaWxkID09PSB0ZWxXYXJuaW5nKSB0ZWxXYXJuaW5nLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbigpIHsgICAgICAgICAgICAgICAvL2FkZCBjaGVjayBmb3Igbm9uIG51bWJlcmljIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZWxJbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVsSW5wdXREaXYubGFzdENoaWxkID09PSBncmVlblRpY2spIGdyZWVuVGljay5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWxJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZWxXYXJuaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB0ZWxJbnB1dERpdi5hcHBlbmRDaGlsZChncmVlblRpY2spOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IG9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogdGVsQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgdGVsZXBob25lOiB0ZWxJbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2l0eU5Qb3N0YWxDb2RlRGl2ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBhZGRyZXNzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtaG91c2VOLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBjb25zdCBjaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2l0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhaW5lcicsICdjaXR5LXppcGNvZGUtY29udGFpbmVyJyk7XHJcbiAgICAgICAgYWRkcmVzc0Rpdi5hcHBlbmRDaGlsZChjaXR5Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci1ncmlkJyk7XHJcbiAgICAgICAgY2l0eUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjaXR5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2l0eUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci13LWxhYmVsJywgJ2JpZ2dlci1kaXYtNzQnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjaXR5SW5wdXRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBjaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnc21hbGxlci1sYWJlbC10ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICBjaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY2l0eU5hbWUnKTtcclxuICAgICAgICAgICAgICAgIGNpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdDaXR5JztcclxuICAgICAgICAgICAgICAgIGNpdHlJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5TGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgTXNnUG9wLnR1cm5TdGFyUmVkQ2xyKGNpdHlMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNpdHlJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHlJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBjaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUlucHV0RGl2KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2l0eUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NpdHlOYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlJbnB1dC5taW5MZW5ndGggPSAnMic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlJbnB1dC5uYW1lID0gJ2NpdHknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXR5SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXR5SW5wdXQucGxhY2Vob2xkZXIgPSAnTW9vcnBhcmsnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXR5SW5wdXREaXYuYXBwZW5kQ2hpbGQoY2l0eUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyZWVuVGljazEgPSBNc2dQb3AuZ3JlZW5UaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3YXJuaW5nMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nMSA9IFZhbGlkYXRpb25DaGVjay5mb3JDaXR5KGNpdHlJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod2FybmluZzEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaXR5SW5wdXRDb250YWluZXIubGFzdENoaWxkID09PSB0ZW1wKSBjaXR5SW5wdXRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlJbnB1dERpdi5hcHBlbmRDaGlsZChncmVlblRpY2sxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNpdHlJbnB1dERpdi5sYXN0Q2hpbGQgPT09IGdyZWVuVGljazEpIGdyZWVuVGljazEucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNpdHlJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQgPT09IHRlbXApIGNpdHlJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcCA9IHdhcm5pbmcxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpdHlJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh3YXJuaW5nMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCB6aXBjb2RlSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgemlwY29kZUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci13LWxhYmVsJywgJ3NtYWxsZXItZGl2LTIwJyk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoemlwY29kZUlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB6aXBjb2RlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgemlwY29kZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3NtYWxsZXItbGFiZWwtdGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgemlwY29kZUxhYmVsLnRleHRDb250ZW50ID0gJ1Bvc3RhbCAvIFppcGNvZGUnO1xyXG4gICAgICAgICAgICAgICAgemlwY29kZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHppcGNvZGVMYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBNc2dQb3AudHVyblN0YXJSZWRDbHIoemlwY29kZUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgemlwY29kZUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgemlwY29kZUlucHV0RGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHppcGNvZGVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh6aXBjb2RlSW5wdXREaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgemlwY29kZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgemlwY29kZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHppcGNvZGVJbnB1dC5uYW1lID0gJ3ppcGNvZGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6aXBjb2RlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6aXBjb2RlSW5wdXQucGxhY2Vob2xkZXIgPSAnOTE3MDYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6aXBjb2RlSW5wdXREaXYuYXBwZW5kQ2hpbGQoemlwY29kZUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyZWVuVGljazIgPSBNc2dQb3AuZ3JlZW5UaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3YXJuaW5nMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgemlwY29kZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZzIgPSBWYWxpZGF0aW9uQ2hlY2suZm9yWmlwY29kZSh6aXBjb2RlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHppcGNvZGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdhcm5pbmcyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoemlwY29kZUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gdGVtcDIpIHppcGNvZGVJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgemlwY29kZUlucHV0RGl2LmFwcGVuZENoaWxkKGdyZWVuVGljazIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoemlwY29kZUlucHV0RGl2Lmxhc3RDaGlsZCA9PT0gZ3JlZW5UaWNrMikgZ3JlZW5UaWNrMi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoemlwY29kZUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gdGVtcDIpIHppcGNvZGVJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcDIgPSB3YXJuaW5nMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6aXBjb2RlSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQod2FybmluZzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBvYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IGNpdHlDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICB6aXBDb2RlOiB6aXBjb2RlSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjaXR5OiBjaXR5SW5wdXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvdW50eU5Db3VudHJ5RGl2ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBhZGRyZXNzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtaG91c2VOLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBjb25zdCBjb3VudHJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY291bnRyeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhaW5lcicsICdjb3VudHktY291bnRyeS1jb250YWluZXInKTtcclxuICAgICAgICBhZGRyZXNzRGl2LmFwcGVuZENoaWxkKGNvdW50cnlDb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyLWdyaWQnKTtcclxuICAgICAgICBjb3VudHJ5Q29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNvdW50eUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci13LWxhYmVsJywgJ2JpZ2dlci1kaXYtNzQnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb3VudHlJbnB1dENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgY291bnR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnc21hbGxlci1sYWJlbC10ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjb3VudHlOYW1lJyk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHlMYWJlbC50ZXh0Q29udGVudCA9ICdTdGF0ZSAvIENvdW50eSAvIFByb3ZpbmNlJztcclxuICAgICAgICAgICAgICAgIGNvdW50eUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvdW50eUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnR5SW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHlJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHlJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChjb3VudHlJbnB1dERpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50eUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY291bnR5TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHlJbnB1dC5taW5MZW5ndGggPSAnMic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50eUlucHV0LnBsYWNlaG9sZGVyID0gJ0NhbGlmb3JuaWEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHlJbnB1dERpdi5hcHBlbmRDaGlsZChjb3VudHlJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBncmVlblRpY2sxID0gTXNnUG9wLmdyZWVuVGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2FybmluZzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nMSA9IFZhbGlkYXRpb25DaGVjay5mb3JDb3VudHkoY291bnR5SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod2FybmluZzEgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnR5SW5wdXRDb250YWluZXIubGFzdENoaWxkID09PSB0ZW1wKSBjb3VudHlJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50eUlucHV0RGl2Lmxhc3RDaGlsZCA9PT0gZ3JlZW5UaWNrMSkgZ3JlZW5UaWNrMS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih3YXJuaW5nMSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50eUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gdGVtcCkgY291bnR5SW5wdXRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50eUlucHV0RGl2LmFwcGVuZENoaWxkKGdyZWVuVGljazEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnR5SW5wdXREaXYubGFzdENoaWxkID09PSBncmVlblRpY2sxKSBncmVlblRpY2sxLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3VudHlJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQgPT09IHRlbXApIGNvdW50eUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wID0gd2FybmluZzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQod2FybmluZzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvdW50cnlJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvdW50cnlJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXItdy1sYWJlbCcsICdzbWFsbGVyLWRpdi0yMCcpO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY291bnRyeUlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGNvdW50cnlMYWJlbC5jbGFzc0xpc3QuYWRkKCdzbWFsbGVyLWxhYmVsLXRleHQnKTtcclxuICAgICAgICAgICAgY291bnR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY291bnRyeU5hbWUnKTtcclxuICAgICAgICAgICAgY291bnRyeUxhYmVsLnRleHRDb250ZW50ID0gJ0NvdW50cnknO1xyXG4gICAgICAgICAgICBjb3VudHJ5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY291bnRyeUxhYmVsKTtcclxuICAgICAgICAgICAgTXNnUG9wLnR1cm5TdGFyUmVkQ2xyKGNvdW50cnlMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5SW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY291bnRyeUlucHV0RGl2KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY291bnRyeU5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5SW5wdXQubmFtZSA9ICdjb3VudHJ5JztcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlJbnB1dC5wbGFjZWhvbGRlciA9ICdVU0EnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlJbnB1dERpdi5hcHBlbmRDaGlsZChjb3VudHJ5SW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncmVlblRpY2syID0gTXNnUG9wLmdyZWVuVGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3YXJuaW5nMjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZzIgPSBWYWxpZGF0aW9uQ2hlY2suYWxsb3dPbmx5TGV0dGVyKGNvdW50cnlJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2FybmluZzIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnlJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQgPT09IHRlbXAyKSBjb3VudHJ5SW5wdXRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeUlucHV0RGl2LmFwcGVuZENoaWxkKGdyZWVuVGljazIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50cnlJbnB1dERpdi5sYXN0Q2hpbGQgPT09IGdyZWVuVGljazIpIGdyZWVuVGljazIucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRyeUlucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gdGVtcDIpIGNvdW50cnlJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wMiA9IHdhcm5pbmcyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdhcm5pbmcyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgb2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBjb3VudHJ5Q29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgY291bnR5Q29kZTogY291bnR5SW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjaXR5OiBjb3VudHJ5SW5wdXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVtYWlsRGl2ID0gKHBhcmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZW1haWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5mby1jb250YWluZXInLCAnZW1haWwtY29udGFpbmVyJyk7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVtYWlsQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbERpdk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbGFiZWxEaXZOYW1lLmNsYXNzTGlzdC5hZGQoJ2xhYmVsLWRpdicpO1xyXG4gICAgICAgICAgICBlbWFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbERpdk5hbWUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxOYW1lLmNsYXNzTGlzdC5hZGQoJ2xhYmVsLXRleHQnKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsTmFtZS50ZXh0Q29udGVudCA9ICdFbWFpbCc7XHJcbiAgICAgICAgICAgICAgICBsYWJlbERpdk5hbWUuYXBwZW5kQ2hpbGQobGFiZWxOYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlci1mbGV4LWNvbHVtbicpO1xyXG4gICAgICAgIGVtYWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZW1haWxJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXItdy1sYWJlbCcpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVtYWlsSW5wdXRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsU2V0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgZW1haWxTZXRMYWJlbC5jbGFzc0xpc3QuYWRkKCdzbWFsbGVyLWxhYmVsLXRleHQnKTtcclxuICAgICAgICAgICAgICAgIGVtYWlsU2V0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnc2V0RW1haWwnKTtcclxuICAgICAgICAgICAgICAgIGVtYWlsU2V0TGFiZWwudGV4dENvbnRlbnQgPSAnRW1haWwnO1xyXG4gICAgICAgICAgICAgICAgZW1haWxJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbFNldExhYmVsKTtcclxuICAgICAgICAgICAgICAgIE1zZ1BvcC50dXJuU3RhclJlZENscihlbWFpbFNldExhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1haWxTZXRJbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsU2V0SW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbFNldElucHV0RGl2KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50ZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJFbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NldEVtYWlsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lucHV0bW9kZScsICdlbWFpbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlckVtYWlsSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlckVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSAnb29naWVib29naWVAeWFob28uY29tJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxTZXRJbnB1dERpdi5hcHBlbmRDaGlsZChlbnRlckVtYWlsSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JlZW5UaWNrMSA9IE1zZ1BvcC5ncmVlblRpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdhcm5pbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJFbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZyA9IFZhbGlkYXRpb25DaGVjay5lbWFpbENoZWNrZXIoZW50ZXJFbWFpbElucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlckVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3YXJuaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWxJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQgPT09IHRlbXApIGVtYWlsSW5wdXRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsU2V0SW5wdXREaXYuYXBwZW5kQ2hpbGQoZ3JlZW5UaWNrMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbWFpbFNldElucHV0RGl2Lmxhc3RDaGlsZCA9PT0gZ3JlZW5UaWNrMSkgZ3JlZW5UaWNrMS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWxJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQgPT09IHRlbXApIGVtYWlsSW5wdXRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAgPSB3YXJuaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQod2FybmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb25maXJtSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY29uZmlybUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lci13LWxhYmVsJyk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29uZmlybUlucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtRW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBjb25maXJtRW1haWxMYWJlbC5jbGFzc0xpc3QuYWRkKCdzbWFsbGVyLWxhYmVsLXRleHQnKTtcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1FbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0NvbmZpcm0gZW1haWwnO1xyXG4gICAgICAgICAgICAgICAgY29uZmlybUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1FbWFpbExhYmVsKTtcclxuICAgICAgICAgICAgICAgIE1zZ1BvcC50dXJuU3RhclJlZENscihjb25maXJtRW1haWxMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsQ29uZmlybUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxDb25maXJtSW5wdXREaXYuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUVtYWlsTGFiZWwuYXBwZW5kQ2hpbGQoZW1haWxDb25maXJtSW5wdXREaXYpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtRW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1FbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1FbWFpbElucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXNlY3VyaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1FbWFpbElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxDb25maXJtSW5wdXREaXYuYXBwZW5kQ2hpbGQoY29uZmlybUVtYWlsSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JlZW5UaWNrMiA9IE1zZ1BvcC5ncmVlblRpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9NYXRjaCA9IE1zZ1BvcC5yZXF1aXJlZE1zZygnVGhlIGVtYWlscyBkbyBub3QgbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1FbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybUVtYWlsSW5wdXQudmFsdWUgPT09IGVudGVyRW1haWxJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtSW5wdXRDb250YWluZXIubGFzdENoaWxkID09PSBub01hdGNoKSBjb25maXJtSW5wdXRDb250YWluZXIubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsQ29uZmlybUlucHV0RGl2LmFwcGVuZENoaWxkKGdyZWVuVGljazIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWxDb25maXJtSW5wdXREaXYubGFzdENoaWxkID09PSBncmVlblRpY2syKSBncmVlblRpY2syLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1JbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChub01hdGNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IG9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogZW1haWxDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICBlbnRlckVtYWlsOiBlbnRlckVtYWlsSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtRW1haWw6IGNvbmZpcm1FbWFpbElucHV0LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXNzd29yZERpdiA9IChwYXJlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwYXNzd29yZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBhc3N3b3JkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZm8tY29udGFpbmVyJywgJ3Bhc3N3b3JkLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChwYXNzd29yZENvbnRhaW5lcik7XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgbGFiZWxEaXZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGxhYmVsRGl2TmFtZS5jbGFzc0xpc3QuYWRkKCdsYWJlbC1kaXYnKTtcclxuICAgICAgICAgICAgcGFzc3dvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxEaXZOYW1lKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGxhYmVsTmFtZS5jbGFzc0xpc3QuYWRkKCdsYWJlbC10ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSAnUGFzc3dvcmQnO1xyXG4gICAgICAgICAgICAgICAgbGFiZWxEaXZOYW1lLmFwcGVuZENoaWxkKGxhYmVsTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXItZmxleC1jb2x1bW4nKTtcclxuICAgICAgICBwYXNzd29yZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyLXctbGFiZWwnLCAnZ3JhbmRwYXJlbnQnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwYXNzd29yZElucHV0Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVQYXNzd29yZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhc3N3b3JkTGFiZWwuY2xhc3NMaXN0LmFkZCgnc21hbGxlci1sYWJlbC10ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQYXNzd29yZExhYmVsLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBwYXNzd29yZCc7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBhc3N3b3JkTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgTXNnUG9wLnR1cm5TdGFyUmVkQ2xyKGNyZWF0ZVBhc3N3b3JkTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVQYXNzd29yZElucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUGFzc3dvcmRJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBhc3N3b3JkSW5wdXREaXYpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcGFzc3dvcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVwYXNzd29yZElucHV0Lm1pbkxlbmd0aCA9ICc4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcGFzc3dvcmRJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXBhc3N3b3JkSW5wdXQucGxhY2Vob2xkZXIgPSAnU2V0IHBhc3N3b3JkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUGFzc3dvcmRJbnB1dERpdi5hcHBlbmRDaGlsZChjcmVhdGVwYXNzd29yZElucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdwYXJlbnQtZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyZW50RGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREaXYuY2xhc3NMaXN0LmFkZCgnY2hpbGQtZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoY2hpbGREaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RBcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJUZXh0ID0gWydBdCBsZWFzdCA4IGNoYXJhY3RlcnMnLCAnQXQgbGVhc3Qgb25lIGxvd2VyY2FzZSBjaGFyYWN0ZXInLCAnQXQgbGVhc3Qgb25lIHVwcGVyY2FzZSBjaGFyYWN0ZXInLCAnQXQgbGVhc3Qgb25lIG51bWJlcicsICdBdCBsZWFzdCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXInLCAnTm8gc3BhY2UgYmV0d2VlbiBjaGFyYWN0ZXJzJ107IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkb3QtZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRvdC1kaXYtdGV4dC0ke2l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZG90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3REaXYuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3REaXYuc2V0QXR0cmlidXRlKCdpZCcsIGBkb3QtZGl2LSR7aX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChkb3REaXYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDMuY2xhc3NMaXN0LmFkZCgnY2hpbGQtaDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMy50ZXh0Q29udGVudCA9IGAke2FyclRleHRbaV19YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkb3QtZGl2LXRleHQtJHtpfWApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZG90LWRpdi0ke2l9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RBcnIucHVzaChvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdhcm5pbmcgPSBNc2dQb3AucmVxdWlyZWRNc2coJ0VtcHR5IGZpZWxkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZXBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRGl2LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcCA9IFZhbGlkYXRpb25DaGVjay5wYXNzd29yZENoZWNrZXIoY3JlYXRlcGFzc3dvcmRJbnB1dCwgb2JqZWN0QXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlcGFzc3dvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVtcCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh3YXJuaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzd29yZElucHV0Q29udGFpbmVyLmxhc3RDaGlsZCA9PT0gd2FybmluZykgcGFzc3dvcmRJbnB1dENvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyLXctbGFiZWwnKTtcclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb25maXJtUGFzc3dvcmRDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZExhYmVsLmNsYXNzTGlzdC5hZGQoJ3NtYWxsZXItbGFiZWwtdGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkTGFiZWwudGV4dENvbnRlbnQgPSAnQ29uZmlybSBwYXNzd29yZCc7XHJcbiAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybVBhc3N3b3JkTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgTXNnUG9wLnR1cm5TdGFyUmVkQ2xyKGNvbmZpcm1QYXNzd29yZExhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybVBhc3N3b3JkSW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRJbnB1dERpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybVBhc3N3b3JkSW5wdXREaXYpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtUGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZElucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXNlY3VyaXR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkSW5wdXQucGxhY2Vob2xkZXIgPSAnQ29uZmlybSBwYXNzd29yZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZElucHV0RGl2LmFwcGVuZENoaWxkKGNvbmZpcm1QYXNzd29yZElucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyZWVuVGljayA9IE1zZ1BvcC5ncmVlblRpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9NYXRjaCA9IE1zZ1BvcC5yZXF1aXJlZE1zZygnVGhlIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybVBhc3N3b3JkSW5wdXQudmFsdWUgPT09IGNyZWF0ZXBhc3N3b3JkSW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybVBhc3N3b3JkQ29udGFpbmVyLmxhc3RDaGlsZCA9PT0gbm9NYXRjaCkgY29uZmlybVBhc3N3b3JkQ29udGFpbmVyLmxhc3RDaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRJbnB1dERpdi5hcHBlbmRDaGlsZChncmVlblRpY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybVBhc3N3b3JkSW5wdXREaXYubGFzdENoaWxkID09PSBncmVlblRpY2spIGdyZWVuVGljay5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobm9NYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgb2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBwYXNzd29yZENvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkOiBjcmVhdGVwYXNzd29yZElucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBjb25maXJtUGFzc3dvcmRJbnB1dC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmFzaWNHVUkgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICd3cmFwcGVyJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3JtVGl0bGVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtLXRpdGxlLWRpdicpO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlRGl2KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgICAgIGZvcm1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm0tdGl0bGUnKTtcclxuICAgICAgICAgICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBBY2NvdW50ISc7XHJcbiAgICAgICAgICAgIGZvcm1UaXRsZURpdi5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgZm9ybS5hdXRvY29tcGxldGUgPSAnb24nO1xyXG4gICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpO1xyXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bGxOYW1lRGl2KGZvcm0pO1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWVEaXYoZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheURpdihmb3JtKTtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NEaXYoZm9ybSk7XHJcbiAgICAgICAgICAgICAgICB0ZWxlcGhvbmVEaXYoZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBlbWFpbERpdihmb3JtKTtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkRGl2KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ0bmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnRuZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ0bi1kaXYnKTtcclxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuZGl2KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWJ0bicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTVUJNSVQnO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bmRpdi5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHsgYmFzaWNHVUkgfVxyXG5cclxufSkoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvbmxvYWQnLCBGb3JtQmFzaWNHdWkuYmFzaWNHVUkoKSk7ICJdLCJuYW1lcyI6WyJ3YXJuaW5nU2lnblZhciIsInJvdW5kV2FybmluZ1ZhciIsImdyZWVuVGlja1ZhciIsImRpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNc2dQb3AiLCJyZXF1aXJlZE1zZyIsInRleHQiLCJ3YXJuaW5nRGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIndhcm5pbmdTaWduIiwic2V0QXR0cmlidXRlIiwiZGF0YSIsImFwcGVuZENoaWxkIiwid2FybmluZ1RleHQiLCJ0ZXh0Q29udGVudCIsInJvdW5kV2FybmluZ1NpZ24iLCJyb3VuZFdhcm5pbmciLCJpbmNvcnJlY3RWYWx1ZSIsInVzZXJuYW1lVGFrZW4iLCJncmVlblRpY2siLCJ0dXJuU3RhclJlZENsciIsInN0YXIiLCJDaGFuZ2VEaXZDbHJzIiwiY2hhbmdlVG9SZWQiLCJkb3QiLCJzdHlsZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhbmdlVG9HcmVlbiIsIlZhbGlkYXRpb25DaGVjayIsImFyciIsImkiLCJvYmplY3QiLCJwdXNoIiwiYWxsb3dMZXR0ZXJBbmREb3QiLCJpbnB1dCIsIm1zZ0FyciIsInZhbHVlIiwidmFsaWRpdHkiLCJ0b29TaG9ydCIsInRlc3QiLCJ1c2VybmFtZUNoZWNrZXIiLCJ1c2VybmFtZSIsImZvckNpdHkiLCJmb3JDb3VudHkiLCJhbGxvd09ubHlMZXR0ZXIiLCJmb3JaaXBjb2RlIiwiZm9ySG91c2VOdW1iZXIiLCJlbWFpbENoZWNrZXIiLCJwYXNzd29yZENoZWNrZXIiLCJvYmplY3RBcnIiLCJGb3JtQmFzaWNHdWkiLCJmdWxsTmFtZURpdiIsInBhcmVudCIsIm5hbWVDb250YWluZXIiLCJsYWJlbERpdk5hbWUiLCJsYWJlbE5hbWUiLCJ3cmFwcGVyIiwiZm5hbWVJbnB1dENvbnRhaW5lciIsImZOYW1lTGFiZWwiLCJmaXJzdE5hbWVJbnB1dERpdiIsImZpcnN0TmFtZUlucHV0IiwibWluTGVuZ3RoIiwibmFtZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJncmVlblRpY2sxIiwid2FybmluZzEiLCJ0ZW1wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVuZGVmaW5lZCIsImxhc3RDaGlsZCIsInJlbW92ZSIsImxuYW1lSW5wdXRDb250YWluZXIiLCJsYXN0TmFtZWxhYmVsIiwibGFzdE5hbWVJbnB1dERpdiIsImxhc3ROYW1lSW5wdXQiLCJncmVlblRpY2syIiwid2FybmluZzIiLCJ0ZW1wMiIsImNvbnRhaW5lciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidXNlcm5hbWVEaXYiLCJ1c2VyTmFtZUNvbnRhaW5lciIsInVzZXJuYW1lSW5wdXRDb250YWluZXIiLCJ1c2VybmFtZUlucHV0RGl2IiwidXNlck5hbWVJbnB1dCIsIndhcm5pbmciLCJiaXJ0aGRheURpdiIsImJpcnRoZGF5Q29udGFpbmVyIiwiYmlydGhkYXlJbnB1dENvbnRhaW5lciIsImRheUlucHV0Q29udGFpbmVyIiwicm91bmRXYXJuaW5nMSIsImRheUlucHV0IiwiZGF5T3B0aW9uIiwiY291bnRlckRheSIsIm1vbnRoSW5wdXRDb250YWluZXIiLCJyb3VuZFdhcm5pbmcyIiwibW9udGhJbnB1dCIsIm1vbnRoT3B0aW9uIiwiY291bnRlck1vbnRoIiwieWVhcklucHV0Q29udGFpbmVyIiwicm91bmRXYXJuaW5nMyIsInllYXJJbnB1dCIsInllYXJPcHRpb24iLCJjb3VudGVyWWVhciIsImFkZHJlc3NEaXYiLCJhZGRyZXNzQ29udGFpbmVyIiwiY291bnR5TkNvdW50cnlEaXYiLCJjaXR5TlBvc3RhbENvZGVEaXYiLCJzdHJlZXRJbnB1dENvbnRhaW5lciIsInN0cmVldE5hbWVMYWJlbCIsInN0cmVldE5hbWVJbnB1dERpdiIsInN0cmVldE5hbWVJbnB1dCIsImhvdXNlTklucHV0Q29udGFpbmVyIiwiaG91c2VOTGFiZWwiLCJob3VzZU5JbnB1dERpdiIsImhvdXNlTklucHV0IiwiYWRkcmVzcyIsInRlbGVwaG9uZURpdiIsInRlbFdhcm5pbmciLCJ0ZWxDb250YWluZXIiLCJ0ZWxJbnB1dENvbnRhaW5lciIsInRlbElucHV0RGl2IiwidGVsSW5wdXQiLCJ0ZWxlcGhvbmUiLCJxdWVyeVNlbGVjdG9yIiwiY2l0eUNvbnRhaW5lciIsImNpdHlJbnB1dENvbnRhaW5lciIsImNpdHlMYWJlbCIsImNpdHlJbnB1dERpdiIsImNpdHlJbnB1dCIsInppcGNvZGVJbnB1dENvbnRhaW5lciIsInppcGNvZGVMYWJlbCIsInppcGNvZGVJbnB1dERpdiIsInppcGNvZGVJbnB1dCIsInppcENvZGUiLCJjaXR5IiwiY291bnRyeUNvbnRhaW5lciIsImNvdW50eUlucHV0Q29udGFpbmVyIiwiY291bnR5TGFiZWwiLCJjb3VudHlJbnB1dERpdiIsImNvdW50eUlucHV0IiwiY291bnRyeUlucHV0Q29udGFpbmVyIiwiY291bnRyeUxhYmVsIiwiY291bnRyeUlucHV0RGl2IiwiY291bnRyeUlucHV0IiwiY291bnR5Q29kZSIsImVtYWlsRGl2IiwiZW1haWxDb250YWluZXIiLCJlbWFpbElucHV0Q29udGFpbmVyIiwiZW1haWxTZXRMYWJlbCIsImVtYWlsU2V0SW5wdXREaXYiLCJlbnRlckVtYWlsSW5wdXQiLCJjb25maXJtSW5wdXRDb250YWluZXIiLCJjb25maXJtRW1haWxMYWJlbCIsImVtYWlsQ29uZmlybUlucHV0RGl2IiwiY29uZmlybUVtYWlsSW5wdXQiLCJub01hdGNoIiwiZW50ZXJFbWFpbCIsImNvbmZpcm1FbWFpbCIsInBhc3N3b3JkRGl2IiwicGFzc3dvcmRDb250YWluZXIiLCJwYXNzd29yZElucHV0Q29udGFpbmVyIiwiY3JlYXRlUGFzc3dvcmRMYWJlbCIsImNyZWF0ZVBhc3N3b3JkSW5wdXREaXYiLCJjcmVhdGVwYXNzd29yZElucHV0IiwicGFyZW50RGl2IiwiY2hpbGREaXYiLCJhcnJUZXh0IiwiZG90RGl2IiwiaDMiLCJjb25maXJtUGFzc3dvcmRDb250YWluZXIiLCJjb25maXJtUGFzc3dvcmRMYWJlbCIsImNvbmZpcm1QYXNzd29yZElucHV0RGl2IiwiY29uZmlybVBhc3N3b3JkSW5wdXQiLCJzZXRQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImJhc2ljR1VJIiwiZm9ybVRpdGxlRGl2IiwiZm9ybVRpdGxlIiwiY29udGVudCIsImZvcm0iLCJhdXRvY29tcGxldGUiLCJzdWJtaXRCdG5kaXYiLCJzdWJtaXRCdG4iLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9