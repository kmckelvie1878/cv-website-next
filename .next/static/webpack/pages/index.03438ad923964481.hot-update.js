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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar data = {\n    labels: [\n        'UI / UX Design',\n        'Front End Development',\n        'Back End & Integration',\n        'SEO',\n        'Audio',\n        'Video'\n    ],\n    datasets: [\n        {\n            label: '# of Votes',\n            data: [\n                10,\n                9,\n                5,\n                5,\n                2,\n                3\n            ],\n            backgroundColor: 'rgba(255, 99, 132, 0.2)',\n            borderColor: 'rgba(255, 99, 132, 1)',\n            borderWidth: 1\n        }, \n    ]\n};\nvar options = {\n    scale: {\n        ticks: {\n            beginAtZero: true\n        }\n    }\n};\nvar SkillMatrix = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        p: 16,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Radar, {\n            data: data,\n            options: options,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            },\n            __self: _this\n        })\n    }));\n};\n_c = SkillMatrix;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SkillMatrix);\nvar _c;\n$RefreshReg$(_c, \"SkillMatrix\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ047O0FBRXRDLEdBQUssQ0FBQ0csSUFBSSxHQUFHLENBQUM7SUFDVkMsTUFBTSxFQUFFLENBQUM7UUFBQSxDQUFnQjtRQUFFLENBQXVCO1FBQUUsQ0FBd0I7UUFBRSxDQUFLO1FBQUUsQ0FBTztRQUFFLENBQU87SUFBQSxDQUFDO0lBQ3RHQyxRQUFRLEVBQUUsQ0FBQztRQUNULENBQUM7WUFDQ0MsS0FBSyxFQUFFLENBQVk7WUFDbkJILElBQUksRUFBRSxDQUFDO2dCQUFBLEVBQUU7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO1lBQUEsQ0FBQztZQUN6QkksZUFBZSxFQUFFLENBQXlCO1lBQzFDQyxXQUFXLEVBQUUsQ0FBdUI7WUFDcENDLFdBQVcsRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELEdBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7SUFDZkMsS0FBSyxFQUFFLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFBQ0MsV0FBVyxFQUFFLElBQUk7UUFBQyxDQUFDO0lBQzlCLENBQUM7QUFDSCxDQUFDO0FBRUgsR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFBUSxHQUFGLENBQUM7SUFDdkIsTUFBTSxzRUFDRFosaURBQUc7UUFBQ2EsQ0FBQyxFQUFFLEVBQUU7Ozs7Ozs7dUZBQ0xkLGtEQUFLO1lBQUNFLElBQUksRUFBRUEsSUFBSTtZQUFFTyxPQUFPLEVBQUVBLE9BQU87Ozs7Ozs7OztBQUcvQyxDQUFDO0tBTktJLFdBQVc7QUFRakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9za2lsbC1tYXRyaXguanM/YjQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXIsIFJhZGFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICAgIGxhYmVsczogWydVSSAvIFVYIERlc2lnbicsICdGcm9udCBFbmQgRGV2ZWxvcG1lbnQnLCAnQmFjayBFbmQgJiBJbnRlZ3JhdGlvbicsICdTRU8nLCAnQXVkaW8nLCAnVmlkZW8nXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJyMgb2YgVm90ZXMnLFxyXG4gICAgICAgIGRhdGE6IFsxMCwgOSwgNSwgNSwgMiwgM10sXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDk5LCAxMzIsIDAuMiknLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICBcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgc2NhbGU6IHtcclxuICAgICAgdGlja3M6IHsgYmVnaW5BdFplcm86IHRydWUgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbmNvbnN0IFNraWxsTWF0cml4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHA9ezE2fT5cclxuICAgICAgICAgICAgPFJhZGFyIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxsTWF0cml4Il0sIm5hbWVzIjpbIkJhciIsIlJhZGFyIiwiQm94IiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwib3B0aW9ucyIsInNjYWxlIiwidGlja3MiLCJiZWdpbkF0WmVybyIsIlNraWxsTWF0cml4IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/skill-matrix.js\n");

/***/ })

});