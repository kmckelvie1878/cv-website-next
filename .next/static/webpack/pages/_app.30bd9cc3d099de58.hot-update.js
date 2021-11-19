"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/laptop.js":
/*!******************************!*\
  !*** ./components/laptop.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Laptop = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.sin(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            // 8 -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/images/fire.glb', {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"laptop\",\n        m: \"auto\",\n        at: [\n            '-20px',\n            '-60px',\n            '-120px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\laptop.js\",\n            lineNumber: 106,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\laptop.js\",\n                lineNumber: 117,\n                columnNumber: 17\n            },\n            __self: _this\n        })\n    }));\n};\n_s(Laptop, \"zxJU8Y9gTucMehIRRody6OGjGqE=\");\n_c = Laptop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Laptop);\nvar _c;\n$RefreshReg$(_c, \"Laptop\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBUTtZQUFFLENBQVE7UUFBQyxDQUFDO1FBQ2xDQyxDQUFDLEVBQUUsQ0FBQztZQUFBLEdBQUc7WUFBRSxHQUFHO1lBQUUsR0FBRztRQUFBLENBQUM7UUFDbEJDLENBQUMsRUFBRSxDQUFDO1lBQUEsR0FBRztZQUFFLEdBQUc7WUFBRSxHQUFHO1FBQUEsQ0FBQztRQUNsQjVCLFFBQVEsRUFBQyxDQUFVOzs7Ozs7O2tCQUVkbkMsT0FBTyx5RUFDSGIscURBQU87WUFDUjZFLElBQUksRUFBQyxDQUFJO1lBQ1Q3QixRQUFRLEVBQUMsQ0FBVTtZQUNuQjhCLElBQUksRUFBQyxDQUFLO1lBQ1ZDLEdBQUcsRUFBQyxDQUFLO1lBQ1RDLEVBQUUsRUFBQyxDQUFxQztZQUN4Q0MsRUFBRSxFQUFDLENBQWlDOzs7Ozs7Ozs7QUFLcEQsQ0FBQztHQW5IS3RFLE1BQU07S0FBTkEsTUFBTTtBQXFIWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xhcHRvcC5qcz8zYzc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcclxuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gJy4uL2xpYi9tb2RlbCdcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyBhbmltYXRlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgTGFwdG9wID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxyXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG4gICAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxyXG4gICAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKVxyXG4gICAgXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcclxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxyXG5cclxuICAgICAgICAgICAgLy8gNjQwIC0+IDI0MFxyXG4gICAgICAgICAgICAvLyA4IC0+IDZcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxyXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZSxcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgICAgIDAuMDEsXHJcbiAgICAgICAgICAgICAgICA1MDAwMFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcclxuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyAoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcclxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXHJcblxyXG4gICAgICAgICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCAnL2ltYWdlcy9maXJlLmdsYicsIHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2VcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKClcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxID0gbnVsbFxyXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSAwXHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcclxuICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZihmcmFtZSA8PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMTBcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpXHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgIHJlZj17cmVmQ29udGFpbmVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT0nbGFwdG9wJ1xyXG4gICAgICAgIG09XCJhdXRvXCJcclxuICAgICAgICBhdD17WyAnLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4JyBdfVxyXG4gICAgICAgIG1iPXtbJy00MHB4JywgJy0xNDBweCcsICctMjAwcHgnIF19XHJcbiAgICAgICAgdz17WzI4MCwgNDgwLCA2NDBdfVxyXG4gICAgICAgIGg9e1syODAsIDQ4MCwgNjQwXX1cclxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxTcGlubmVyXHJcbiAgICAgICAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICBsZWZ0PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCJcclxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXB0b3AiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwicmVuZGVyIiwiYW5pbWF0ZSIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiTGFwdG9wIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJjb3MiLCJ6IiwidXBkYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsImF0IiwibWIiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/laptop.js\n");

/***/ })

});