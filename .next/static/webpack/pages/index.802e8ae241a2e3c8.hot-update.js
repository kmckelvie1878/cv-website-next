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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar data = {\n    labels: [\n        'Thing 1',\n        'Thing 2',\n        'Thing 3',\n        'Thing 4',\n        'Thing 5',\n        'Thing 6'\n    ],\n    datasets: [\n        {\n            label: 'This Year',\n            data: [\n                10,\n                9,\n                3,\n                5,\n                9,\n                3\n            ],\n            backgroundColor: 'rgba(255, 99, 132, 0.2)',\n            borderColor: 'rgba(255, 99, 132, 1)',\n            borderWidth: 1\n        },\n        {\n            label: 'Last Year',\n            data: [\n                1,\n                9,\n                3,\n                5,\n                9,\n                3\n            ],\n            backgroundColor: 'rgba(255, 99, 132, 0.2)',\n            borderColor: 'rgba(255, 99, 132, 1)',\n            borderWidth: 1\n        }, \n    ]\n};\nvar options = {\n    scale: {\n        ticks: {\n            beginAtZero: false\n        }\n    }\n};\nvar SkillMatrix = function() {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"header\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"title\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Radar Chart\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"links\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"btn btn-gh\",\n                            href: \"https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Radar.js\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Github Source\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Radar, {\n                data: data,\n                options: options,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    });\n};\n_c = SkillMatrix;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillMatrix);\nvar _c;\n$RefreshReg$(_c, \"SkillMatrix\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDTjs7QUFFdEMsR0FBSyxDQUFDRyxJQUFJLEdBQUcsQ0FBQztJQUNWQyxNQUFNLEVBQUUsQ0FBQztRQUFBLENBQVM7UUFBRSxDQUFTO1FBQUUsQ0FBUztRQUFFLENBQVM7UUFBRSxDQUFTO1FBQUUsQ0FBUztJQUFBLENBQUM7SUFDMUVDLFFBQVEsRUFBRSxDQUFDO1FBQ1QsQ0FBQztZQUNDQyxLQUFLLEVBQUUsQ0FBVztZQUNsQkgsSUFBSSxFQUFFLENBQUM7Z0JBQUEsRUFBRTtnQkFBRSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7WUFBQSxDQUFDO1lBQ3pCSSxlQUFlLEVBQUUsQ0FBeUI7WUFDMUNDLFdBQVcsRUFBRSxDQUF1QjtZQUNwQ0MsV0FBVyxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUNELENBQUM7WUFDQ0gsS0FBSyxFQUFFLENBQVc7WUFDbEJILElBQUksRUFBRSxDQUFDO2dCQUFBLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO1lBQUEsQ0FBQztZQUN4QkksZUFBZSxFQUFFLENBQXlCO1lBQzFDQyxXQUFXLEVBQUUsQ0FBdUI7WUFDcENDLFdBQVcsRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDZkMsS0FBSyxFQUFFLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFBQ0MsV0FBVyxFQUFFLEtBQUs7UUFBQyxDQUFDO0lBQy9CLENBQUM7QUFDSCxDQUFDO0FBRUQsR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFBUTtrQkFDMUIsTUFDRixDQUFDOztrRkFBSUMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVE7Ozs7Ozs7O3lGQUNwQkMsQ0FBRTt3QkFBQ0QsU0FBUyxFQUFDLENBQU87Ozs7Ozs7a0NBQUMsQ0FBVzs7eUZBQ2hDRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozt1R0FDbkJFLENBQUM7NEJBQ0FGLFNBQVMsRUFBQyxDQUFZOzRCQUN0QkcsSUFBSSxFQUFDLENBQXlGOzs7Ozs7O3NDQUMvRixDQUVEOzs7OztpRkFHSGxCLGtEQUFLO2dCQUFDRSxJQUFJLEVBQUVBLElBQUk7Z0JBQUVPLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Ozs7Ozs7S0FiakNJLFdBQVc7QUFpQmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9za2lsbC1tYXRyaXguanM/YjQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXIsIFJhZGFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogWydUaGluZyAxJywgJ1RoaW5nIDInLCAnVGhpbmcgMycsICdUaGluZyA0JywgJ1RoaW5nIDUnLCAnVGhpbmcgNiddLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnVGhpcyBZZWFyJyxcclxuICAgICAgICBkYXRhOiBbMTAsIDksIDMsIDUsIDksIDNdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ0xhc3QgWWVhcicsXHJcbiAgICAgICAgZGF0YTogWzEsIDksIDMsIDUsIDksIDNdLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHNjYWxlOiB7XHJcbiAgICAgIHRpY2tzOiB7IGJlZ2luQXRaZXJvOiBmYWxzZSB9LFxyXG4gICAgfSxcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IFNraWxsTWF0cml4ID0gKCkgPT4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGl0bGUnPlJhZGFyIENoYXJ0PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWdoJ1xyXG4gICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vcmVhY3RjaGFydGpzL3JlYWN0LWNoYXJ0anMtMi9ibG9iL21hc3Rlci9leGFtcGxlL3NyYy9jaGFydHMvUmFkYXIuanMnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdpdGh1YiBTb3VyY2VcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxSYWRhciBkYXRhPXtkYXRhfSBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBTa2lsbE1hdHJpeDsiXSwibmFtZXMiOlsiQmFyIiwiUmFkYXIiLCJCb3giLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJvcHRpb25zIiwic2NhbGUiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwiU2tpbGxNYXRyaXgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/skill-matrix.js\n");

/***/ })

});