"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Home() {\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    // useEffect only runs on the client, so now we can safely show the UI\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdussamadyisau/dictionary-app/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdussamadyisau/dictionary-app/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdussamadyisau/dictionary-app/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dictionary App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdussamadyisau/dictionary-app/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abdussamadyisau/dictionary-app/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-container flex justify-between mx-[351px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl text-black dark:text-white\",\n                        children: \"Hello\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdussamadyisau/dictionary-app/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: theme,\n                        onChange: (e)=>setTheme(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"dark\",\n                                children: \"Dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abdussamadyisau/dictionary-app/pages/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"light\",\n                                children: \"Light\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abdussamadyisau/dictionary-app/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abdussamadyisau/dictionary-app/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abdussamadyisau/dictionary-app/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNXO0FBQ1M7QUFDSjtBQUc3QixTQUFTSyxPQUFPO0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sRUFBRUssTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR1IscURBQVFBO0lBRWxDLHNFQUFzRTtJQUN0RUcsZ0RBQVNBLENBQUMsSUFBTTtRQUNkRyxXQUFXLElBQUk7SUFDakIsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRCxTQUFTO1FBQ1osT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUdILHFCQUNFOzswQkFDQSw4REFBQ04sa0RBQUlBOztrQ0FDSCw4REFBQ1U7d0JBQUtDLFNBQVE7Ozs7OztrQ0FDZCw4REFBQ0Q7d0JBQUtFLFdBQVU7d0JBQWtCQyxTQUFROzs7Ozs7a0NBQzFDLDhEQUFDSDt3QkFBS0ksTUFBSzt3QkFBV0QsU0FBUTs7Ozs7O2tDQUU5Qiw4REFBQ0U7a0NBQU07Ozs7Ozs7Ozs7OzswQkFJVCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBc0M7Ozs7OztrQ0FDbkQsOERBQUNFO3dCQUFPQyxPQUFPWjt3QkFBT2EsVUFBVUMsQ0FBQUEsSUFBS2IsU0FBU2EsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzswQ0FDMUQsOERBQUNJO2dDQUFPSixPQUFNOzBDQUFPOzs7Ozs7MENBQ3JCLDhEQUFDSTtnQ0FBT0osT0FBTTswQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3Nlbmdlci1hZG1pbi13ZWJhcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKClcblxuICAgIC8vIHVzZUVmZmVjdCBvbmx5IHJ1bnMgb24gdGhlIGNsaWVudCwgc28gbm93IHdlIGNhbiBzYWZlbHkgc2hvdyB0aGUgVUlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0TW91bnRlZCh0cnVlKVxuICAgIH0sIFtdKVxuICBcbiAgICBpZiAoIW1vdW50ZWQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICBcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J1VURi04Jy8+XG4gICAgICA8bWV0YSBodHRwRXF1aXY9J1gtVUEtQ29tcGF0aWJsZScgY29udGVudD0nSUU9ZWRnZScvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XG5cbiAgICAgIDx0aXRsZT5EaWN0aW9uYXJ5IEFwcDwvdGl0bGU+XG4gICAgICBcbiAgICA8L0hlYWQ+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1jb250YWluZXIgZmxleCBqdXN0aWZ5LWJldHdlZW4gbXgtWzM1MXB4XSc+XG4gICAgICA8cCBjbGFzc05hbWU9J3RleHQtM3hsIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlJz5IZWxsbzwvcD5cbiAgICAgIDxzZWxlY3QgdmFsdWU9e3RoZW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRUaGVtZShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0XCI+TGlnaHQ8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuXG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlVGhlbWUiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInRoZW1lIiwic2V0VGhlbWUiLCJtZXRhIiwiY2hhclNldCIsImh0dHBFcXVpdiIsImNvbnRlbnQiLCJuYW1lIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();