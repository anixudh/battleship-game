/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  font-family: monospace;\\n}\\n.header {\\n  text-align: center;\\n  padding: 10px;\\n  font-size: 40px;\\n}\\n\\n[class*=\\\"grid-\\\"] {\\n  width: 25px;\\n  height: 25px;\\n  border: 1pt solid rgba(0, 0, 0, 0.336);\\n}\\n\\n.gridRow {\\n  display: flex;\\n  gap: 0;\\n}\\n\\n.ship {\\n  background-color: black;\\n}\\n\\n.gameboards {\\n  display: flex;\\n  justify-content: center;\\n  padding-top: 20px;\\n}\\n\\n.name {\\n  text-align: center;\\n  padding: 10px;\\n}\\n\\n.missed {\\n  background-color: red;\\n}\\n\\n.ship-hit {\\n  background-color: green;\\n}\\n\\n.hovered {\\n  background-color: rgba(0, 0, 0, 0.158);\\n}\\n\\n.vertical-button-img {\\n  width: 50px;\\n  height: 50px;\\n  cursor: pointer;\\n}\\n\\n.reset-game-img {\\n  width: 50px;\\n  height: 50px;\\n  cursor: pointer;\\n}\\n\\n.buttons {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  padding: 25px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createBoardDOM.js":
/*!*******************************!*\
  !*** ./src/createBoardDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createBoardDOM = (player, gameboard, gameboardDOM, hidden) => {\n  for (let i = 0; i < 10; i++) {\n    const gridRow = document.createElement(\"div\");\n    gridRow.classList.add(\"gridRow\");\n    for (let j = 0; j < 10; j++) {\n      const grid = document.createElement(\"div\");\n      grid.classList.add(`grid-${i * 10 + j}`);\n      if (player.playerInfo.name == \"cpu\") grid.classList.add(\"cpu\");\n      else grid.classList.add(\"player\");\n      gridRow.appendChild(grid);\n    }\n    gameboardDOM.appendChild(gridRow);\n  }\n  const name = document.createElement(\"div\");\n  name.textContent = `${player.playerInfo.name}`;\n  name.classList.add(\"name\");\n  gameboardDOM.appendChild(name);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoardDOM);\n\n\n//# sourceURL=webpack://battleship-game/./src/createBoardDOM.js?");

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((module) => {

eval("const Gameboard = () => {\n  let boardInfo = {\n    board: [],\n    missed: [],\n  };\n  const initBoard = () => {\n    for (let i = 0; i < 100; i++) {\n      boardInfo.board.push({\n        ship: false,\n        gotHit: false,\n      });\n    }\n  };\n  if (boardInfo.board.length == 0) initBoard();\n\n  const placeShip = (ship, startCoord) => {\n    if (ship.isVertical) {\n      //if (startCoord + (ship.length - 1) * 10 > 100) return;\n\n      for (let i = 0; i < ship.length * 10; i += 10) {\n        boardInfo.board[startCoord + i][\"ship\"] = ship.type;\n      }\n    } else {\n      /*if (\n        startCoord + ship.length - 1 >= Math.ceil(startCoord / 10) * 10 &&\n        startCoord % 10 != 0\n      )\n        return;*/\n      for (let i = 0; i < ship.length; i++) {\n        boardInfo.board[startCoord + i][\"ship\"] = ship.type;\n      }\n    }\n  };\n\n  const receiveAttack = (coord) => {\n    if (boardInfo.board[coord][\"ship\"] && !boardInfo.board[coord][\"gotHit\"]) {\n      boardInfo.board[coord][\"gotHit\"] = true;\n    } else if (boardInfo.board[coord][\"ship\"]) {\n      return;\n    } else {\n      boardInfo.missed.push(coord);\n    }\n  };\n\n  const allShipsSunk = () => {\n    let flag = true;\n    for (let i = 0; i < 100; i++) {\n      if (boardInfo.board[i][\"ship\"] && !boardInfo.board[i][\"gotHit\"])\n        flag = false;\n    }\n    return flag;\n  };\n\n  return { boardInfo, initBoard, placeShip, receiveAttack, allShipsSunk };\n};\n\nmodule.exports = Gameboard;\n\n\n//# sourceURL=webpack://battleship-game/./src/factories/gameboard.js?");

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((module) => {

eval("const player = (name) => {\n  const playerInfo = {\n    name,\n    prevShots: [],\n  };\n\n  const getRandom = () => {\n    return Math.floor(Math.random() * 100);\n  };\n\n  const makeRandomMove = () => {\n    let coord = getRandom();\n    //let timeout = 0;\n    while (playerInfo.prevShots.includes(coord)) {\n      coord = getRandom();\n      //timeout++;\n    }\n    //if (timeout == 1000) return -1;\n    playerInfo.prevShots.push(coord);\n    return coord;\n  };\n\n  return { playerInfo, getRandom, makeRandomMove };\n};\n\nmodule.exports = player;\n\n\n//# sourceURL=webpack://battleship-game/./src/factories/player.js?");

/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((module) => {

eval("const Ship = (type, length, isVertical) => {\n  let hits = [];\n\n  const hit = (position) => {\n    if (hits.includes(position) || position < 0 || position >= length) return;\n    hits.push(position);\n  };\n\n  const isSunk = () => {\n    return hits.length == length;\n  };\n  return { type, length, hits, hit, isSunk, isVertical };\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack://battleship-game/./src/factories/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _newGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newGame.js */ \"./src/newGame.js\");\n/* harmony import */ var _createBoardDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createBoardDOM */ \"./src/createBoardDOM.js\");\n/* harmony import */ var _playGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playGame */ \"./src/playGame.js\");\n/* harmony import */ var _factories_player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factories/player.js */ \"./src/factories/player.js\");\n/* harmony import */ var _factories_player_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_factories_player_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n//import Ship from \"./factories/ship.js\";\n//import Gameboard from \"./factories/gameboard.js\";\n\n\nconst gameboards = (0,_newGame_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nlet playerGameboard = gameboards.playerGameboard;\nlet cpuGameboard = gameboards.cpuGameboard;\n\nconst player = _factories_player_js__WEBPACK_IMPORTED_MODULE_4___default()(\"ani\");\nconst cpu = _factories_player_js__WEBPACK_IMPORTED_MODULE_4___default()(\"cpu\");\nconst playerGameboardDOM = document.querySelector(\".player-gameboard\");\nconst cpuGameboardDOM = document.querySelector(\".cpu-gameboard\");\n\n(0,_createBoardDOM__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(player, playerGameboard, playerGameboardDOM, false);\n(0,_createBoardDOM__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cpu, cpuGameboard, cpuGameboardDOM, true);\n\ngameboards.addListeners();\ngameboards.placeCPUShips();\n(0,_playGame__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player, playerGameboard, cpu, cpuGameboard);\n\nconst resetGame = (e) => {\n  document.querySelector(`.player-gameboard`).textContent = \"\";\n  document.querySelector(`.cpu-gameboard`).textContent = \"\";\n  document.querySelector(`.result`).textContent = \"\";\n  const gameboards = (0,_newGame_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  let playerGameboard = gameboards.playerGameboard;\n  let cpuGameboard = gameboards.cpuGameboard;\n  const playerGameboardDOM = document.querySelector(\".player-gameboard\");\n  const cpuGameboardDOM = document.querySelector(\".cpu-gameboard\");\n\n  (0,_createBoardDOM__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(player, playerGameboard, playerGameboardDOM, false);\n  (0,_createBoardDOM__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cpu, cpuGameboard, cpuGameboardDOM, true);\n\n  gameboards.addListeners();\n  gameboards.placeCPUShips();\n  (0,_playGame__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player, playerGameboard, cpu, cpuGameboard);\n};\ndocument.querySelector(`.reset-game`).addEventListener(\"click\", resetGame);\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/newGame.js":
/*!************************!*\
  !*** ./src/newGame.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factories_ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/ship.js */ \"./src/factories/ship.js\");\n/* harmony import */ var _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_factories_ship_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _factories_gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/gameboard.js */ \"./src/factories/gameboard.js\");\n/* harmony import */ var _factories_gameboard_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factories_gameboard_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst newGame = () => {\n  let playerGameboard = _factories_gameboard_js__WEBPACK_IMPORTED_MODULE_1___default()();\n  let cpuGameboard = _factories_gameboard_js__WEBPACK_IMPORTED_MODULE_1___default()();\n\n  document.querySelector(\".cpu-gameboard\").style.display = \"none\";\n  document.querySelector(\".vertical-button\").style.display = \"block\";\n  let current = {\n    name: \"CR\",\n    length: 5,\n    isVertical: false,\n  };\n\n  const displayShip = (length, coord) => {\n    const hovered = document.querySelectorAll(\".hovered\");\n    for (let i = 0; i < hovered.length; i++)\n      hovered[i].classList.remove(\"hovered\");\n    if (current.isVertical) {\n      if (coord + (length - 1) * 10 > 100) return;\n      for (let i = coord; i < coord + length * 10; i += 10) {\n        let grid = document.querySelector(`.grid-${i}.player`);\n\n        if (grid.classList.contains(\"ship\")) {\n          return;\n        }\n      }\n    } else {\n      if (coord + length - 1 >= Math.ceil(coord / 10) * 10 && coord % 10 != 0)\n        return;\n      for (let i = coord; i < coord + length; i++) {\n        let grid = document.querySelector(`.grid-${i}.player`);\n        if (grid.classList.contains(\"ship\")) {\n          return;\n        }\n      }\n    }\n    if (current.isVertical) {\n      for (let i = coord; i < coord + length * 10; i += 10) {\n        const hoveredGrid = document.querySelector(`.grid-${i}`);\n        hoveredGrid.classList.add(\"hovered\");\n      }\n    } else {\n      if (coord + length - 1 >= Math.ceil(coord / 10) * 10 && coord % 10 != 0)\n        return;\n      for (let i = coord; i < coord + length; i++) {\n        const hoveredGrid = document.querySelector(`.grid-${i}`);\n        hoveredGrid.classList.add(\"hovered\");\n      }\n    }\n  };\n  const hoverShips = (e) => {\n    const coord = Number(e.target.className.substring(5, 7));\n    switch (current.name) {\n      case \"CR\":\n        displayShip(5, coord);\n        break;\n      case \"BS\":\n        displayShip(4, coord);\n        break;\n      case \"CS\":\n        displayShip(3, coord);\n        break;\n      case \"SUB\":\n        displayShip(3, coord);\n        break;\n      case \"DS\":\n        displayShip(2, coord);\n        break;\n    }\n  };\n  const placeShips = (e) => {\n    if (!e.target.classList.contains(\"hovered\")) return;\n    const hovered = document.querySelectorAll(\".hovered\");\n    for (let i = 0; i < hovered.length; i++)\n      hovered[i].classList.remove(\"hovered\");\n\n    const coord = Number(e.target.className.substring(5, 7));\n    switch (current.name) {\n      case \"CR\":\n        let carrier = _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default()(\"CR\", 5, current.isVertical);\n        playerGameboard.placeShip(carrier, coord);\n        //console.log(playerGameboard.boardInfo.board);\n\n        current.name = \"BS\";\n\n        break;\n      case \"BS\":\n        let battleship = _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default()(\"BS\", 4, current.isVertical);\n        playerGameboard.placeShip(battleship, coord);\n\n        current.name = \"CS\";\n\n        break;\n      case \"CS\":\n        let cruiser = _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default()(\"CS\", 3, current.isVertical);\n        playerGameboard.placeShip(cruiser, coord);\n\n        current.name = \"SUB\";\n\n        break;\n      case \"SUB\":\n        let submarine = _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default()(\"SUB\", 3, current.isVertical);\n        playerGameboard.placeShip(submarine, coord);\n\n        current.name = \"DS\";\n\n        break;\n      case \"DS\":\n        let destroyer = _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default()(\"DS\", 2, current.isVertical);\n        playerGameboard.placeShip(destroyer, coord);\n        current.name = \"NA\";\n        break;\n    }\n    current.length--;\n    for (let i = 0; i < 100; i++) {\n      const grid = document.querySelector(`.grid-${i}`);\n      if (playerGameboard.boardInfo.board[i][\"ship\"] != false) {\n        grid.classList.add(\"ship\");\n      }\n    }\n\n    if (current.name == \"NA\") {\n      document.querySelector(\".cpu-gameboard\").style.display = \"block\";\n      document.querySelector(\".vertical-button\").style.display = \"none\";\n    }\n  };\n\n  document.querySelector(\".vertical-button\").addEventListener(\"click\", (e) => {\n    current.isVertical = !current.isVertical;\n  });\n  const addListeners = () => {\n    document.querySelectorAll(\".player\").forEach((grid) => {\n      grid.addEventListener(\"mouseover\", hoverShips);\n      grid.addEventListener(\"click\", placeShips);\n    });\n  };\n\n  const placeCPUShips = () => {\n    let carrier = _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default()(\"CR\", 5, Math.random() < 0.5);\n    let battleship = _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default()(\"BS\", 4, Math.random() < 0.5);\n    let cruiser = _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default()(\"CS\", 3, Math.random() < 0.5);\n    let submarine = _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default()(\"SUB\", 3, Math.random() < 0.5);\n    let destroyer = _factories_ship_js__WEBPACK_IMPORTED_MODULE_0___default()(\"DS\", 2, Math.random() < 0.5);\n\n    const getRandom = () => {\n      return Math.floor(Math.random() * 100);\n    };\n    const isSingle = (ship, coord) => {\n      if (coord + ship.length * 10 > 100) return false;\n      if (\n        coord + ship.length - 1 >= Math.ceil(coord / 10) * 10 &&\n        coord % 10 != 0\n      )\n        return false;\n      if (ship.isVertical) {\n        for (let i = coord; i < coord + ship.length * 10; i++) {\n          let grid = document.querySelector(`.grid-${i}.cpu`);\n          if (grid.classList.contains(\"ship\")) {\n            return false;\n          }\n        }\n      } else {\n        for (let i = coord; i < coord + ship.length; i++) {\n          let grid = document.querySelector(`.grid-${i}.cpu`);\n          if (grid.classList.contains(\"ship\")) {\n            return false;\n          }\n        }\n      }\n      return true;\n    };\n    const getSafeCoord = (ship) => {\n      let coord = getRandom();\n      if (ship.isVertical) {\n        while (coord + ship.length * 10 > 100 && !isSingle(ship, coord))\n          coord = getRandom();\n      } else {\n        while (\n          coord + ship.length - 1 >= Math.ceil(coord / 10) * 10 &&\n          coord % 10 != 0 &&\n          !isSingle(ship, coord)\n        )\n          coord = getRandom();\n      }\n      return coord;\n    };\n\n    let coord = getSafeCoord(carrier);\n    cpuGameboard.placeShip(carrier, coord);\n    coord = getSafeCoord(battleship);\n    cpuGameboard.placeShip(battleship, coord);\n    coord = getSafeCoord(cruiser);\n    cpuGameboard.placeShip(cruiser, coord);\n    coord = getSafeCoord(submarine);\n    cpuGameboard.placeShip(submarine, coord);\n    coord = getSafeCoord(destroyer);\n    cpuGameboard.placeShip(destroyer, coord);\n\n    /*\n    for (let i = 0; i < 100; i++) {\n      const grid = document.querySelector(`.grid-${i}.cpu`);\n      console.log(grid);\n      if (cpuGameboard.boardInfo.board[i][\"ship\"] != false) {\n        grid.classList.add(\"ship\");\n      }\n    }\n    */\n  };\n\n  return { playerGameboard, cpuGameboard, addListeners, placeCPUShips };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGame);\n\n\n//# sourceURL=webpack://battleship-game/./src/newGame.js?");

/***/ }),

/***/ "./src/playGame.js":
/*!*************************!*\
  !*** ./src/playGame.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst playGame = (player, playerGameboard, cpu, cpuGameboard) => {\n  const checkMissed = () => {\n    for (let x of cpuGameboard.boardInfo.missed) {\n      document.querySelector(`.grid-${x}.cpu`).classList.add(\"missed\");\n    }\n    for (let x of playerGameboard.boardInfo.missed) {\n      document.querySelector(`.grid-${x}.player`).classList.add(\"missed\");\n    }\n  };\n  const checkHit = () => {\n    for (let i = 0; i < 100; i++) {\n      if (cpuGameboard.boardInfo.board[i][\"gotHit\"]) {\n        document.querySelector(`.grid-${i}.cpu`).classList.add(\"ship-hit\");\n      }\n      if (playerGameboard.boardInfo.board[i][\"gotHit\"]) {\n        document.querySelector(`.grid-${i}.player`).classList.add(\"ship-hit\");\n      }\n    }\n  };\n  const checkWin = () => {\n    const result = document.querySelector(\".result\");\n    if (cpuGameboard.allShipsSunk())\n      result.textContent = `${player.playerInfo.name} wins!`;\n    else if (playerGameboard.allShipsSunk()) result.textContent = `CPU wins!`;\n  };\n  const cpuPlay = () => {\n    playerGameboard.receiveAttack(cpu.makeRandomMove());\n    checkMissed();\n    checkHit();\n    checkWin();\n  };\n  const attackCpu = (e) => {\n    const coord = Number(e.target.className.substring(5, 7));\n    cpuGameboard.receiveAttack(coord);\n    checkMissed();\n    checkHit();\n    checkWin();\n    cpuPlay();\n  };\n  document.querySelectorAll(\".cpu\").forEach((cpuGrid) => {\n    cpuGrid.addEventListener(\"click\", attackCpu);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playGame);\n\n\n//# sourceURL=webpack://battleship-game/./src/playGame.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;