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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.modern.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar radarData = {\n    labels: [\n        'HP',\n        'Attack',\n        'Defense',\n        'Sp. Attack',\n        'Sp. Def',\n        'Speed'\n    ],\n    datasets: [\n        {\n            label: 'Charmander',\n            backgroundColor: 'rgba(255, 255, 153, 0.2)',\n            borderColor: 'rgba(255, 255, 153, 1)',\n            pointBorderColor: 'rgba(255, 255, 153, 1)',\n            pointBackgrounColor: 'rgba(255, 255, 153, 1)',\n            pointRadius: 1,\n            data: [\n                39,\n                52,\n                43,\n                60,\n                50,\n                65\n            ]\n        },\n        {\n            label: 'Charmeleon',\n            backgroundColor: 'rgba(255, 153, 51, 0.2)',\n            borderColor: 'rgba(255, 153, 51, 1)',\n            pointBorderColor: 'rgba(255, 153, 51, 1)',\n            pointBackgrounColor: 'rgba(255, 153, 51, 1)',\n            pointRadius: 1,\n            data: [\n                58,\n                64,\n                58,\n                80,\n                65,\n                80\n            ]\n        },\n        {\n            label: 'Charizard',\n            backgroundColor: 'rgba(255, 0, 0, 0.2)',\n            borderColor: 'rgba(255, 0, 0, 1)',\n            pointBorderColor: 'rgba(255, 0, 0, 1)',\n            pointBackgrounColor: 'rgba(255, 0, 0, 1)',\n            pointRadius: 1,\n            data: [\n                78,\n                84,\n                78,\n                109,\n                85,\n                100\n            ]\n        }\n    ]\n};\nvar RadarChart = function() {\n    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        px: 24,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n            lineNumber: 38,\n            columnNumber: 1\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Radar, {\n            data: radarData,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\skill-matrix.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            },\n            __self: _this\n        })\n    });\n};\n_c = RadarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RadarChart);\nvar _c;\n$RefreshReg$(_c, \"RadarChart\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ047O0FBRXRDLEdBQUssQ0FBQ0csU0FBUyxHQUFHLENBQUM7SUFDZkMsTUFBTSxFQUFFLENBQUM7UUFBQSxDQUFJO1FBQUUsQ0FBUTtRQUFFLENBQVM7UUFBRSxDQUFZO1FBQUUsQ0FBUztRQUFFLENBQU87SUFBQSxDQUFDO0lBQ3JFQyxRQUFRLEVBQUUsQ0FBQztRQUNULENBQUM7WUFDQ0MsS0FBSyxFQUFFLENBQVk7WUFDbkJDLGVBQWUsRUFBRSxDQUEwQjtZQUMzQ0MsV0FBVyxFQUFHLENBQXdCO1lBQ3RDQyxnQkFBZ0IsRUFBRSxDQUF3QjtZQUMxQ0MsbUJBQW1CLEVBQUUsQ0FBd0I7WUFDN0NDLFdBQVcsRUFBRSxDQUFDO1lBQ2RDLElBQUksRUFBRSxDQUFDO2dCQUFBLEVBQUU7Z0JBQUUsRUFBRTtnQkFBRSxFQUFFO2dCQUFFLEVBQUU7Z0JBQUUsRUFBRTtnQkFBRSxFQUFFO1lBQUEsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsQ0FBQztZQUNDTixLQUFLLEVBQUUsQ0FBWTtZQUNuQkMsZUFBZSxFQUFFLENBQXlCO1lBQzFDQyxXQUFXLEVBQUUsQ0FBdUI7WUFDcENDLGdCQUFnQixFQUFFLENBQXVCO1lBQ3pDQyxtQkFBbUIsRUFBRSxDQUF1QjtZQUM1Q0MsV0FBVyxFQUFFLENBQUM7WUFDZEMsSUFBSSxFQUFFLENBQUM7Z0JBQUEsRUFBRTtnQkFBRSxFQUFFO2dCQUFFLEVBQUU7Z0JBQUUsRUFBRTtnQkFBRSxFQUFFO2dCQUFFLEVBQUU7WUFBQSxDQUFDO1FBQ2hDLENBQUM7UUFDRCxDQUFDO1lBQ0NOLEtBQUssRUFBRSxDQUFXO1lBQ2xCQyxlQUFlLEVBQUUsQ0FBc0I7WUFDdkNDLFdBQVcsRUFBRSxDQUFvQjtZQUNqQ0MsZ0JBQWdCLEVBQUUsQ0FBb0I7WUFDdENDLG1CQUFtQixFQUFFLENBQW9CO1lBQ3pDQyxXQUFXLEVBQUUsQ0FBQztZQUNkQyxJQUFJLEVBQUUsQ0FBQztnQkFBQSxFQUFFO2dCQUFFLEVBQUU7Z0JBQUUsRUFBRTtnQkFBRSxHQUFHO2dCQUFFLEVBQUU7Z0JBQUUsR0FBRztZQUFBLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUgsR0FBSyxDQUFDQyxVQUFVLEdBQUcsUUFBUTtrQkFDM0IsTUFBTSx3REFBTFgsaURBQUc7UUFBQ1ksRUFBRSxFQUFFLEVBQUU7Ozs7Ozs7dUZBQ05iLGtEQUFLO1lBQUNXLElBQUksRUFBRVQsU0FBUzs7Ozs7Ozs7OztLQUZwQlUsVUFBVTtBQU1oQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2tpbGwtbWF0cml4LmpzP2I0NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFyLCBSYWRhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmNvbnN0IHJhZGFyRGF0YSA9IHtcclxuICAgIGxhYmVsczogWydIUCcsICdBdHRhY2snLCAnRGVmZW5zZScsICdTcC4gQXR0YWNrJywgJ1NwLiBEZWYnLCAnU3BlZWQnXSxcclxuICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogJ0NoYXJtYW5kZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDE1MywgMC4yKScsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICAncmdiYSgyNTUsIDI1NSwgMTUzLCAxKScsXHJcbiAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDE1MywgMSknLFxyXG4gICAgICAgIHBvaW50QmFja2dyb3VuQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAxNTMsIDEpJyxcclxuICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICBkYXRhOiBbMzksIDUyLCA0MywgNjAsIDUwLCA2NV1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnQ2hhcm1lbGVvbicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsIDE1MywgNTEsIDAuMiknLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDE1MywgNTEsIDEpJyxcclxuICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAncmdiYSgyNTUsIDE1MywgNTEsIDEpJyxcclxuICAgICAgICBwb2ludEJhY2tncm91bkNvbG9yOiAncmdiYSgyNTUsIDE1MywgNTEsIDEpJyxcclxuICAgICAgICBwb2ludFJhZGl1czogMSxcclxuICAgICAgICBkYXRhOiBbNTgsIDY0LCA1OCwgODAsIDY1LCA4MF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiAnQ2hhcml6YXJkJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMC4yKScsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxyXG4gICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxyXG4gICAgICAgIHBvaW50QmFja2dyb3VuQ29sb3I6ICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxyXG4gICAgICAgIHBvaW50UmFkaXVzOiAxLFxyXG4gICAgICAgIGRhdGE6IFs3OCwgODQsIDc4LCAxMDksIDg1LCAxMDBdXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcblxyXG5jb25zdCBSYWRhckNoYXJ0ID0gKCkgPT4gKFxyXG48Qm94IHB4PXsyNH0+XHJcbiAgICA8UmFkYXIgZGF0YT17cmFkYXJEYXRhfSAvPlxyXG48L0JveD5cclxuKTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgUmFkYXJDaGFydDsiXSwibmFtZXMiOlsiQmFyIiwiUmFkYXIiLCJCb3giLCJyYWRhckRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRCYWNrZ3JvdW5Db2xvciIsInBvaW50UmFkaXVzIiwiZGF0YSIsIlJhZGFyQ2hhcnQiLCJweCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/skill-matrix.js\n");

/***/ })

});