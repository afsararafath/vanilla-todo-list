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

/***/ "./src/javascript/header.js":
/*!**********************************!*\
  !*** ./src/javascript/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ \"./src/javascript/templates.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/javascript/utils.js\");\n\n\nfunction createHeader() {\n  var headerContainer = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)({\n    id: 'headerContainer'\n  });\n  var textInput = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createTextInput)({\n    placeholder: 'Type here...',\n    id: 'textInput',\n    onkeyup: _utils_js__WEBPACK_IMPORTED_MODULE_1__.addListItemOnEnter\n  });\n  var addButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createButton)({\n    label: 'Add',\n    id: 'addButton',\n    onclick: _utils_js__WEBPACK_IMPORTED_MODULE_1__.addListItem\n  });\n  var toggleAllButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createButton)({\n    label: 'Select/Deselect All',\n    id: 'toggleAllButton',\n    onclick: _utils_js__WEBPACK_IMPORTED_MODULE_1__.toggleAllCheckboxes\n  });\n  var deleteSelectedButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createButton)({\n    label: 'Delete Selected',\n    id: 'deleteSelectedButton',\n    onclick: _utils_js__WEBPACK_IMPORTED_MODULE_1__.deleteSelectedItems\n  });\n  var deleteCompletedButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createButton)({\n    label: 'Delete Completed',\n    id: 'deleteCompletedButton',\n    onclick: _utils_js__WEBPACK_IMPORTED_MODULE_1__.deleteAllItems\n  });\n  var deleteAllButton = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createButton)({\n    label: 'Delete All',\n    id: 'deleteAllButton',\n    onclick: _utils_js__WEBPACK_IMPORTED_MODULE_1__.deleteAllItems\n  });\n  headerContainer.appendChild(textInput);\n  headerContainer.appendChild(addButton);\n  headerContainer.appendChild(toggleAllButton);\n  headerContainer.appendChild(deleteSelectedButton);\n  headerContainer.appendChild(deleteCompletedButton);\n  headerContainer.appendChild(deleteAllButton);\n  return headerContainer;\n}\n\n//# sourceURL=webpack:///./src/javascript/header.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/javascript/header.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ \"./src/javascript/list.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/javascript/utils.js\");\n\n\n\nvar todoListContainer = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTodoListContainer)();\nvar header = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\nvar list = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.createList)();\ntodoListContainer.appendChild(header);\ntodoListContainer.appendChild(list);\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/list.js":
/*!********************************!*\
  !*** ./src/javascript/list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList)\n/* harmony export */ });\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ \"./src/javascript/templates.js\");\n\nfunction createList() {\n  var listItems = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)({\n    id: 'listItems'\n  });\n  return listItems;\n}\n\n//# sourceURL=webpack:///./src/javascript/list.js?");

/***/ }),

/***/ "./src/javascript/listItem.js":
/*!************************************!*\
  !*** ./src/javascript/listItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createListItem\": () => (/* binding */ createListItem)\n/* harmony export */ });\n/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ \"./src/javascript/templates.js\");\n\nfunction createListItem(text) {\n  var listItem = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)({\n    id: 'listItem',\n    className: 'listItem'\n  });\n  var checkbox = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createCheckbox)({\n    id: text\n  });\n  var todoText = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)({\n    id: 'todoText'\n  });\n  todoText.innerHTML = text;\n  listItem.appendChild(checkbox);\n  listItem.appendChild(todoText);\n  return listItem;\n}\n\n//# sourceURL=webpack:///./src/javascript/listItem.js?");

/***/ }),

/***/ "./src/javascript/templates.js":
/*!*************************************!*\
  !*** ./src/javascript/templates.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createButton\": () => (/* binding */ createButton),\n/* harmony export */   \"createCheckbox\": () => (/* binding */ createCheckbox),\n/* harmony export */   \"createDiv\": () => (/* binding */ createDiv),\n/* harmony export */   \"createTextInput\": () => (/* binding */ createTextInput)\n/* harmony export */ });\nfunction createButton(_ref) {\n  var label = _ref.label,\n      id = _ref.id,\n      onclick = _ref.onclick;\n  var button = document.createElement(\"button\");\n  button.innerHTML = label;\n  button.id = id;\n  button.onclick = onclick;\n  return button;\n}\nfunction createTextInput(_ref2) {\n  var placeholder = _ref2.placeholder,\n      id = _ref2.id,\n      onkeyup = _ref2.onkeyup;\n  var textInput = document.createElement(\"input\");\n  textInput.type = \"text\";\n  textInput.id = id;\n  textInput.onkeyup = onkeyup;\n  textInput.placeholder = placeholder;\n  return textInput;\n}\nfunction createDiv(_ref3) {\n  var id = _ref3.id,\n      className = _ref3.className;\n  var div = document.createElement('div');\n  div.className = className;\n  div.id = id;\n  return div;\n}\nfunction createCheckbox(_ref4) {\n  var id = _ref4.id;\n  var checkbox = document.createElement(\"input\");\n  checkbox.id = id;\n  checkbox.type = \"checkbox\";\n  return checkbox;\n}\n\n//# sourceURL=webpack:///./src/javascript/templates.js?");

/***/ }),

/***/ "./src/javascript/utils.js":
/*!*********************************!*\
  !*** ./src/javascript/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addListItem\": () => (/* binding */ addListItem),\n/* harmony export */   \"addListItemOnEnter\": () => (/* binding */ addListItemOnEnter),\n/* harmony export */   \"areAllCheckboxesSelected\": () => (/* binding */ areAllCheckboxesSelected),\n/* harmony export */   \"deleteAllItems\": () => (/* binding */ deleteAllItems),\n/* harmony export */   \"deleteElements\": () => (/* binding */ deleteElements),\n/* harmony export */   \"deleteSelectedItems\": () => (/* binding */ deleteSelectedItems),\n/* harmony export */   \"getAllCheckboxes\": () => (/* binding */ getAllCheckboxes),\n/* harmony export */   \"getAllListItems\": () => (/* binding */ getAllListItems),\n/* harmony export */   \"getAllSelectedListItems\": () => (/* binding */ getAllSelectedListItems),\n/* harmony export */   \"getListItems\": () => (/* binding */ getListItems),\n/* harmony export */   \"getTextInput\": () => (/* binding */ getTextInput),\n/* harmony export */   \"getTodoListContainer\": () => (/* binding */ getTodoListContainer),\n/* harmony export */   \"toggleAllCheckboxes\": () => (/* binding */ toggleAllCheckboxes),\n/* harmony export */   \"updateAllCheckboxes\": () => (/* binding */ updateAllCheckboxes)\n/* harmony export */ });\n/* harmony import */ var _listItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listItem */ \"./src/javascript/listItem.js\");\n\nfunction getTodoListContainer() {\n  return document.getElementById('toDoList');\n}\nfunction getTextInput() {\n  return document.getElementById('textInput');\n}\nfunction getListItems() {\n  return document.getElementById('listItems');\n}\nfunction getAllCheckboxes() {\n  var allCheckboxes = document.querySelectorAll(\"input[type='checkbox']\");\n  return allCheckboxes;\n}\nfunction getAllListItems() {\n  var allListItems = document.querySelectorAll(\".listItem\");\n  return allListItems;\n}\nfunction getAllSelectedListItems() {\n  var allCheckboxes = getAllCheckboxes();\n  var selectedCheckboxes = [];\n\n  for (var i = 0; i < allCheckboxes.length; i++) {\n    if (allCheckboxes[i].checked) {\n      selectedCheckboxes.push(allCheckboxes[i].parentElement);\n    }\n  }\n\n  return selectedCheckboxes;\n}\nfunction areAllCheckboxesSelected() {\n  var allCheckboxes = getAllCheckboxes();\n  var selectedCount = 0;\n\n  for (var i = 0; i < allCheckboxes.length; i++) {\n    if (allCheckboxes[i].checked) {\n      selectedCount = selectedCount + 1;\n    }\n  }\n\n  return selectedCount === allCheckboxes.length;\n}\nfunction updateAllCheckboxes(value) {\n  var allCheckboxes = getAllCheckboxes();\n\n  for (var i = 0; i < allCheckboxes.length; i++) {\n    allCheckboxes[i].checked = value;\n  }\n}\nfunction deleteElements(elements) {\n  elements.forEach(function (element) {\n    return element.remove();\n  });\n}\nfunction addListItem() {\n  var textInput = getTextInput();\n\n  if (textInput.value) {\n    getListItems().appendChild((0,_listItem__WEBPACK_IMPORTED_MODULE_0__.createListItem)(textInput.value));\n    textInput.value = '';\n  }\n}\nfunction toggleAllCheckboxes() {\n  if (areAllCheckboxesSelected()) {\n    updateAllCheckboxes(false);\n  } else {\n    updateAllCheckboxes(true);\n  }\n}\nfunction deleteSelectedItems() {\n  deleteElements(getAllSelectedListItems());\n}\nfunction deleteAllItems() {\n  deleteElements(getAllListItems());\n}\nfunction addListItemOnEnter(event) {\n  if (event.key === 'Enter') {\n    addListItem();\n  }\n}\n\n//# sourceURL=webpack:///./src/javascript/utils.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;