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

/***/ "./components/MyHead.js":
/*!******************************!*\
  !*** ./components/MyHead.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// import { render } from 'react-dom'\n// import { animate } from 'framer-motion'\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar MyHead = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.15, -1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.sin(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            // 8 -> 6\n            var scale = scH * 0.0025 + 1.6;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.1, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/images/MyHead2.glb', {\n                receiveShadow: false,\n                castShadow: true\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 7;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener('resize', handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"my-head\",\n        m: \"auto\",\n        mt: [\n            '0px',\n            '40px',\n            '20px'\n        ],\n        mb: [\n            '-120px',\n            '-150px',\n            '-290px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\MyHead.js\",\n            lineNumber: 123,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px - var(--spinner-size))\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\⠀\\\\2021\\\\DEV TRAINING\\\\react\\\\next-chakra-cv\\\\components\\\\MyHead.js\",\n                lineNumber: 134,\n                columnNumber: 17\n            },\n            __self: _this\n        })\n    }));\n};\n_s(MyHead, \"WEs1S1TmHR5F8JRTajByPWcuhqo=\");\n_c = MyHead;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyHead);\nvar _c;\n$RefreshReg$(_c, \"MyHead\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQXFDO1lBQ3hDUCxFQUFFLEVBQUMsQ0FBaUM7Ozs7Ozs7OztBQUtwRCxDQUFDO0dBcElLbkUsTUFBTTtLQUFOQSxNQUFNO0FBc0laLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXlIZWFkLmpzPzJhMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xyXG4vLyBpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXHJcbi8vIGltcG9ydCB7IGFuaW1hdGUgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxyXG59XHJcblxyXG5jb25zdCBNeUhlYWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW19jYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjE1LCAtMS4yLCAwKSlcclxuICAgIGNvbnN0IFtpbml0aWFsQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXHJcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgICAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAyMCAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxyXG4gICAgICAgIClcclxuICAgIClcclxuICAgIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcclxuICAgIGNvbnN0IFtfY29udHJvbHMsIHNldENvbnRyb2xzXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiByZW5kZXJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG5cclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVuZGVyZXJdKVxyXG4gICAgXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcclxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxyXG5cclxuICAgICAgICAgICAgLy8gNjQwIC0+IDI0MFxyXG4gICAgICAgICAgICAvLyA4IC0+IDZcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwMjUgKyAxLjZcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAwLjEsXHJcbiAgICAgICAgICAgICAgICA1MDAwMFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcclxuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyAoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcclxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXHJcblxyXG4gICAgICAgICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCAnL2ltYWdlcy9NeUhlYWQyLmdsYicsIHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogdHJ1ZVxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoKVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCByZXEgPSBudWxsXHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGZyYW1lIDw9IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZSAvIDEyMCkgKiBNYXRoLlBJICogMjBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSA3XHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IHAueiAqIE1hdGguY29zKHJvdFNwZWVkKSAtIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgICAgIHJldHVybigpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JlbmRlcmVyLCBoYW5kbGVXaW5kb3dSZXNpemVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgIHJlZj17cmVmQ29udGFpbmVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT0nbXktaGVhZCdcclxuICAgICAgICBtPVwiYXV0b1wiXHJcbiAgICAgICAgbXQ9e1sgJzBweCcsICc0MHB4JywgJzIwcHgnIF19XHJcbiAgICAgICAgbWI9e1snLTEyMHB4JywgJy0xNTBweCcsICctMjkwcHgnIF19XHJcbiAgICAgICAgdz17WzI4MCwgNDgwLCA2NDBdfVxyXG4gICAgICAgIGg9e1syODAsIDQ4MCwgNjQwXX1cclxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxTcGlubmVyXHJcbiAgICAgICAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgICBsZWZ0PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCJcclxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUhlYWQiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJNeUhlYWQiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY29udGFpbmVyIiwiY3VycmVudCIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJjb3MiLCJ6IiwidXBkYXRlIiwicmVuZGVyIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwibXQiLCJtYiIsInciLCJoIiwic2l6ZSIsImxlZnQiLCJ0b3AiLCJtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MyHead.js\n");

/***/ })

});