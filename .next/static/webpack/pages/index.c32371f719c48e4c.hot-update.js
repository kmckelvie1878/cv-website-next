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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar radarData = {\n    type: 'radar',\n    data: {\n        labels: [\n            [\n                'Eating',\n                'Dinner'\n            ],\n            [\n                'Drinking',\n                'Water'\n            ],\n            'Sleeping',\n            [\n                'Designing',\n                'Graphics'\n            ],\n            'Coding',\n            'Cycling',\n            'Running'\n        ],\n        datasets: [\n            {\n                label: 'My dataset',\n                // backgroundColor: color(red).alpha(0.2).rgbString(),\n                // borderColor: red,\n                // pointBackgroundColor: red,\n                data: [\n                    80,\n                    90,\n                    60,\n                    65,\n                    78,\n                    97,\n                    55\n                ]\n            }\n        ]\n    },\n    options: {\n        scales: {\n            r: {\n                grid: {\n                    circular: true\n                },\n                beginAtZero: true\n            }\n        }\n    }\n};\nvar RadarChart = function() {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        px: 24,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n            lineNumber: 41,\n            columnNumber: 1\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Radar, {\n            data: radarData,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                lineNumber: 42,\n                columnNumber: 5\n            },\n            __self: _this\n        })\n    });\n};\n_c = RadarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RadarChart);\nvar _c;\n$RefreshReg$(_c, \"RadarChart\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ047O0FBR3RDLEdBQUssQ0FBQ0csU0FBUyxHQUFHLENBQUM7SUFFWEMsSUFBSSxFQUFFLENBQU87SUFDYkMsSUFBSSxFQUFFLENBQUM7UUFDTEMsTUFBTSxFQUFFLENBQUM7WUFBQSxDQUFDO2dCQUFBLENBQVE7Z0JBQUUsQ0FBUTtZQUFBLENBQUM7WUFBRSxDQUFDO2dCQUFBLENBQVU7Z0JBQUUsQ0FBTztZQUFBLENBQUM7WUFBRSxDQUFVO1lBQUUsQ0FBQztnQkFBQSxDQUFXO2dCQUFFLENBQVU7WUFBQSxDQUFDO1lBQUUsQ0FBUTtZQUFFLENBQVM7WUFBRSxDQUFTO1FBQUEsQ0FBQztRQUM1SEMsUUFBUSxFQUFFLENBQUM7WUFBQSxDQUFDO2dCQUNWQyxLQUFLLEVBQUUsQ0FBWTtnQkFDbkIsRUFBc0Q7Z0JBQ3RELEVBQW9CO2dCQUNwQixFQUE2QjtnQkFDN0JILElBQUksRUFBRSxDQUFDO29CQUNMLEVBQUU7b0JBQ0YsRUFBRTtvQkFDRixFQUFFO29CQUNGLEVBQUU7b0JBQ0YsRUFBRTtvQkFDRixFQUFFO29CQUNGLEVBQUU7Z0JBQ0osQ0FBQztZQUNILENBQUM7UUFBQSxDQUFDO0lBQ0osQ0FBQztJQUNESSxPQUFPLEVBQUUsQ0FBQztRQUNSQyxNQUFNLEVBQUUsQ0FBQztZQUNMQyxDQUFDLEVBQUUsQ0FBQztnQkFDRkMsSUFBSSxFQUFFLENBQUM7b0JBQ0pDLFFBQVEsRUFBRSxJQUFJO2dCQUNqQixDQUFDO2dCQUNEQyxXQUFXLEVBQUUsSUFBSTtZQUNuQixDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBSVAsR0FBSyxDQUFDQyxVQUFVLEdBQUcsUUFBUTtrQkFDM0IsTUFBTSx3REFBTGIsaURBQUc7UUFBQ2MsRUFBRSxFQUFFLEVBQUU7Ozs7Ozs7dUZBQ05mLGtEQUFLO1lBQUNJLElBQUksRUFBRUYsU0FBUzs7Ozs7Ozs7OztLQUZwQlksVUFBVTtBQU1oQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2tpbGwtbWF0cml4LmpzP2I0NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFyLCBSYWRhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcblxyXG5jb25zdCByYWRhckRhdGEgPSB7XHJcbiAgICBcclxuICAgICAgICB0eXBlOiAncmFkYXInLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGxhYmVsczogW1snRWF0aW5nJywgJ0Rpbm5lciddLCBbJ0RyaW5raW5nJywgJ1dhdGVyJ10sICdTbGVlcGluZycsIFsnRGVzaWduaW5nJywgJ0dyYXBoaWNzJ10sICdDb2RpbmcnLCAnQ3ljbGluZycsICdSdW5uaW5nJ10sXHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdNeSBkYXRhc2V0JyxcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiBjb2xvcihyZWQpLmFscGhhKDAuMikucmdiU3RyaW5nKCksXHJcbiAgICAgICAgICAgIC8vIGJvcmRlckNvbG9yOiByZWQsXHJcbiAgICAgICAgICAgIC8vIHBvaW50QmFja2dyb3VuZENvbG9yOiByZWQsXHJcbiAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICA4MCxcclxuICAgICAgICAgICAgICA5MCxcclxuICAgICAgICAgICAgICA2MCxcclxuICAgICAgICAgICAgICA2NSxcclxuICAgICAgICAgICAgICA3OCxcclxuICAgICAgICAgICAgICA5NyxcclxuICAgICAgICAgICAgICA1NVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgc2NhbGVzOiB7IC8vIDwtLSBOb3RlIGNoYW5nZSBpbiBvcHRpb25zIGZyb20gc2NhbGUgdG8gc2NhbGVzXHJcbiAgICAgICAgICAgICAgcjoge1xyXG4gICAgICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuY29uc3QgUmFkYXJDaGFydCA9ICgpID0+IChcclxuPEJveCBweD17MjR9PlxyXG4gICAgPFJhZGFyIGRhdGE9e3JhZGFyRGF0YX0gLz5cclxuPC9Cb3g+XHJcbik7XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IFJhZGFyQ2hhcnQ7Il0sIm5hbWVzIjpbIkJhciIsIlJhZGFyIiwiQm94IiwicmFkYXJEYXRhIiwidHlwZSIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwib3B0aW9ucyIsInNjYWxlcyIsInIiLCJncmlkIiwiY2lyY3VsYXIiLCJiZWdpbkF0WmVybyIsIlJhZGFyQ2hhcnQiLCJweCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/skill-matrix.js\n");

/***/ })

});