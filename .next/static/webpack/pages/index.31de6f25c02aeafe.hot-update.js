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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RadarData\": function() { return /* binding */ RadarData; },\n/* harmony export */   \"RadarOptions\": function() { return /* binding */ RadarOptions; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar RadarData = {\n    labels: [\n        \"Front End Dev\",\n        \"Integration\",\n        \"SEO\",\n        \"Video\",\n        \"Audio\",\n        \"UI/UX Design\"\n    ],\n    datasets: [\n        {\n            label: \"Skill Level\",\n            backgroundColor: \"rgba(34, 202, 236, .2)\",\n            borderColor: \"#88ccca\",\n            pointBackgroundColor: \"#88ccca\",\n            pointBorderColor: \"#fff\",\n            pointHoverBackgroundColor: \"#fff\",\n            pointHoverBorderColor: \"#88ccca\",\n            color: \"#888\",\n            data: [\n                10,\n                7,\n                9,\n                6,\n                9,\n                8\n            ]\n        }\n    ]\n};\nvar RadarOptions = {\n    scales: {\n        r: {\n            grid: {\n                circular: true,\n                color: \"#e1e1e1\"\n            },\n            angleLines: {\n                color: \"#e1e1e1\"\n            },\n            pointLabels: {\n                color: \"#888\"\n            },\n            ticks: {\n                display: false\n            },\n            beginAtZero: true\n        }\n    },\n    plugins: {\n        legend: {\n            display: false\n        }\n    }\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC1jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBRTdDLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUFDO1FBQUEsQ0FBZTtRQUFFLENBQWE7UUFBRSxDQUFLO1FBQUUsQ0FBTztRQUFFLENBQU87UUFBRSxDQUFjO0lBQUEsQ0FBQztJQUNqRkMsUUFBUSxFQUFFLENBQUM7UUFDUCxDQUFDO1lBQ0dDLEtBQUssRUFBRSxDQUFhO1lBQ3BCQyxlQUFlLEVBQUUsQ0FBd0I7WUFDekNDLFdBQVcsRUFBRSxDQUFTO1lBQ3RCQyxvQkFBb0IsRUFBRSxDQUFTO1lBQy9CQyxnQkFBZ0IsRUFBRSxDQUFNO1lBQ3hCQyx5QkFBeUIsRUFBRSxDQUFNO1lBQ2pDQyxxQkFBcUIsRUFBRSxDQUFTO1lBQ2hDQyxLQUFLLEVBQUUsQ0FBTTtZQUNiQyxJQUFJLEVBQUUsQ0FBQztnQkFBQSxFQUFFO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztnQkFBRSxDQUFDO2dCQUFFLENBQUM7Z0JBQUUsQ0FBQztZQUFBLENBQUM7UUFDN0IsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO0FBQ00sR0FBSyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztJQUN6QkMsTUFBTSxFQUFFLENBQUM7UUFDTEMsQ0FBQyxFQUFFLENBQUM7WUFDQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ0hDLFFBQVEsRUFBRSxJQUFJO2dCQUNkTixLQUFLLEVBQUUsQ0FBUztZQUNwQixDQUFDO1lBQ0RPLFVBQVUsRUFBRSxDQUFDO2dCQUNUUCxLQUFLLEVBQUUsQ0FBUztZQUNwQixDQUFDO1lBQ0RRLFdBQVcsRUFBRSxDQUFDO2dCQUNWUixLQUFLLEVBQUUsQ0FBTTtZQUNqQixDQUFDO1lBQ0RTLEtBQUssRUFBRSxDQUFDO2dCQUNKQyxPQUFPLEVBQUUsS0FBSztZQUNsQixDQUFDO1lBQ0RDLFdBQVcsRUFBRSxJQUFJO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQ0RDLE9BQU8sRUFBRSxDQUFDO1FBQ05DLE1BQU0sRUFBRSxDQUFDO1lBQ0xILE9BQU8sRUFBRSxLQUFLO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NraWxsLW1hdHJpeC1jb25maWcuanM/MjU1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgUmFkYXJEYXRhID0ge1xyXG4gICAgbGFiZWxzOiBbXCJGcm9udCBFbmQgRGV2XCIsIFwiSW50ZWdyYXRpb25cIiwgXCJTRU9cIiwgXCJWaWRlb1wiLCBcIkF1ZGlvXCIsIFwiVUkvVVggRGVzaWduXCJdLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlNraWxsIExldmVsXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDM0LCAyMDIsIDIzNiwgLjIpXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiM4OGNjY2FcIixcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwiIzg4Y2NjYVwiLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogXCIjODhjY2NhXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiM4ODhcIixcclxuICAgICAgICAgICAgZGF0YTogWzEwLCA3LCA5LCA2LCA5LCA4XVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5leHBvcnQgY29uc3QgUmFkYXJPcHRpb25zID0ge1xyXG4gICAgc2NhbGVzOiB7IFxyXG4gICAgICAgIHI6IHtcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZTFlMWUxXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5nbGVMaW5lczoge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2UxZTFlMVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvaW50TGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjODg4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuICAiXSwibmFtZXMiOlsidXNlQ29sb3JNb2RlVmFsdWUiLCJSYWRhckRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwiY29sb3IiLCJkYXRhIiwiUmFkYXJPcHRpb25zIiwic2NhbGVzIiwiciIsImdyaWQiLCJjaXJjdWxhciIsImFuZ2xlTGluZXMiLCJwb2ludExhYmVscyIsInRpY2tzIiwiZGlzcGxheSIsImJlZ2luQXRaZXJvIiwicGx1Z2lucyIsImxlZ2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/skill-matrix-config.js\n");

/***/ })

});