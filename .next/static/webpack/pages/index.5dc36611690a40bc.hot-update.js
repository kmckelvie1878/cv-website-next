"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/skill-matrix.js":
/*!************************************!*\
  !*** ./components/skill-matrix.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar data = {\n    labels: [\n        'Thing 1',\n        'Thing 2',\n        'Thing 3',\n        'Thing 4',\n        'Thing 5',\n        'Thing 6'\n    ],\n    datasets: [\n        {\n            label: '# of Votes',\n            data: [\n                2,\n                9,\n                3,\n                5,\n                2,\n                3\n            ],\n            backgroundColor: 'rgba(255, 99, 132, 0.2)',\n            borderColor: 'rgba(255, 99, 132, 1)',\n            borderWidth: 1\n        }, \n    ]\n};\nvar options = {\n    scale: {\n        ticks: {\n            beginAtZero: true\n        }\n    }\n};\nvar RadarChart = function() {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"header\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"title\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Radar Chart\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"links\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"btn btn-gh\",\n                            href: \"https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Radar.js\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Github Source\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Radar, {\n                data: data,\n                options: options,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    });\n};\n_c = RadarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RadarChart);\nvar _c;\n$RefreshReg$(_c, \"RadarChart\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDTjs7QUFFdEMsR0FBSyxDQUFDRyxJQUFJLEdBQUcsQ0FBQztJQUNWQyxNQUFNLEVBQUUsQ0FBQztRQUFBLENBQVM7UUFBRSxDQUFTO1FBQUUsQ0FBUztRQUFFLENBQVM7UUFBRSxDQUFTO1FBQUUsQ0FBUztJQUFBLENBQUM7SUFDMUVDLFFBQVEsRUFBRSxDQUFDO1FBQ1QsQ0FBQztZQUNDQyxLQUFLLEVBQUUsQ0FBWTtZQUNuQkgsSUFBSSxFQUFFLENBQUM7Z0JBQUEsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7WUFBQSxDQUFDO1lBQ3hCSSxlQUFlLEVBQUUsQ0FBeUI7WUFDMUNDLFdBQVcsRUFBRSxDQUF1QjtZQUNwQ0MsV0FBVyxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNmQyxLQUFLLEVBQUUsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUFDQyxXQUFXLEVBQUUsSUFBSTtRQUFDLENBQUM7SUFDOUIsQ0FBQztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNDLFVBQVUsR0FBRyxRQUFRO2tCQUN6QixNQUNGLENBQUM7O2tGQUFJQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBUTs7Ozs7Ozs7eUZBQ3BCQyxDQUFFO3dCQUFDRCxTQUFTLEVBQUMsQ0FBTzs7Ozs7OztrQ0FBQyxDQUFXOzt5RkFDaENELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFPOzs7Ozs7O3VHQUNuQkUsQ0FBQzs0QkFDQUYsU0FBUyxFQUFDLENBQVk7NEJBQ3RCRyxJQUFJLEVBQUMsQ0FBeUY7Ozs7Ozs7c0NBQy9GLENBRUQ7Ozs7O2lGQUdIbEIsa0RBQUs7Z0JBQUNFLElBQUksRUFBRUEsSUFBSTtnQkFBRU8sT0FBTyxFQUFFQSxPQUFPOzs7Ozs7Ozs7OztLQWJqQ0ksVUFBVTtBQWlCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC5qcz9iNDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhciwgUmFkYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbJ1RoaW5nIDEnLCAnVGhpbmcgMicsICdUaGluZyAzJywgJ1RoaW5nIDQnLCAnVGhpbmcgNScsICdUaGluZyA2J10sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICcjIG9mIFZvdGVzJyxcclxuICAgICAgICBkYXRhOiBbMiwgOSwgMywgNSwgMiwgM10sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICBcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgc2NhbGU6IHtcclxuICAgICAgdGlja3M6IHsgYmVnaW5BdFplcm86IHRydWUgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBcclxuICBjb25zdCBSYWRhckNoYXJ0ID0gKCkgPT4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPlJhZGFyIENoYXJ0PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWdoJ1xyXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vcmVhY3RjaGFydGpzL3JlYWN0LWNoYXJ0anMtMi9ibG9iL21hc3Rlci9leGFtcGxlL3NyYy9jaGFydHMvUmFkYXIuanMnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdpdGh1YiBTb3VyY2VcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxSYWRhciBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBSYWRhckNoYXJ0OyJdLCJuYW1lcyI6WyJCYXIiLCJSYWRhciIsIkJveCIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJzY2FsZSIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJSYWRhckNoYXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/skill-matrix.js\n");

/***/ })

});