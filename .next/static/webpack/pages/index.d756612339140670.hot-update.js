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

/***/ "./components/skill-matrix-config.js":
/*!*******************************************!*\
  !*** ./components/skill-matrix-config.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RadarData\": function() { return /* binding */ RadarData; },\n/* harmony export */   \"RadarOptions\": function() { return /* binding */ RadarOptions; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar RadarData = {\n    labels: [\n        \"Finger Strength\",\n        \"Power\",\n        \"Endurance\",\n        \"Stability\",\n        \"Flexability\"\n    ],\n    datasets: [\n        {\n            label: \"March\",\n            backgroundColor: \"rgba(34, 202, 236, .2)\",\n            borderColor: \"rgba(34, 202, 236, 1)\",\n            pointBackgroundColor: \"rgba(34, 202, 236, 1)\",\n            poingBorderColor: \"#fff\",\n            pointHoverBackgroundColor: \"#fff\",\n            pointHoverBorderColor: \"rgba(34, 202, 236, 1)\",\n            data: [\n                13,\n                10,\n                12,\n                6,\n                5\n            ]\n        }\n    ]\n};\nvar RadarOptions = {\n    scales: {\n        ticks: {\n            display: false,\n            beginAtZero: true,\n            max: 5,\n            min: 0,\n            stepSize: 1,\n            font: {\n                size: 6\n            },\n            showLabelBackdrop: false,\n            backdropColor: \"rgba(203, 197, 11, 1)\"\n        },\n        r: {\n            pointLabels: {\n                font: {\n                    size: 30\n                }\n            }\n        },\n        angleLines: {\n            color: \"rgba(255, 255, 255, .3)\",\n            lineWidth: 1\n        },\n        gridLines: {\n            color: \"rgba(255, 255, 255, .3)\",\n            circular: true\n        }\n    }\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC1jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sR0FBSyxDQUFDQSxTQUFTLEdBQUcsQ0FBQztJQUN0QkMsTUFBTSxFQUFFLENBQUM7UUFBQSxDQUFpQjtRQUFFLENBQU87UUFBRSxDQUFXO1FBQUUsQ0FBVztRQUFFLENBQWE7SUFBQSxDQUFDO0lBQzdFQyxRQUFRLEVBQUUsQ0FBQztRQUNULENBQUM7WUFDQ0MsS0FBSyxFQUFFLENBQU87WUFDZEMsZUFBZSxFQUFFLENBQXdCO1lBQ3pDQyxXQUFXLEVBQUUsQ0FBdUI7WUFDcENDLG9CQUFvQixFQUFFLENBQXVCO1lBQzdDQyxnQkFBZ0IsRUFBRSxDQUFNO1lBQ3hCQyx5QkFBeUIsRUFBRSxDQUFNO1lBQ2pDQyxxQkFBcUIsRUFBRSxDQUF1QjtZQUM5Q0MsSUFBSSxFQUFFLENBQUM7Z0JBQUEsRUFBRTtnQkFBRSxFQUFFO2dCQUFFLEVBQUU7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO1lBQUEsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFDTSxHQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQzNCQyxNQUFNLEVBQUUsQ0FBQztRQUNQQyxLQUFLLEVBQUUsQ0FBQztZQUNOQyxPQUFPLEVBQUMsS0FBSztZQUNiQyxXQUFXLEVBQUUsSUFBSTtZQUNqQkMsR0FBRyxFQUFFLENBQUM7WUFDTkMsR0FBRyxFQUFFLENBQUM7WUFDTkMsUUFBUSxFQUFFLENBQUM7WUFDWEMsSUFBSSxFQUFFLENBQUM7Z0JBQ0hDLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQztZQUNEQyxpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCQyxhQUFhLEVBQUUsQ0FBdUI7UUFDeEMsQ0FBQztRQUNEQyxDQUFDLEVBQUUsQ0FBQztZQUNGQyxXQUFXLEVBQUMsQ0FBQztnQkFDVEwsSUFBSSxFQUFFLENBQUM7b0JBQ0hDLElBQUksRUFBRSxFQUFFO2dCQUNaLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNDSyxVQUFVLEVBQUUsQ0FBQztZQUNYQyxLQUFLLEVBQUUsQ0FBeUI7WUFDaENDLFNBQVMsRUFBRSxDQUFDO1FBQ2QsQ0FBQztRQUNEQyxTQUFTLEVBQUUsQ0FBQztZQUNWRixLQUFLLEVBQUUsQ0FBeUI7WUFDaENHLFFBQVEsRUFBRSxJQUFJO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC1jb25maWcuanM/MjU1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUmFkYXJEYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbXCJGaW5nZXIgU3RyZW5ndGhcIiwgXCJQb3dlclwiLCBcIkVuZHVyYW5jZVwiLCBcIlN0YWJpbGl0eVwiLCBcIkZsZXhhYmlsaXR5XCJdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcIk1hcmNoXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMzQsIDIwMiwgMjM2LCAuMilcIixcclxuICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDM0LCAyMDIsIDIzNiwgMSlcIixcclxuICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDM0LCAyMDIsIDIzNiwgMSlcIixcclxuICAgICAgICBwb2luZ0JvcmRlckNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IFwicmdiYSgzNCwgMjAyLCAyMzYsIDEpXCIsXHJcbiAgICAgICAgZGF0YTogWzEzLCAxMCwgMTIsIDYsIDVdXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG4gIGV4cG9ydCBjb25zdCBSYWRhck9wdGlvbnMgPSB7XHJcbiAgICBzY2FsZXM6IHtcclxuICAgICAgdGlja3M6IHtcclxuICAgICAgICBkaXNwbGF5OmZhbHNlLFxyXG4gICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICAgIG1heDogNSxcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgc3RlcFNpemU6IDEsXHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICBzaXplOiA2XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93TGFiZWxCYWNrZHJvcDogZmFsc2UsXHJcbiAgICAgICAgYmFja2Ryb3BDb2xvcjogXCJyZ2JhKDIwMywgMTk3LCAxMSwgMSlcIlxyXG4gICAgICB9LFxyXG4gICAgICByOiB7XHJcbiAgICAgICAgcG9pbnRMYWJlbHM6e1xyXG4gICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiAzMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgIGFuZ2xlTGluZXM6IHtcclxuICAgICAgICBjb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKVwiLFxyXG4gICAgICAgIGxpbmVXaWR0aDogMVxyXG4gICAgICB9LFxyXG4gICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICBjb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKVwiLFxyXG4gICAgICAgIGNpcmN1bGFyOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gICJdLCJuYW1lcyI6WyJSYWRhckRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW5nQm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwiZGF0YSIsIlJhZGFyT3B0aW9ucyIsInNjYWxlcyIsInRpY2tzIiwiZGlzcGxheSIsImJlZ2luQXRaZXJvIiwibWF4IiwibWluIiwic3RlcFNpemUiLCJmb250Iiwic2l6ZSIsInNob3dMYWJlbEJhY2tkcm9wIiwiYmFja2Ryb3BDb2xvciIsInIiLCJwb2ludExhYmVscyIsImFuZ2xlTGluZXMiLCJjb2xvciIsImxpbmVXaWR0aCIsImdyaWRMaW5lcyIsImNpcmN1bGFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/skill-matrix-config.js\n");

/***/ })

});