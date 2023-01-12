"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 7058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Button_Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Button/Button.tsx


const Button = ({ onCick , children , loading , className , loadingIndicator  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onCick,
        className: `btn capitalize ${loading && "loading"} ${className}`,
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: loadingIndicator
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        })
    });
};
/* harmony default export */ const Button_Button = (Button);

;// CONCATENATED MODULE: ./components/Button/index.ts



/***/ }),

/***/ 5879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PoolsCard_PoolsCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Cards/PoolsCard/PoolsCard.tsx




const PoolsCard = ({ title , image  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "md:col-span-2 w-full h-fit bg-light2 overflow-hidden shadow-md",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full h-38 relative",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex md:flex-row flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "w-220 h-220",
                            src: `${image}`,
                            alt: "school img",
                            width: "300",
                            height: "300"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-auto",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex-auto md:pt-5 md:-ml-5 ml-0 p-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "font-bold text-[18px] md:text-start text-center",
                                            children: title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://www.notion.so/directed/Kagumo-High-School-bf13e9c623be4480a5a5c0aac3ebed18",
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "md:text-start text-[12px] pb-2 underline hover:no-underline text-gray-600 text-center",
                                                children: "Learn more about this school"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "text-[12px] text-gray-600 md:ml-0 ml-10",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "pb-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            className: "inline",
                                                            src: "/static/images/clock.png",
                                                            alt: "Pool Image",
                                                            width: "10",
                                                            height: "10"
                                                        }),
                                                        " 7 days left"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "pb-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            className: "inline",
                                                            src: "/static/images/Vector.png",
                                                            alt: "Pool Image",
                                                            width: "10",
                                                            height: "10"
                                                        }),
                                                        " 5 person(s) have donated"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "pb-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            className: "inline",
                                                            src: "/static/images/dollar.png",
                                                            alt: "Pool Image",
                                                            width: "10",
                                                            height: "10"
                                                        }),
                                                        " Each scholarship costs ₳1000"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "pb-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            className: "inline",
                                                            src: "/static/images/nft.png",
                                                            alt: "Pool Image",
                                                            width: "10",
                                                            height: "10"
                                                        }),
                                                        " 20 Digital art pieces available"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md:hidden block flex-auto",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col mt-8 text-end pr-2 text-sm justify-between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-auto mb-20",
                                                children: "₳3108"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex-auto",
                                                children: "Goal: ₳40,000"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md:hidden block flex-auto ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col flex-nowrap justify-end w-5 h-32 mt-8 overflow-hidden bg-[#385140]",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("progress", {
                                            className: "bg-black overflow-hidden",
                                            style: {
                                                height: "13%"
                                            }
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pt-5 text-gray-600 md:-ml-20 ml-10",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex md:flex-col flex-row items-center w-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "py-2 flex-auto",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                className: "font-semibold text-xl text-center",
                                                children: "3/40"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-center text-sm",
                                                children: [
                                                    "Scholarships ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " funded"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "md:border-2 md:border-transparent md:border-t-white md:w-14 md:h-2 border-2 border-transparent border-l-white w-2 h-14"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "font-semibold mt-10 md:mr-10 mr-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "hidden text-primary text-base md:flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "flex items-center space-x-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-sm",
                                                    children: "₳3,108"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-sm",
                                                children: "Goal: $40,000"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("progress", {
                                        className: "hidden md:block rounded-none progress-primary w-full bg-slate-300",
                                        value: "13",
                                        max: "100"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "hidden md:block italic text-xs text-end text-gray-600",
                                        children: [
                                            "₳1000 to fund the next scholarship",
                                            " "
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-center p-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/donate",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "btn btn-primary",
                                        children: "donate now"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const PoolsCard_PoolsCard = (PoolsCard);

;// CONCATENATED MODULE: ./components/Cards/PoolsCard/index.ts



/***/ }),

/***/ 8557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FilterMenu = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "z-10",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
            as: "div",
            className: "relative inline-block text-left",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, {
                        className: "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsFilter, {
                            className: "text-[30px]"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                    as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Items, {
                        className: "absolute right-0 -mt-10 w-56 origin-top-right border border-gray-500 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-1 py-1 ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative text-gray-500 outline-0 w-full border-none",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "py-5 px-2 w-full",
                                                    children: "Filter Menu"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, {
                                                    className: "",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrClose, {
                                                        className: "text-[30px] pr-3 text-gray-500"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "border border-transparent border-t-gray-500 w-11/12"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            className: "border-none cursor-pointer inline-block py-2 pl-3 pl-10 w-4/5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "pt-6",
                                                    children: "Language"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "",
                                                    children: "Javascript"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "",
                                                    children: "PHP"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "border border-transparent border-t-gray-500 w-11/12"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-1 py-1 ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative text-gray-500 outline-0 w-full border-none",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            className: "border-none cursor-pointer inline-block py-2 pl-3 pl-10 w-4/5",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "pt-6",
                                                    children: "Gender"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "",
                                                    children: "Female"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "",
                                                    children: "Male"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "",
                                                    children: "Co-Ed"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "border border-transparent border-t-gray-500 w-11/12"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-chevron-down text-gray-400"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-1 py-1 ",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative text-gray-500 outline-0 w-full border-none",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            className: "border-none cursor-pointer inline-block py-2 pl-3 pl-10 w-4/5 invalid:outline-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "pt-6",
                                                    children: "Location"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "",
                                                    children: "Location 1"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "",
                                                    children: "Location 2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    className: "",
                                                    children: "Location 3"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "border border-transparent border-t-gray-500 w-11/12"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-chevron-down text-gray-400"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-1 py-5 flex justify-center flex-col items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "text-white w-3/5 items-center text-gray-100 text-center rounded-md px-2 py-2 text-sm bg-[#385140]",
                                            children: "Apply Filters"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                                        children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: `${active ? "no-underline" : "text-gray-900"} w-4/5 items-center text-center underline rounded-md px-2 py-2 text-sm`,
                                                children: "Clear All Filters"
                                            })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
function EditInactiveIcon(props) {
    return /*#__PURE__*/ _jsx("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M4 13V16H7L16 7L13 4L4 13Z",
            fill: "#EDE9FE",
            stroke: "#A78BFA",
            strokeWidth: "2"
        })
    });
}
function EditActiveIcon(props) {
    return /*#__PURE__*/ _jsx("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M4 13V16H7L16 7L13 4L4 13Z",
            fill: "#8B5CF6",
            stroke: "#C4B5FD",
            strokeWidth: "2"
        })
    });
}
function DuplicateInactiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M4 4H12V12H4V4Z",
                fill: "#EDE9FE",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 8H16V16H8V8Z",
                fill: "#EDE9FE",
                stroke: "#A78BFA",
                strokeWidth: "2"
            })
        ]
    });
}
function DuplicateActiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M4 4H12V12H4V4Z",
                fill: "#8B5CF6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 8H16V16H8V8Z",
                fill: "#8B5CF6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            })
        ]
    });
}
function ArchiveInactiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: "5",
                y: "8",
                width: "10",
                height: "8",
                fill: "#EDE9FE",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "4",
                y: "4",
                width: "12",
                height: "4",
                fill: "#EDE9FE",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 12H12",
                stroke: "#A78BFA",
                strokeWidth: "2"
            })
        ]
    });
}
function ArchiveActiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: "5",
                y: "8",
                width: "10",
                height: "8",
                fill: "#8B5CF6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "4",
                y: "4",
                width: "12",
                height: "4",
                fill: "#8B5CF6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 12H12",
                stroke: "#A78BFA",
                strokeWidth: "2"
            })
        ]
    });
}
function MoveInactiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M10 4H16V10",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M16 4L8 12",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 6H4V16H14V12",
                stroke: "#A78BFA",
                strokeWidth: "2"
            })
        ]
    });
}
function MoveActiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M10 4H16V10",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M16 4L8 12",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 6H4V16H14V12",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            })
        ]
    });
}
function DeleteInactiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: "5",
                y: "6",
                width: "10",
                height: "10",
                fill: "#EDE9FE",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M3 6H17",
                stroke: "#A78BFA",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 6V4H12V6",
                stroke: "#A78BFA",
                strokeWidth: "2"
            })
        ]
    });
}
function DeleteActiveIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        ...props,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: "5",
                y: "6",
                width: "10",
                height: "10",
                fill: "#8B5CF6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M3 6H17",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8 6V4H12V6",
                stroke: "#C4B5FD",
                strokeWidth: "2"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1065:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _FilterMenu__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _FilterMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8557);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FilterMenu__WEBPACK_IMPORTED_MODULE_0__]);
_FilterMenu__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Footer_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx


const NavLinks = [
    {
        title: "Scholarship Pools",
        link: "#"
    },
    {
        title: "Scholars’ Progress",
        link: "#"
    },
    {
        title: "Transactions",
        link: "#"
    }
];
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-primary h-fit py-4 w-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "h-full w-full container flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://directed.notion.site/Donation-Portal-Help-78d35a59263647dda6faac4e01cb99e2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-sm bg-primary-light border-none hover:bg-primary-light hover:border-none text-white",
                        children: "need help?"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://docs.google.com/forms/d/e/1FAIpQLSfx_FCw99hQ7Dg5zviHa1EaeCShy57ftmpf-p2tDAKacptIsA/viewform?usp=sf_link",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-sm bg-primary-light border-none hover:bg-primary-light hover:border-none text-white",
                        children: "have a suggestion?"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://directed.notion.site/DirectEd-Lions-Terms-Conditions-1f34512058c74546b752a2e549173818",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-white",
                                children: [
                                    "Terms and Conditions ",
                                    ""
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-white",
                            children: [
                                "\xa9 ",
                                new Date().getFullYear(),
                                " DirectEd. All rights reserved."
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Footer/index.ts



/***/ }),

/***/ 3371:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FilterMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1065);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FilterMenu__WEBPACK_IMPORTED_MODULE_4__]);
_FilterMenu__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Hero = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container grid grid-cols-1 gap-y-7 py-8 justify-items-center h-fit",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:col-span-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl md:text-5xl text-black font-semibold text-center",
                        children: "Scholarship Pools"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:col-span-2 box-border h-auto w-full p-4 border-2 border-[#999999] bg-white",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex md:flex-row flex-col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex-auto md:w-3/5 h-fit",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "w-full flex justify-center items-center font-semibold mb-5 text-xl",
                                        children: "What Can I Receive as a Donor?"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-auto h-auto w-full ...",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-center items-start",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                className: "px-0 ml-5 ",
                                                                src: "/static/images/acess.png",
                                                                alt: "image",
                                                                width: "90",
                                                                height: "90"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "dropdown dropdown-hover",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        tabIndex: 1,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                            className: "px-0 -ml-4 -mt-4 cursor-pointer",
                                                                            src: "/static/images/Hover.png",
                                                                            alt: "image",
                                                                            width: "50",
                                                                            height: "50"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        tabIndex: 1,
                                                                        className: "dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "card-body",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                    className: "px-0 -ml-4 -mt-4 cursor-pointer",
                                                                                    src: "/static/images/Hover.png",
                                                                                    alt: "image",
                                                                                    width: "30",
                                                                                    height: "30"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    className: "text-lg",
                                                                                    children: "All donors receive a token which unlocks access to the Scholars Progress and Donor's Portal page!"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "flex justify-center items-center font-semibold text-sm",
                                                        children: "Access Token"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-auto h-auto w-full ...",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-center items-start",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                className: "px-0 ml-5 ",
                                                                src: "/static/images/digital.png",
                                                                alt: "image",
                                                                width: "90",
                                                                height: "90"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "dropdown dropdown-hover",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        tabIndex: 1,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                            className: "px-0 -ml-4 -mt-4 cursor-pointer",
                                                                            src: "/static/images/Hover.png",
                                                                            alt: "image",
                                                                            width: "50",
                                                                            height: "50"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        tabIndex: 1,
                                                                        className: "dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "card-body",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                    className: "px-0 -ml-4 -mt-4 cursor-pointer",
                                                                                    src: "/static/images/Hover.png",
                                                                                    alt: "image",
                                                                                    width: "30",
                                                                                    height: "30"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    className: "text-lg",
                                                                                    children: "All donors receive digital art pieces from four tiers, each with different utilities and unique names."
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "flex justify-center items-center font-semibold text-sm",
                                                        children: "Digital Art"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-auto h-auto w-full ...",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-center items-start",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                className: "px-0 ml-5 ",
                                                                src: "/static/images/donor.png",
                                                                alt: "image",
                                                                width: "90",
                                                                height: "90"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "dropdown dropdown-hover",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        tabIndex: 1,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                            className: "px-0 -ml-4 -mt-4 cursor-pointer",
                                                                            src: "/static/images/Hover.png",
                                                                            alt: "image",
                                                                            width: "50",
                                                                            height: "50"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        tabIndex: 1,
                                                                        className: "dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "card-body",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                    className: "px-0 -ml-4 -mt-4 cursor-pointer",
                                                                                    src: "/static/images/Hover.png",
                                                                                    alt: "image",
                                                                                    width: "30",
                                                                                    height: "30"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    className: "text-lg",
                                                                                    children: "Hero, Royal and God tier donors are invited to an exclusive DirectEd Donor's Dinner taking place once a year at the University of Oxford."
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "flex justify-center items-center font-semibold text-sm",
                                                        children: "Donors' Dinner"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-auto md:w-2/5 h-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center items-center mt-2",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "box-border border border-[#999999] bg-white w-4/5 h-fit rounded-lg shadow",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-center font-semibold m-3 text-lg",
                                                children: "Naming Rights"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex-auto w-2/6 h-full",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            className: "px-0 ml-5 ",
                                                            src: "/static/images/rights.png",
                                                            alt: "image",
                                                            width: "90",
                                                            height: "90"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex-auto w-3/6 h-full",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-[13px] text-center",
                                                            children: "The donor naming rights for a given scholarship pool can be purchased for $3,000"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex-auto w-1/6",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "dropdown dropdown-hover",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    tabIndex: 1,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                        className: "cursor-pointer",
                                                                        src: "/static/images/Hover.png",
                                                                        alt: "image",
                                                                        width: "20",
                                                                        height: "20"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    tabIndex: 1,
                                                                    className: "dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "card-body",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                className: "px-0 -ml-4 -mt-4 cursor-pointer inline",
                                                                                src: "/static/images/Hover.png",
                                                                                alt: "image",
                                                                                width: "30",
                                                                                height: "30"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                className: "font-semibold",
                                                                                children: "What is A Naming Right?"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                                className: "text-sm",
                                                                                children: [
                                                                                    "Scholarship naming rights can be purchased. However, to protect the reputation and integrity of the scholarship, we reserve the right to reject and return donations from donors we deem, in our sole discretion, to be inappropriate to accept funds from. You can read the full terms",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                                        className: "text-blue-400 pl-2",
                                                                                        href: "https://www.notion.so/directed/Gift-Acceptance-Policy-8e12a9c8581447ad8d89daabafbc7e44",
                                                                                        passHref: true,
                                                                                        children: "here."
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FilterMenu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3371);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Hero__WEBPACK_IMPORTED_MODULE_0__]);
_Hero__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Modal_Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/gr"
var gr_ = __webpack_require__(8547);
;// CONCATENATED MODULE: ./components/Modal/Modal.tsx



const Modal = ({ open , onClose , children , className  })=>{
    const handleStopPropagation = (event)=>{
        event.stopPropagation();
    };
    const handleClose = (event)=>{
        handleStopPropagation(event);
        if (onClose) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "checkbox",
                checked: open,
                id: "my-modal",
                className: "modal-toggle"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "modal p-10",
                onClick: onClose,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: handleStopPropagation,
                    className: `modal-box ${className}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleClose,
                            className: "text-primary absolute top-2 right-2 z-50",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(gr_.GrFormClose, {
                                size: 20
                            })
                        }),
                        children
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Modal_Modal = (Modal);

;// CONCATENATED MODULE: ./components/Modal/index.ts



/***/ }),

/***/ 3671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8510);
/* harmony import */ var _meshsdk_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_meshsdk_react__WEBPACK_IMPORTED_MODULE_6__]);
_meshsdk_react__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const NavLinks = [
    {
        title: "Scholarship Pools",
        link: "/"
    },
    {
        title: "",
        link: "/progress"
    },
    {
        title: "Donors' Portal",
        link: "/Donors"
    }
];
const Navbar = ()=>{
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false);
    // const utxos = await wallet.getUtxos();
    // const addresses = await wallet.getUsedAddresses();
    // const signature = await wallet.signData(addresses[0], 'mesh');
    // const signedTx = await wallet.signTx(tx, partialSign?);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "bg-primary h-fit py-2 w-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container flex items-center justify-between w-full h-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "https://directed.dev/",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-3 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        id: "logo",
                                        src: "/static/images/logo.png",
                                        width: 50,
                                        height: 50,
                                        alt: "Direct Ed Logo"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-white text-l font-semibold",
                                                id: "title",
                                                children: "DirectEd Development"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-white",
                                                id: "subtitle",
                                                children: "Realising Potential"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "hidden md:flex items-center space-x-5",
                            children: [
                                NavLinks.map((link, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: link.link,
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: `text-xl text-white ${router.pathname === link.link ? "font-semibold" : "font-light"}`,
                                            children: link.title
                                        })
                                    })),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "dropdown dropdown-hover",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            tabIndex: 0,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/transactions",
                                                style: {
                                                    pointerEvents: "none"
                                                },
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: `text-xl text-white ${router.pathname === "/transactions" ? "font-semibold" : "font-light"}`
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            tabIndex: 0,
                                            className: "dropdown-content card card-compact w-60 p-2 shadow bg-white mt-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "card-body",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-lg font-semibold",
                                                    children: "The transaction page will be available after a donation has been made"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-light text-primary hover:bg-light font-semibold hover:border-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meshsdk_react__WEBPACK_IMPORTED_MODULE_6__.CardanoWallet, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                open: open,
                onClose: ()=>setOpen(false),
                className: "w-fit space-y-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "font-semibold text-2xl text-center w-64 capitalize",
                        children: "you have successfully connected a wallet!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setOpen(false),
                        className: "btn btn-primary btn-block",
                        children: "Close"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3671);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_0__]);
_Navbar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "AP": () => (/* reexport safe */ _Cards_PoolsCard__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "VM": () => (/* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "u_": () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "wp": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "zx": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9470);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1059);
/* harmony import */ var _Cards_PoolsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5879);
/* harmony import */ var _FilterMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1065);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8510);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7058);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3292);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_0__, _FilterMenu__WEBPACK_IMPORTED_MODULE_3__, _Hero__WEBPACK_IMPORTED_MODULE_6__]);
([_Navbar__WEBPACK_IMPORTED_MODULE_0__, _FilterMenu__WEBPACK_IMPORTED_MODULE_3__, _Hero__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;