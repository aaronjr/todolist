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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0px;\\n    list-style-type: none;\\n}\\n\\nbody{\\n    display: grid;\\n    grid-template-columns: 1fr 6fr;\\n    grid-template-rows: 1fr 6fr;\\n    width: 100vw;\\n    height: 100vh;\\n}\\n /* main structure */\\n.nav{\\n    background-color: rgb(87, 87, 87);\\n    grid-column-start: 1;\\n    grid-column-end: 3;\\n    display: grid;\\n    place-items: center;\\n    \\n}\\n\\n.side{\\n    background-color: rgb(219, 217, 217);\\n}\\n\\n.content{\\n    background-color: rgb(235, 235, 235);\\n    display: flex;\\n    flex-direction: column;\\n    max-width: 100%;\\n    max-height: 100%;\\n    padding: 4rem 3rem;\\n    position: relative;\\n    overflow: scroll;\\n}\\n\\n/* nav */\\n.title{\\n    text-align: center;\\n    align-self: center;\\n    justify-self: center;\\n    font-size: xx-large;\\n    color: rgb(241, 240, 240);\\n}\\n\\n/* sidebar */\\n.list{\\n    font-size: x-large ;\\n}\\n\\n.addProject{\\n    aspect-ratio: 1 / 1;\\n    width: 20%;\\n    border-radius: 50%;\\n    font-size: xx-large;\\n    border: none;\\n}\\n\\n/* sidebar form */\\n\\n.addButton{\\n    width: 50px;\\n    height: 25px;\\n}\\n\\n/* content */\\n\\n.box{\\n    display: grid;\\n    align-items: center;\\n    justify-content: space-around;\\n    border: solid black 1px;\\n    padding: 5px;\\n    margin-bottom: 10px;\\n    background-color: beige;\\n}\\n\\n.list-item{\\n    justify-self: center;\\n}\\n\\n.projectTitle{\\n    font-size: xx-large;\\n    position: absolute;\\n    top:10px;\\n}\\n\\n.task-list{\\n    width: 100%;\\n    display: grid;\\n    align-items: center;\\n    justify-content: space-around;\\n    grid-template-columns: repeat(5, 1fr);\\n    font-size: x-large;\\n    justify-self: center;\\n}\\n\\n.editTaskForm{\\n    display: grid;\\n    justify-content: space-between;\\n    grid-template-columns: 1fr 3fr 1fr 3fr;\\n    grid-template-rows: 1fr 1fr;\\n}\\n.editTaskForm label{\\n    width: min-content;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createElements.js":
/*!*******************************!*\
  !*** ./src/createElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"createEle\": () => (/* binding */ createEle),\n/* harmony export */   \"createFormEle\": () => (/* binding */ createFormEle),\n/* harmony export */   \"loop\": () => (/* binding */ loop),\n/* harmony export */   \"loopForm\": () => (/* binding */ loopForm)\n/* harmony export */ });\n// create element with html tag, class and textContents\nfunction createEle(tag, className = \"\", text = \"\", id = null){\n    let element = document.createElement(tag)\n    element.className = className\n    element.textContent = text\n    // set id if a value is present\n    if(!( id == null )){\n        element.setAttribute(\"id\", id)\n    }\n    return element\n}\n\n// create function to pass in array and where to append\nfunction loop(array, where){\n    for(let counter in array){\n        where.append(\n            createEle(\n                array[counter][0],\n                array[counter][1],\n                array[counter][2],\n                array[counter][3]))\n    }\n}\n\n// create element with html tag, class and textContents\nfunction createFormEle(tag,  name, className = \"\", inner = \"\", value = \"\" , forlabel = \"\", id=\"\"){\n    let element = document.createElement(tag)\n    element.name = name\n    element.className = className\n    element.textContent = inner\n    element.value = value\n    element.id = id\n    if(tag == 'label'){\n        element.for = forlabel\n    }\n\n    return element\n}\n\n// create function to pass in array and where to append\nfunction loopForm(array, where){\n    for(let counter in array){\n        where.append(\n            createFormEle(\n                array[counter][0],\n                array[counter][1],\n                array[counter][2],\n                array[counter][3],\n                array[counter][4],\n                array[counter][5],\n                array[counter][6]\n                ))\n    }\n}\n\nfunction clear(where){\n    // remove each child to avoid duplication from content box\n    while(where.firstChild){\n        where.removeChild(where.lastChild)\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/createElements.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjects\": () => (/* binding */ addProjects),\n/* harmony export */   \"getTasks\": () => (/* binding */ getTasks),\n/* harmony export */   \"loadSidebar\": () => (/* binding */ loadSidebar)\n/* harmony export */ });\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ \"./src/createElements.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ \"./src/forms.js\");\n\n\n\n\n// add projects to content section, list of objects and parent id\nfunction addProjects(objs, projectId){\n\n    // get content\n    const content = document.querySelector('.content')\n\n    // empty content box\n    ;(0,_createElements__WEBPACK_IMPORTED_MODULE_0__.clear)(content)\n\n    // box to hold project info\n    const projectDetailsDiv = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('div', 'projectDetailsDiv', '')\n\n    const tasks = getTasks(projectId)\n    // add project name to page\n    const projectDetails = [\n        ['h1', 'projectTitle', `${tasks.title}`],\n        ['p', 'projectDescription', `${tasks.description}`],\n        ['p', 'projectDueDate', `${tasks.dueDate}`],\n        ['button', 'editProject', 'Edit project']\n    ]\n\n    // add details to div add div to content\n    ;(0,_createElements__WEBPACK_IMPORTED_MODULE_0__.loop)(projectDetails, projectDetailsDiv)\n    content.append(projectDetailsDiv)\n\n    // button to edit this projects details\n    const editProject = document.querySelector('.editProject')\n    editProject.addEventListener('click', () => {\n        ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.editProjectForm)(_index__WEBPACK_IMPORTED_MODULE_1__.manager.list[projectId])\n        editProject.style.display = 'none'\n    })\n    \n    // loop through list of tasks\n    objs.list.forEach( (obj) => {\n\n        // create a \"box\" for each task\n        let box = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)(\"div\", \"box\", \"\", obj.id)\n        let list = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)(\"ul\", `${obj.id}task-list task-list`, obj.title)\n\n        let listitems = [\n            ['li', 'list-item', `Description: ${obj.description}`,''],\n            ['li', 'list-item', `Due: ${obj.dueDate}`,''],\n        ]\n\n        // buttons\n        let edit = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('button', 'editTaskButton', 'Edit task', obj.id)\n        let complete = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('button', 'editCompleteButton', 'complete task', obj.id)\n        \n        edit.addEventListener('click', () => {\n            if(!(document.querySelector('.editTaskForm'))){\n                // load the correct todo list from the projects\n                (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.clear)(box)\n                ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.editTaskForm)(box, projectId, edit.id)\n            }\n        })\n\n        // mark task as complete\n        complete.addEventListener('click', ()=>{\n            ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.completeTask)(projectId, edit.id)\n        })\n\n        // add ul to box element\n        box.append(list)\n\n        // add to body and box div\n        ;(0,_createElements__WEBPACK_IMPORTED_MODULE_0__.loop)(listitems, list)\n        list.append(edit)\n        list.append(complete)\n\n        // add divs to \".content\"\n        content.append(box)\n\n    })\n\n    // add task button\n    let addTask = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('button', 'addTask', 'Add task')\n    addTask.addEventListener('click', () => {\n        if(!(document.querySelector('.addTaskForm'))){\n            (0,_forms__WEBPACK_IMPORTED_MODULE_2__.addTaskForm)(content, projectId)\n            addTask.style.display = 'none'\n        }\n    })\n    // add button to page\n    content.append(addTask)\n}\n\nfunction loadSidebar(){\n\n    // get update list of projects\n    const objs = _index__WEBPACK_IMPORTED_MODULE_1__.manager.checkOutstanding()\n\n    // get content and side\n    const side = document.querySelector('.side')\n\n    // remove each child to avoid duplication from content box\n    ;(0,_createElements__WEBPACK_IMPORTED_MODULE_0__.clear)(side)\n\n    // create a Node list\n    let list = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)(\"ul\", \"list\", \"Projects\")\n\n    // pass over each item and add its title to the sidebar list\n    objs.forEach( (project) => {\n        list.append((0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('li', 'project-item', `${project.title}`, `${project.id}`))\n    })\n\n    // append to list\n    side.append(list)\n\n    // button for sidebar, add event listener and add to page\n    let addProjectButton = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('button', 'addProject', '+')\n    addProjectButton.addEventListener('click', () => {\n        if(!(document.querySelector('.addProjectForm'))){\n            // load the correct todo list from the projects\n            addProjectButton.style.display = \"none\"\n            ;(0,_forms__WEBPACK_IMPORTED_MODULE_2__.addProjectForm)(side)\n        }\n    })\n\n    side.append(addProjectButton)\n\n    // get back items and add event listeners\n    // using event listeners load the todo list of each project\n    const projectTitles = document.querySelectorAll('.project-item')\n    projectTitles.forEach( (item) => {\n        item.addEventListener('click', () => {\n            // pass the id number and the node of where\n            // the content should be loaded \".content\"\n            addProjects(getTasks(item.getAttribute(\"id\")), item.getAttribute(\"id\"))\n        })\n    })\n}\n\n// find the correct project\nfunction getTasks(id){\n    // get the project that needs to be loaded.\n    const thisProject = _index__WEBPACK_IMPORTED_MODULE_1__.manager.list[id]\n    return thisProject\n}\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectForm\": () => (/* binding */ addProjectForm),\n/* harmony export */   \"addTaskForm\": () => (/* binding */ addTaskForm),\n/* harmony export */   \"completeTask\": () => (/* binding */ completeTask),\n/* harmony export */   \"editProjectForm\": () => (/* binding */ editProjectForm),\n/* harmony export */   \"editTaskForm\": () => (/* binding */ editTaskForm)\n/* harmony export */ });\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ \"./src/createElements.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\n\nfunction addProjectForm(side){\n    const form = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('form', 'addProjectForm', '')\n    // list of needed items\n    const formElements = [\n        ['input', 'projectName', 'addProjectDetails',''],\n        //['input', 'description', 'addProjectDetails',''],\n        //['input', 'dueDate', 'addProjectDetails',''],\n        ['button', '', 'addButton','Add'],\n    ]\n\n    // add items to form\n    ;(0,_createElements__WEBPACK_IMPORTED_MODULE_0__.loopForm)(formElements, form)\n\n    // stop form submitting\n    form.addEventListener('submit', (e) =>{\n        e.preventDefault()\n        let projectName = form.projectName.value\n        let description = \"new entry\"\n        let dueDate = \"Now\"\n        const project = new _project__WEBPACK_IMPORTED_MODULE_3__.Project(projectName, description, dueDate)\n        _index__WEBPACK_IMPORTED_MODULE_2__.manager.add(project)\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadSidebar)()\n    })\n\n    // add to correct location\n    side.append(form)\n}\n\nfunction addTaskForm(content, projectId){\n    // create a form\n    const form = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('form', 'addTaskForm', '')\n\n    // list of needed items\n    const formElements = [\n        ['input', 'TaskName', 'addTaskDetails',''],\n        ['button', '', 'addTaskButton','Add'],\n    ]\n\n    // add items to form\n    ;(0,_createElements__WEBPACK_IMPORTED_MODULE_0__.loopForm)(formElements, form)\n    \n    form.addEventListener('submit', (e) =>{\n        // stop form submitting\n        e.preventDefault()\n\n        // get values from form\n        let taskName = form.TaskName.value\n        let description = \"new\"\n        let dueDate = \"?\"\n        const task = new _task__WEBPACK_IMPORTED_MODULE_4__.Task(taskName, description, dueDate)\n\n        // Get this project and add task to it\n        const thisProject = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getTasks)(projectId)\n        thisProject.add(task)\n\n        // pass through object\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjects)(thisProject.checkOutstanding(), projectId)\n    })\n\n    // add to correct location\n    content.append(form)\n}\n\n// takes in project object\nfunction editProjectForm (project) {\n\n    // create a form\n    const form = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('form', 'editProjectForm', '')\n\n    // (tag,  name, className = \"\", inner = \"\", value = \"\" , forlabel = \"\", id=\"\")\n\n    // list of needed items\n    const formElements = [\n        // label and input for name\n        ['label', '', '', 'Title', '', 'ProjectName', ''],\n        ['input', 'ProjectName', 'editTaskDetails','', `${project.title}`, '', 'ProjectName'],\n        // label and input for description\n        ['label', '', '', 'Description', '', 'ProjectDescription', ''],\n        ['input', 'ProjectDescription', 'editProjectDetails','', `${project.description}`, '', 'ProjectDescription'],\n        // label and input for date\n        ['label', '', '', 'Due', '', 'ProjectDue', ''],\n        ['input', 'ProjectDue', 'editProjectDue','', `${project.dueDate}`, '', 'ProjectDue'],\n        // button\n        ['button', '', 'editProjectButton','Confirm changes'],\n    ]\n\n    ;(0,_createElements__WEBPACK_IMPORTED_MODULE_0__.loopForm)(formElements, form)\n\n    let projectDetailsDiv = document.querySelector('.projectDetailsDiv')\n\n    form.addEventListener('submit', (e) => {\n        // prevent submit\n        e.preventDefault()\n\n        // get details from form\n        let newTitle = form.ProjectName.value\n        let newDes = form.ProjectDescription.value\n        let newDate = form.ProjectDue.value\n\n        // get correct project\n        const thisProject = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getTasks)(project.id)\n\n        // update details\n        thisProject.edit('title', newTitle)\n        thisProject.edit('description', newDes)\n        thisProject.edit('dueDate', newDate)\n\n       // pass through each item and where to append\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjects)(thisProject.checkOutstanding(), project.id)\n\n        // reload sidebar incase name was changed\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadSidebar)()\n    })\n    projectDetailsDiv.append(form)\n}\n\n// takes in the div the form should append to and the project and task id\nfunction editTaskForm (thisDiv, project, id) {\n\n    // create a form\n    const form = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('form', 'editTaskForm', '')\n\n    // get correct project\n    const thisProject = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getTasks)(project)\n    const thisTask = thisProject.list[id]\n\n    // list of needed items\n    const formElements = [\n        // label and input for name\n        ['label', '', '', 'Title', '', 'TaskName', ''],\n        ['input', 'TaskName', 'addTaskDetails','', `${thisTask.title}`, '', 'TaskName'],\n        // label and input for description\n        ['label', '', '', 'Description', '', 'TaskDescription', ''],\n        ['input', 'TaskDescription', 'addTaskDetails','', `${thisTask.description}`, '', 'TaskDescription'],\n        // label and input for date\n        ['label', '', '', 'Due', '', 'TaskDue', ''],\n        ['input', 'TaskDue', 'addTaskDue','', `${thisTask.dueDate}`, '', 'TaskDue'],\n        // button\n        ['button', '', 'addTaskButton','Confirm changes'],\n    ]\n    // add elements to form\n    ;(0,_createElements__WEBPACK_IMPORTED_MODULE_0__.loopForm)(formElements, form)\n\n    form.addEventListener('submit', (e) => {\n        // prevent submit\n        e.preventDefault()\n\n        // get details from form\n        let newTitle = form.TaskName.value\n        let newDes = form.TaskDescription.value\n        let newDate = form.TaskDue.value\n\n        // update details\n        thisTask.edit('title', newTitle)\n        thisTask.edit('description', newDes)\n        thisTask.edit('dueDate', newDate)\n\n        \n       // pass through each item and where to append\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjects)((0,_dom__WEBPACK_IMPORTED_MODULE_1__.getTasks)(project), project)\n\n        // reload sidebar incase name was changed\n        ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadSidebar)()\n    })\n\n    // add to correct box\n    thisDiv.append(form)\n}\n\n// takes in project id and task id - not as an object but a string\nfunction completeTask (project, id) {\n\n    // get correct project\n    const thisProject = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getTasks)(project)\n    const thisTask = thisProject.list[id]\n\n    // update task to complete\n    thisTask.edit('outstanding', false)\n\n    // load sidebar\n    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadSidebar)()\n\n    // reload content\n    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjects)(thisProject.checkOutstanding(), project)\n}\n\n\n//# sourceURL=webpack://todolist/./src/forms.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"manager\": () => (/* binding */ manager)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ \"./src/layout.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\nlet proj = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"shop\", \"carry out early morning\", \"tomorrow\");\nlet task = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(\"milk\", \"green\", \"ASAP\");\nlet task1 = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(\"cheese\", \"blue\", \"ASAP\");\n\n// hide one task\ntask.outstanding = false\n\nlet proj2 = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"garden\", \"carry out tonight\", \"tonight\")\nlet task2 = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(\"mow\", \"grass\", \"ASAP\")\nlet task12 = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(\"cut\", \"tree\", \"soon\")\n\n// create holder of projects\nconst manager = new _projectManager__WEBPACK_IMPORTED_MODULE_2__.Manager\n\nproj.add(task)\nproj.add(task1)\n\nproj2.add(task2)\nproj2.add(task12)\n\nmanager.add(proj)\nmanager.add(proj2)\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    ;(0,_layout__WEBPACK_IMPORTED_MODULE_3__.layout)()\n})\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"layout\": () => (/* binding */ layout)\n/* harmony export */ });\n/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ \"./src/createElements.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nconst body = document.querySelector('body')\n\nconst mainStructure = [\n    ['nav','nav',''],\n    ['div','side',''],\n    ['div','content',''],\n]\n\nfunction layout(){\n    // loop through list and add to body\n    ;(0,_createElements__WEBPACK_IMPORTED_MODULE_0__.loop)(mainStructure, body)\n    \n    // add title to page\n    document.querySelector('.nav').append((0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createEle)('h1', 'title', 'Project manager inc.'))\n\n    // load sidebar pass all available objects\n    ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadSidebar)()\n}\n\n\n//# sourceURL=webpack://todolist/./src/layout.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n\n\nclass Project extends _projectManager__WEBPACK_IMPORTED_MODULE_0__.Manager{\n    // set up class\n    constructor(title, description, dueDate){\n\n        super()\n        // set own details as Manager does not\n        this.title = title\n        this.description = description\n        this.dueDate = dueDate\n        this.outstanding = true\n        this.id\n    }\n\n    edit (where, edit) {\n        // change any details except id\n        where === \"id\" ? this.id = this.id : this[where] = edit\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/project.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Manager\": () => (/* binding */ Manager)\n/* harmony export */ });\nclass Manager {\n\n    // create empty list for projects or tasks\n    list = []\n\n    // Add project/tasks to list\n    add(project){\n        // set id of project bassed on how many projects exist\n        project.id = this.list.length\n        this.list.push(project)\n    }\n\n     // Create list of outstanding tasks\n     checkOutstanding(){\n        let outstand = this.list.filter( (item) => item.outstanding == true )\n        return outstand\n    }\n\n    // Create list of completed tasks\n    checkComplete(){\n        let completed = this.list.filter( (item) => item.outstanding == false)\n        return completed\n    }\n\n}\n\n//# sourceURL=webpack://todolist/./src/projectManager.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    // create class items\n    constructor(title, description, dueDate){\n        this.title = title\n        this.description = description\n        this.dueDate = dueDate\n        this.outstanding = true\n        this.id = \"\"\n    }\n\n    edit (where, edit) {\n        // change any details except id\n        where === \"id\" ? this.id = this.id : this[where] = edit\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/task.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;