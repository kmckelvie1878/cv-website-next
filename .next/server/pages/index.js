"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ BioSection),
/* harmony export */   "q": () => (/* binding */ BioYear)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


const BioSection = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box)`
padding-left: 3.4em;
text-indent: -3.4em;
`;
const BioYear = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().span)`
font-weight: bold;
margin-right: 1em;
`;


/***/ }),

/***/ 3562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const Paragraph = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().p)`
    text-align: justify;
    margin-bottom: 1em;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paragraph);


/***/ }),

/***/ 7578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    shouldForwardProp: (prop)=>{
        return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.shouldForwardProp)(prop) || prop === 'transition';
    }
});
const Section = ({ children , delay =0  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDiv, {
        initial: {
            y: 10,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.8,
            delay
        },
        mb: 4,
        children: children
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

});

/***/ }),

/***/ 3959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ skill_matrix)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-chartjs-2"
const external_react_chartjs_2_namespaceObject = require("react-chartjs-2");
;// CONCATENATED MODULE: ./components/skill-matrix-config.js
const RadarData = {
    labels: [
        "Front End Dev",
        "Back End Dev",
        "SEO",
        "WordPress",
        "Video",
        "Audio",
        "3D",
        "Design"
    ],
    datasets: [
        {
            label: "Skill Level",
            backgroundColor: "rgba(34, 202, 236, .2)",
            borderColor: "#88ccca",
            pointBackgroundColor: "#88ccca",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#88ccca",
            color: "#888",
            data: [
                10,
                5,
                9,
                9,
                5,
                10,
                4,
                8
            ]
        }
    ]
};
const RadarOptions = {
    scales: {
        r: {
            grid: {
                circular: true,
                color: "#e1e1e1"
            },
            angleLines: {
                color: "#e1e1e1"
            },
            pointLabels: {
                color: "#888"
            },
            ticks: {
                display: false
            },
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

;// CONCATENATED MODULE: ./components/skill-matrix.js



const RadarChart = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_chartjs_2_namespaceObject.Radar, {
        data: RadarData,
        options: RadarOptions
    })
;
/* harmony default export */ const skill_matrix = (RadarChart);


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7578);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3562);
/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1221);
/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2857);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_skill_matrix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_section__WEBPACK_IMPORTED_MODULE_2__, _components_layouts_article__WEBPACK_IMPORTED_MODULE_5__]);
([_components_section__WEBPACK_IMPORTED_MODULE_2__, _components_layouts_article__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






// import { GridItem } from '../components/grid-item'


const Page = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_article__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            maxW: "container.lg",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    borderRadius: "lg",
                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('whiteAlpha.500', 'whiteAlpha.200'),
                    p: 3,
                    mb: 12,
                    mt: 6,
                    align: "center",
                    boxShadow: "xl",
                    children: [
                        "Hello 👋 I'm Kieran",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                            children: "I'm a creative web developer from St Helens"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    borderRadius: "lg",
                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('whiteAlpha.500', 'whiteAlpha.200'),
                    p: 6,
                    mb: 12,
                    mt: 6,
                    boxShadow: "lg",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            display: {
                                md: 'flex'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    flexGrow: 1,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                            as: "h1",
                                            variant: "page-title",
                                            fontSize: {
                                                base: 30,
                                                md: 50
                                            },
                                            bgGradient: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('linear(to-l, #202023, #202023)', 'linear(to-l, #0092ff, #2ce388)'),
                                            bgClip: "text",
                                            fontWeight: "extrabold",
                                            letterSpacing: -3,
                                            fontStyle: "italic",
                                            textAlign: {
                                                base: 'center',
                                                md: 'left'
                                            },
                                            children: "KIERAN McKELVIE"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                            as: "p",
                                            fontSize: 13,
                                            textAlign: {
                                                base: 'center',
                                                md: 'left'
                                            },
                                            children: "⚡ Digital Creator / Developer / Designer"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    flexShrink: 0,
                                    mt: {
                                        base: 4,
                                        md: 0
                                    },
                                    ml: {
                                        md: 6
                                    },
                                    align: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        borderColor: "whiteAlpha.800",
                                        borderWidth: 2,
                                        borderStyle: "solid",
                                        maxWidth: "100px",
                                        dispay: "inline-block",
                                        borderRadius: "full",
                                        src: "/images/profile-image-3.jpg",
                                        alt: "Profile Image"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            delay: 0.1,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                    as: "h3",
                                    variant: "section-title",
                                    mt: 4,
                                    children: "About"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    children: [
                                        "Predominantly a ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Front End Developer"
                                        }),
                                        ", I'm ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                textDecoration: "line-through"
                                            },
                                            children: "currently"
                                        }),
                                        " constantly evolving my skills as I aspire to be a full stack developer.",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        "I'm passionate about clean code, immersive UX & intuitive UI."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    children: [
                                        "Also known as Billy.",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                            children: "Long story!"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    borderRadius: "lg",
                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('whiteAlpha.500', 'whiteAlpha.200'),
                    p: 6,
                    mb: 12,
                    mt: 6,
                    boxShadow: "xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        delay: 0.2,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                            columns: [
                                1,
                                1,
                                2
                            ],
                            gap: 12,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                            as: "h3",
                                            variant: "section-title",
                                            children: "Bio"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "1989"
                                                }),
                                                "👶 Born in St Helens, Merseyside."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "1998"
                                                }),
                                                "⚽ Had [unsuccessful] trial at Everton Academy."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "2001"
                                                }),
                                                "💻 Taught myself HTML (at 12 years old)."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "2003"
                                                }),
                                                "🎸 Learned to play the guitar, joined my first band."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "2005"
                                                }),
                                                "📚 Left school (Sutton Academy, St Helens)."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "2007"
                                                }),
                                                "📜 Graduated from St Helens College with a National Certificate in Music Technology (NC2)."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "2008"
                                                }),
                                                "🎨 Landed first job as a Web Designer."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "2014"
                                                }),
                                                "👨‍🎓 Graduated from Liverpool John Moore's University with a Degree in Music Production and Sound Design (FDA)."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "2015"
                                                }),
                                                "👨‍💻 Front End Developer @ Gladstone Brookes."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "2017"
                                                }),
                                                "📈 Digital Marketing Manager @ Churchill Sloan.",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                }),
                                                "🏡 Moved to Newton-Le-Willows."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "2018"
                                                }),
                                                "👔 Web Development Manager @ Gladstone Brookes."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioSection */ .K, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bio__WEBPACK_IMPORTED_MODULE_4__/* .BioYear */ .q, {
                                                    children: "2021"
                                                }),
                                                "🔜 To be continued..."
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    p: 6,
                                    align: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                            as: "h3",
                                            fontSize: 26,
                                            bgGradient: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('linear(to-l, #202023, #202023)', 'linear(to-l, #0092ff, #2ce388)'),
                                            bgClip: "text",
                                            fontWeight: "extrabold",
                                            letterSpacing: -2,
                                            mb: 6,
                                            fontStyle: "italic",
                                            textAlign: "center",
                                            children: "ATTRIBUTES"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skill_matrix__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            mt: 4,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                    children: [
                                                        "Age: ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "32"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                    children: [
                                                        "Preferred Foot: ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "Left"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                                                    children: [
                                                        "Skill Moves: ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                            children: "⭐⭐⭐⭐⭐"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    borderRadius: "lg",
                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('whiteAlpha.500', 'whiteAlpha.200'),
                    p: 6,
                    mb: 12,
                    mt: 6,
                    boxShadow: "xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        delay: 0.4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                as: "h3",
                                variant: "section-title",
                                children: "Stack & Technologies"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: [
                                    "I coded this portfolio with the ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "React.js"
                                    }),
                                    " framework ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Next.js"
                                    }),
                                    ", using ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Chakra UI"
                                    }),
                                    " with ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Framer Motion"
                                    }),
                                    " and ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Three.js"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: [
                                    "I used ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Blender"
                                    }),
                                    " to create the 3D render of my head."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                children: "Some of the languages, frameworks and technologies I have experience with:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                flexWrap: "wrap",
                                mt: 6,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoHtml5
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoCss3
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoSass
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoJavascript
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoReact
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoVue
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoWordpress
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoGithub
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoFirebase
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoNodejs
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoNpm
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                        fontSize: 50,
                                        as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoPwa
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    borderRadius: "lg",
                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('whiteAlpha.500', 'whiteAlpha.200'),
                    p: 6,
                    mb: 12,
                    mt: 6,
                    boxShadow: "xl",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        delay: 0.4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                as: "h3",
                                variant: "section-title",
                                children: "Links"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "https://github.com/kmckelvie1878",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                variant: "ghost",
                                                colorScheme: "teal",
                                                leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                    as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoGithub
                                                }),
                                                children: "GitHub"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            href: "http://linkedin.com/in/kieran-mckelvie",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                variant: "ghost",
                                                colorScheme: "teal",
                                                leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                    as: react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoLogoLinkedin
                                                }),
                                                children: "LinkedIn"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

});

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,857], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();