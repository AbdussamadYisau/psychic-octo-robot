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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Home() {\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    // useEffect only runs on the client, so now we can safely show the UI\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setMounted(true);\n    }, []);\n    if (!mounted) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdussamadyisau/psychic-octo-robot/dictionary-app/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"IE=edge\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdussamadyisau/psychic-octo-robot/dictionary-app/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdussamadyisau/psychic-octo-robot/dictionary-app/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dictionary App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdussamadyisau/psychic-octo-robot/dictionary-app/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abdussamadyisau/psychic-octo-robot/dictionary-app/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main-container flex justify-between mx-[351px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl text-black dark:text-white\",\n                        children: \"Hello\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abdussamadyisau/psychic-octo-robot/dictionary-app/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: theme,\n                        onChange: (e)=>setTheme(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"dark\",\n                                children: \"Dark\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abdussamadyisau/psychic-octo-robot/dictionary-app/pages/index.js\",\n                                lineNumber: 35,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"light\",\n                                children: \"Light\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abdussamadyisau/psychic-octo-robot/dictionary-app/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abdussamadyisau/psychic-octo-robot/dictionary-app/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abdussamadyisau/psychic-octo-robot/dictionary-app/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNXO0FBQ1M7QUFDSjtBQUc3QixTQUFTSyxPQUFPO0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sRUFBRUssTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR1IscURBQVFBO0lBRWxDLHNFQUFzRTtJQUN0RUcsZ0RBQVNBLENBQUMsSUFBTTtRQUNkRyxXQUFXLElBQUk7SUFDakIsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRCxTQUFTO1FBQ1osT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUdILHFCQUNFOzswQkFDQSw4REFBQ04sa0RBQUlBOztrQ0FDSCw4REFBQ1U7d0JBQUtDLFNBQVE7Ozs7OztrQ0FDZCw4REFBQ0Q7d0JBQUtFLFdBQVU7d0JBQWtCQyxTQUFROzs7Ozs7a0NBQzFDLDhEQUFDSDt3QkFBS0ksTUFBSzt3QkFBV0QsU0FBUTs7Ozs7O2tDQUU5Qiw4REFBQ0U7a0NBQU07Ozs7Ozs7Ozs7OzswQkFJVCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBc0M7Ozs7OztrQ0FDbkQsOERBQUNFO3dCQUFPQyxPQUFPWjt3QkFBT2EsVUFBVUMsQ0FBQUEsSUFBS2IsU0FBU2EsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzswQ0FDMUQsOERBQUNJO2dDQUFPSixPQUFNOzBDQUFPOzs7Ozs7MENBQ3JCLDhEQUFDSTtnQ0FBT0osT0FBTTswQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpY3Rpb25hcnktYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpXG5cbiAgICAvLyB1c2VFZmZlY3Qgb25seSBydW5zIG9uIHRoZSBjbGllbnQsIHNvIG5vdyB3ZSBjYW4gc2FmZWx5IHNob3cgdGhlIFVJXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldE1vdW50ZWQodHJ1ZSlcbiAgICB9LCBbXSlcbiAgXG4gICAgaWYgKCFtb3VudGVkKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgXG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBjaGFyU2V0PSdVVEYtOCcvPlxuICAgICAgPG1ldGEgaHR0cEVxdWl2PSdYLVVBLUNvbXBhdGlibGUnIGNvbnRlbnQ9J0lFPWVkZ2UnLz5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyAvPlxuXG4gICAgICA8dGl0bGU+RGljdGlvbmFyeSBBcHA8L3RpdGxlPlxuICAgICAgXG4gICAgPC9IZWFkPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9J21haW4tY29udGFpbmVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIG14LVszNTFweF0nPlxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LTN4bCB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSc+SGVsbG88L3A+XG4gICAgICA8c2VsZWN0IHZhbHVlPXt0aGVtZX0gb25DaGFuZ2U9e2UgPT4gc2V0VGhlbWUoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcmtcIj5EYXJrPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cblxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVRoZW1lIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ0aGVtZSIsInNldFRoZW1lIiwibWV0YSIsImNoYXJTZXQiLCJodHRwRXF1aXYiLCJjb250ZW50IiwibmFtZSIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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