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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./components/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookies-next */ \"./node_modules/cookies-next/lib/index.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__]);\n_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst data = [\n    {\n        title: \"Kagumo-Djed Scholarship Pool\",\n        image: \"/static/images/kagumo.jpg\"\n    }\n];\nconst Home = ()=>{\n    _s();\n    const [modal, setModal] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleDonationModal = ()=>{\n        setModal(\"\");\n        router.push(\"/progress\");\n    };\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (router.query && router.query.from === \"donation\") {\n            setModal(\"donate-done\");\n        }\n    }, [\n        router.query\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (!(0,cookies_next__WEBPACK_IMPORTED_MODULE_6__.hasCookie)(\"direct-ed-user\")) {\n            setModal(\"how-to-donate\");\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_6__.setCookie)(\"direct-ed-user\", \"not a stranger\", {\n                maxAge: 60 * 60 * 24\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Direct Ed - Scholarship Pools\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container grid grid-cols-1 gap-y-7 py-8 justify-items-center h-fit\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.FilterMenu, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined),\n                    data.map((d)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.PoolCard, {\n                            ...d\n                        }, d.title, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                open: modal === \"donate-done\",\n                onClose: ()=>setModal(\"\"),\n                className: \"h-fit rounded-md bg-light w-fit p-5 md:w-2/5 space-y-6 flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold text-dark2 text-center\",\n                        children: \"Thank you for your donation to DirectEd\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum debitis eligendi necessitatibus? Nam officiis repudiandae eveniet doloremque, a esse inventore odit similique illo at quod enim labore atque. Ipsa, tempore.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onCick: handleDonationModal,\n                        className: \"btn-ghost bg-light2 text-primary font-bold text-lg w-fit\",\n                        children: \"View Scholar’s Progress\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                open: modal === \"how-to-donate\",\n                onClose: ()=>setModal(\"\"),\n                className: \"h-fit rounded-md bg-light w-fit p-5 md:w-1/4 space-y-5 flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold text-dark2 text-center\",\n                        children: \"How To Donate\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-center\",\n                        children: \"To donate, navigate to the scholarship pool of your choice and press donate. There’s no need to connect your wallet for now! After this step, you’ll see two options: Warrior tier (40 ADA) and Hero tier (1000 ADA).\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-center\",\n                        children: \"After selecting an option and pressing continue, you’ll be directed to the dedicated NMKR pay gateway for you to complete your donation!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        className: \"text-3xl font-bold text-dark2 text-center\",\n                        children: \"I don’t know about crypto. Can I still donate?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-center\",\n                        children: \"If you are not a crypto user and want to donate using credit card, here's a video guide that'll walk you through the process\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-40 relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            onClick: ()=>setModal(\"video\"),\n                            src: \"/static/images/video.png\",\n                            width: \"300\",\n                            height: \"200\",\n                            alt: \"image\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onCick: handleDonationModal,\n                        className: \"btn-ghost bg-light2 text-primary font-bold text-lg w-fit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"https://www.notion.so/directed/About-DirectEd-Lions-Collection-0e6003940695493b81c3c1f16841d208\",\n                            passHref: true,\n                            onClick: ()=>setModal(\"video\"),\n                            children: \"Learn more\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n                open: modal === \"video\",\n                onClose: ()=>setModal(\"how-to-donate\"),\n                className: \"h-64 relative rounded-3xl overflow-hidden w-full p-5 md:w-2/5 flex flex-col justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    href: \"https://www.loom.com/share/ad317540b22b4722b71410f15fb84a14\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        src: \"/static/images/video.png\",\n                        alt: \"image\",\n                        width: \"300\",\n                        height: \"200\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\work\\\\Directed-dapp\\\\pages\\\\index.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"mFmH2MzzurzwPjvssjUqk1A8R6A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0U7R0F4SE16Qjs7UUFLV1Isa0RBQVNBOzs7S0FMcEJRO0FBMEhOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgUG9vbENhcmQsIEZpbHRlck1lbnUgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmltcG9ydCB7IGhhc0Nvb2tpZSwgc2V0Q29va2llIH0gZnJvbSBcImNvb2tpZXMtbmV4dFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcblxyXG50eXBlIERhdGFUeXBlID0ge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGRhdGE6IERhdGFUeXBlW10gPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiS2FndW1vLURqZWQgU2Nob2xhcnNoaXAgUG9vbFwiLFxyXG4gICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWFnZXMva2FndW1vLmpwZ1wiLFxyXG4gIH0sXHJcbiAgLy8ge1xyXG4gIC8vICAgdGl0bGU6IFwiU3RyYXRobW9yZSBIaWdoIFNjaG9vbFwiLFxyXG4gIC8vICAgaW1hZ2U6IFwiL3N0YXRpYy9pbWFnZXMvcGVyc29uMi5wbmdcIixcclxuICAvLyB9XHJcbl07XHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IFJlYWN0LnVzZVN0YXRlPFxyXG4gICAgXCJkb25hdGUtZG9uZVwiIHwgXCJob3ctdG8tZG9uYXRlXCIgfCBcInZpZGVvXCIgfCBcIlwiXHJcbiAgPihcIlwiKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvbmF0aW9uTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbChcIlwiKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL3Byb2dyZXNzXCIpO1xyXG4gIH07XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucXVlcnkgJiYgcm91dGVyLnF1ZXJ5LmZyb20gPT09IFwiZG9uYXRpb25cIikge1xyXG4gICAgICBzZXRNb2RhbChcImRvbmF0ZS1kb25lXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaGFzQ29va2llKFwiZGlyZWN0LWVkLXVzZXJcIikpIHtcclxuICAgICAgc2V0TW9kYWwoXCJob3ctdG8tZG9uYXRlXCIpO1xyXG4gICAgICBzZXRDb29raWUoXCJkaXJlY3QtZWQtdXNlclwiLCBcIm5vdCBhIHN0cmFuZ2VyXCIsIHsgbWF4QWdlOiA2MCAqIDYwICogMjQgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkRpcmVjdCBFZCAtIFNjaG9sYXJzaGlwIFBvb2xzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JpZCBncmlkLWNvbHMtMSBnYXAteS03IHB5LTggIGp1c3RpZnktaXRlbXMtY2VudGVyIGgtZml0XCI+XHJcbiAgXHJcbiAgICAgICAgICB7LyogPEJzRmlsdGVyIGNsYXNzTmFtZT1cInAtMCB0ZXh0LVs0MHB4XSBjdXJzb3ItcG9pbnRlclwiIC8+ICovfVxyXG4gICAgICAgICAgPEZpbHRlck1lbnUgLz5cclxuXHJcbiAgICAgICAge2RhdGEubWFwKChkOiBEYXRhVHlwZSkgPT4gKFxyXG4gICAgICAgICAgPFBvb2xDYXJkIGtleT17ZC50aXRsZX0gey4uLmR9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgey8qIERvbmF0ZSBNb2RhbCAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bW9kYWwgPT09IFwiZG9uYXRlLWRvbmVcIn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRNb2RhbChcIlwiKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJoLWZpdCByb3VuZGVkLW1kIGJnLWxpZ2h0IHctZml0IHAtNSBtZDp3LTIvNSBzcGFjZS15LTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWRhcmsyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBUaGFuayB5b3UgZm9yIHlvdXIgZG9uYXRpb24gdG8gRGlyZWN0RWRcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRG9sb3J1bVxyXG4gICAgICAgICAgZGViaXRpcyBlbGlnZW5kaSBuZWNlc3NpdGF0aWJ1cz8gTmFtIG9mZmljaWlzIHJlcHVkaWFuZGFlIGV2ZW5pZXRcclxuICAgICAgICAgIGRvbG9yZW1xdWUsIGEgZXNzZSBpbnZlbnRvcmUgb2RpdCBzaW1pbGlxdWUgaWxsbyBhdCBxdW9kIGVuaW0gbGFib3JlXHJcbiAgICAgICAgICBhdHF1ZS4gSXBzYSwgdGVtcG9yZS5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2ljaz17aGFuZGxlRG9uYXRpb25Nb2RhbH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1naG9zdCBiZy1saWdodDIgdGV4dC1wcmltYXJ5IGZvbnQtYm9sZCB0ZXh0LWxnIHctZml0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7XCJWaWV3IFNjaG9sYXLigJlzIFByb2dyZXNzXCJ9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIHsvKiBIb3cgVG8gTW9kYWwgKi99XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e21vZGFsID09PSBcImhvdy10by1kb25hdGVcIn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRNb2RhbChcIlwiKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJoLWZpdCByb3VuZGVkLW1kIGJnLWxpZ2h0IHctZml0IHAtNSBtZDp3LTEvNCBzcGFjZS15LTUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWRhcmsyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBIb3cgVG8gRG9uYXRlXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBUbyBkb25hdGUsIG5hdmlnYXRlIHRvIHRoZSBzY2hvbGFyc2hpcCBwb29sIG9mIHlvdXIgY2hvaWNlIGFuZCBwcmVzcyBkb25hdGUuIFxyXG4gICAgICAgICAgVGhlcmXigJlzIG5vIG5lZWQgdG8gY29ubmVjdCB5b3VyIHdhbGxldCBmb3Igbm93ISBBZnRlciB0aGlzIHN0ZXAsIHlvdeKAmWxsIHNlZSB0d28gXHJcbiAgICAgICAgICBvcHRpb25zOiBXYXJyaW9yIHRpZXIgKDQwIEFEQSkgYW5kIEhlcm8gdGllciAoMTAwMCBBREEpLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICBBZnRlciBzZWxlY3RpbmcgYW4gb3B0aW9uIGFuZCBwcmVzc2luZyBjb250aW51ZSwgeW914oCZbGwgYmUgZGlyZWN0ZWQgdG8gdGhlIGRlZGljYXRlZCBcclxuICAgICAgICAgIE5NS1IgcGF5IGdhdGV3YXkgZm9yIHlvdSB0byBjb21wbGV0ZSB5b3VyIGRvbmF0aW9uIVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZGFyazIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIEkgZG9u4oCZdCBrbm93IGFib3V0IGNyeXB0by4gQ2FuIEkgc3RpbGwgZG9uYXRlP1xyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICBJZiB5b3UgYXJlIG5vdCBhIGNyeXB0byB1c2VyIGFuZCB3YW50IHRvIGRvbmF0ZSB1c2luZyBjcmVkaXQgY2FyZCwgaGVyZSdzIGEgdmlkZW8gZ3VpZGUgdGhhdCdsbCB3YWxrIHlvdSB0aHJvdWdoIHRoZSBwcm9jZXNzXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTQwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWwoXCJ2aWRlb1wiKX1cclxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvdmlkZW8ucG5nXCIgd2lkdGg9XCIzMDBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxyXG4gICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2ljaz17aGFuZGxlRG9uYXRpb25Nb2RhbH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1naG9zdCBiZy1saWdodDIgdGV4dC1wcmltYXJ5IGZvbnQtYm9sZCB0ZXh0LWxnIHctZml0XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtcImh0dHBzOi8vd3d3Lm5vdGlvbi5zby9kaXJlY3RlZC9BYm91dC1EaXJlY3RFZC1MaW9ucy1Db2xsZWN0aW9uLTBlNjAwMzk0MDY5NTQ5M2I4MWMzYzFmMTY4NDFkMjA4XCJ9IHBhc3NIcmVmXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsKFwidmlkZW9cIil9XHJcbiAgICAgICAgICAgIC8vIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAvLyBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgTGVhcm4gbW9yZVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qIFZpZGVvIG1vZGFsICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXttb2RhbCA9PT0gXCJ2aWRlb1wifVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE1vZGFsKFwiaG93LXRvLWRvbmF0ZVwiKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJoLTY0IHJlbGF0aXZlIHJvdW5kZWQtM3hsIG92ZXJmbG93LWhpZGRlbiAgdy1mdWxsIHAtNSBtZDp3LTIvNSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmxvb20uY29tL3NoYXJlL2FkMzE3NTQwYjIyYjQ3MjJiNzE0MTBmMTVmYjg0YTE0XCI+XHJcbiAgICAgICAgPEltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3ZpZGVvLnBuZ1wiIGFsdD1cImltYWdlXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIyMDBcIi8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJCdXR0b24iLCJNb2RhbCIsIlBvb2xDYXJkIiwiRmlsdGVyTWVudSIsInVzZVJvdXRlciIsIkxpbmsiLCJoYXNDb29raWUiLCJzZXRDb29raWUiLCJJbWFnZSIsImRhdGEiLCJ0aXRsZSIsImltYWdlIiwiSG9tZSIsIm1vZGFsIiwic2V0TW9kYWwiLCJ1c2VTdGF0ZSIsInJvdXRlciIsImhhbmRsZURvbmF0aW9uTW9kYWwiLCJwdXNoIiwidXNlRWZmZWN0IiwicXVlcnkiLCJmcm9tIiwibWF4QWdlIiwibWFpbiIsImNsYXNzTmFtZSIsIm1hcCIsImQiLCJvcGVuIiwib25DbG9zZSIsImgxIiwicCIsIm9uQ2ljayIsImg2IiwiZGl2Iiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaHJlZiIsInBhc3NIcmVmIiwiYSIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});