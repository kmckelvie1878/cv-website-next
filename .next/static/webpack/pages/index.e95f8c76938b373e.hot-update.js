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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar data = {\n    labels: [\n        'Thing 1',\n        'Thing 2',\n        'Thing 3',\n        'Thing 4',\n        'Thing 5',\n        'Thing 6'\n    ],\n    datasets: [\n        {\n            label: 'This Year',\n            data: [\n                10,\n                9,\n                3,\n                5,\n                9,\n                3\n            ],\n            backgroundColor: '#2ce38820',\n            borderColor: '#2ce388',\n            borderWidth: 1\n        },\n        {\n            label: 'Last Year',\n            data: [\n                1,\n                9,\n                3,\n                5,\n                9,\n                3\n            ],\n            backgroundColor: '#0092ff20',\n            borderColor: '#0092ff',\n            borderWidth: 1\n        }, \n    ]\n};\nvar options = {\n    scale: {\n        ticks: {\n            beginAtZero: false\n        }\n    }\n};\nvar SkillMatrix = function() {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"header\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"title\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Radar Chart\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"links\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"btn btn-gh\",\n                            href: \"https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Radar.js\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Github Source\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Radar, {\n                data: data,\n                options: options,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    });\n};\n_c = SkillMatrix;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillMatrix);\nvar _c;\n$RefreshReg$(_c, \"SkillMatrix\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDTjs7QUFFdEMsR0FBSyxDQUFDRyxJQUFJLEdBQUcsQ0FBQztJQUNWQyxNQUFNLEVBQUUsQ0FBQztRQUFBLENBQVM7UUFBRSxDQUFTO1FBQUUsQ0FBUztRQUFFLENBQVM7UUFBRSxDQUFTO1FBQUUsQ0FBUztJQUFBLENBQUM7SUFDMUVDLFFBQVEsRUFBRSxDQUFDO1FBQ1QsQ0FBQztZQUNDQyxLQUFLLEVBQUUsQ0FBVztZQUNsQkgsSUFBSSxFQUFFLENBQUM7Z0JBQUEsRUFBRTtnQkFBRSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7WUFBQSxDQUFDO1lBQ3pCSSxlQUFlLEVBQUUsQ0FBVztZQUM1QkMsV0FBVyxFQUFFLENBQVM7WUFDdEJDLFdBQVcsRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxDQUFDO1lBQ0NILEtBQUssRUFBRSxDQUFXO1lBQ2xCSCxJQUFJLEVBQUUsQ0FBQztnQkFBQSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztZQUFBLENBQUM7WUFDeEJJLGVBQWUsRUFBRSxDQUFXO1lBQzVCQyxXQUFXLEVBQUUsQ0FBUztZQUN0QkMsV0FBVyxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNmQyxLQUFLLEVBQUUsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUFDQyxXQUFXLEVBQUUsS0FBSztRQUFDLENBQUM7SUFDL0IsQ0FBQztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRO2tCQUMxQixNQUNGLENBQUM7O2tGQUFJQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBUTs7Ozs7Ozs7eUZBQ3BCQyxDQUFFO3dCQUFDRCxTQUFTLEVBQUMsQ0FBTzs7Ozs7OztrQ0FBQyxDQUFXOzt5RkFDaENELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFPOzs7Ozs7O3VHQUNuQkUsQ0FBQzs0QkFDQUYsU0FBUyxFQUFDLENBQVk7NEJBQ3RCRyxJQUFJLEVBQUMsQ0FBeUY7Ozs7Ozs7c0NBQy9GLENBRUQ7Ozs7O2lGQUdIbEIsa0RBQUs7Z0JBQUNFLElBQUksRUFBRUEsSUFBSTtnQkFBRU8sT0FBTyxFQUFFQSxPQUFPOzs7Ozs7Ozs7OztLQWJqQ0ksV0FBVztBQWlCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC5qcz9iNDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhciwgUmFkYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbJ1RoaW5nIDEnLCAnVGhpbmcgMicsICdUaGluZyAzJywgJ1RoaW5nIDQnLCAnVGhpbmcgNScsICdUaGluZyA2J10sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdUaGlzIFllYXInLFxyXG4gICAgICAgIGRhdGE6IFsxMCwgOSwgMywgNSwgOSwgM10sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzJjZTM4ODIwJyxcclxuICAgICAgICBib3JkZXJDb2xvcjogJyMyY2UzODgnLFxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICdMYXN0IFllYXInLFxyXG4gICAgICAgIGRhdGE6IFsxLCA5LCAzLCA1LCA5LCAzXSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDA5MmZmMjAnLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAnIzAwOTJmZicsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzY2FsZToge1xyXG4gICAgICB0aWNrczogeyBiZWdpbkF0WmVybzogZmFsc2UgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBcclxuICBjb25zdCBTa2lsbE1hdHJpeCA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RpdGxlJz5SYWRhciBDaGFydDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmtzJz5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGJ0bi1naCdcclxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3JlYWN0Y2hhcnRqcy9yZWFjdC1jaGFydGpzLTIvYmxvYi9tYXN0ZXIvZXhhbXBsZS9zcmMvY2hhcnRzL1JhZGFyLmpzJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHaXRodWIgU291cmNlXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UmFkYXIgZGF0YT17ZGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2tpbGxNYXRyaXg7Il0sIm5hbWVzIjpbIkJhciIsIlJhZGFyIiwiQm94IiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwib3B0aW9ucyIsInNjYWxlIiwidGlja3MiLCJiZWdpbkF0WmVybyIsIlNraWxsTWF0cml4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/skill-matrix.js\n");

/***/ })

});