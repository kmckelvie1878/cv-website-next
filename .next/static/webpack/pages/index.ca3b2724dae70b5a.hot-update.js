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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar data = {\n    labels: [\n        'Thing 1',\n        'Thing 2',\n        'Thing 3',\n        'Thing 4',\n        'Thing 5',\n        'Thing 6'\n    ],\n    datasets: [\n        {\n            label: '# of Votes',\n            data: [\n                10,\n                9,\n                3,\n                5,\n                2,\n                3\n            ],\n            backgroundColor: 'rgba(255, 99, 132, 0.2)',\n            borderColor: 'rgba(255, 99, 132, 1)',\n            borderWidth: 1\n        }, \n    ]\n};\nvar options = {\n    scale: {\n        ticks: {\n            beginAtZero: true\n        }\n    }\n};\nvar SkillMatrix = function() {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"header\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"title\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Radar Chart\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"links\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"btn btn-gh\",\n                            href: \"https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Radar.js\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Github Source\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Radar, {\n                data: data,\n                options: options,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    });\n};\n_c = SkillMatrix;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillMatrix);\nvar _c;\n$RefreshReg$(_c, \"SkillMatrix\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDTjs7QUFFdEMsR0FBSyxDQUFDRyxJQUFJLEdBQUcsQ0FBQztJQUNWQyxNQUFNLEVBQUUsQ0FBQztRQUFBLENBQVM7UUFBRSxDQUFTO1FBQUUsQ0FBUztRQUFFLENBQVM7UUFBRSxDQUFTO1FBQUUsQ0FBUztJQUFBLENBQUM7SUFDMUVDLFFBQVEsRUFBRSxDQUFDO1FBQ1QsQ0FBQztZQUNDQyxLQUFLLEVBQUUsQ0FBWTtZQUNuQkgsSUFBSSxFQUFFLENBQUM7Z0JBQUEsRUFBRTtnQkFBRSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7WUFBQSxDQUFDO1lBQ3pCSSxlQUFlLEVBQUUsQ0FBeUI7WUFDMUNDLFdBQVcsRUFBRSxDQUF1QjtZQUNwQ0MsV0FBVyxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztJQUNmQyxLQUFLLEVBQUUsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUFDQyxXQUFXLEVBQUUsSUFBSTtRQUFDLENBQUM7SUFDOUIsQ0FBQztBQUNILENBQUM7QUFFRCxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRO2tCQUMxQixNQUNGLENBQUM7O2tGQUFJQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBUTs7Ozs7Ozs7eUZBQ3BCQyxDQUFFO3dCQUFDRCxTQUFTLEVBQUMsQ0FBTzs7Ozs7OztrQ0FBQyxDQUFXOzt5RkFDaENELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFPOzs7Ozs7O3VHQUNuQkUsQ0FBQzs0QkFDQUYsU0FBUyxFQUFDLENBQVk7NEJBQ3RCRyxJQUFJLEVBQUMsQ0FBeUY7Ozs7Ozs7c0NBQy9GLENBRUQ7Ozs7O2lGQUdIbEIsa0RBQUs7Z0JBQUNFLElBQUksRUFBRUEsSUFBSTtnQkFBRU8sT0FBTyxFQUFFQSxPQUFPOzs7Ozs7Ozs7OztLQWJqQ0ksV0FBVztBQWlCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC5qcz9iNDY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhciwgUmFkYXIgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5jb25zdCBkYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbJ1RoaW5nIDEnLCAnVGhpbmcgMicsICdUaGluZyAzJywgJ1RoaW5nIDQnLCAnVGhpbmcgNScsICdUaGluZyA2J10sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6ICcjIG9mIFZvdGVzJyxcclxuICAgICAgICBkYXRhOiBbMTAsIDksIDMsIDUsIDIsIDNdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgIHRpY2tzOiB7IGJlZ2luQXRaZXJvOiB0cnVlIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgU2tpbGxNYXRyaXggPSAoKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0aXRsZSc+UmFkYXIgQ2hhcnQ8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZ2gnXHJcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGNoYXJ0anMvcmVhY3QtY2hhcnRqcy0yL2Jsb2IvbWFzdGVyL2V4YW1wbGUvc3JjL2NoYXJ0cy9SYWRhci5qcydcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR2l0aHViIFNvdXJjZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFJhZGFyIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFNraWxsTWF0cml4OyJdLCJuYW1lcyI6WyJCYXIiLCJSYWRhciIsIkJveCIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJzY2FsZSIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJTa2lsbE1hdHJpeCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/skill-matrix.js\n");

/***/ })

});