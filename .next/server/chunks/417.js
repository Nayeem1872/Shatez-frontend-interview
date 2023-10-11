exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 58138:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54802));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1843));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44748))

/***/ }),

/***/ 50349:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 1843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SessionProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function SessionProvider({ children, session }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
        children: children
    });
}


/***/ }),

/***/ 44748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Example)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(74284);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var compiled_react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/menu/menu.js + 6 modules
var menu = __webpack_require__(84711);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 4 modules
var transition = __webpack_require__(82596);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(46140);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BellIcon.js
var BellIcon = __webpack_require__(95050);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var CalendarIcon = __webpack_require__(69055);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChartPieIcon.js
var ChartPieIcon = __webpack_require__(23272);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js
var ChevronDownIcon = __webpack_require__(34129);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Cog6ToothIcon.js
var Cog6ToothIcon = __webpack_require__(86885);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js
var DocumentDuplicateIcon = __webpack_require__(3094);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/FolderIcon.js
var FolderIcon = __webpack_require__(41754);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js
var HomeIcon = __webpack_require__(69719);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/UsersIcon.js
var UsersIcon = __webpack_require__(13979);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/20/solid/esm/MagnifyingGlassIcon.js
var MagnifyingGlassIcon = __webpack_require__(67966);
;// CONCATENATED MODULE: ./app/dashboard/SearchForm.tsx



const SearchForm = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "relative flex flex-1",
        action: "#",
        method: "GET",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "search-field",
                className: "sr-only",
                children: "Search"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MagnifyingGlassIcon/* default */.Z, {
                className: "pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: "search-field",
                className: "block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm",
                placeholder: "Search...",
                type: "search",
                name: "search"
            })
        ]
    });
};
/* harmony default export */ const dashboard_SearchForm = (SearchForm);

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js + 24 modules
var dialog = __webpack_require__(53748);
;// CONCATENATED MODULE: ./app/dashboard/SidebarContent.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const SidebarContent = ({ navigation, teams, session })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex h-16 shrink-0 items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "h-8 w-auto",
                    src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                    alt: "Your Company"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "flex flex-1 flex-col",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    role: "list",
                    className: "flex flex-1 flex-col gap-y-7",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                role: "list",
                                className: "-mx-2 space-y-1",
                                children: navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: item.href,
                                            className: classNames(item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover-bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                                                    className: classNames(item.current ? "text-indigo-600" : "text-gray-400 group-hover-text-indigo-600", "h-6 w-6 shrink-0"),
                                                    "aria-hidden": "true"
                                                }),
                                                item.name
                                            ]
                                        })
                                    }, item.name))
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-xs font-semibold leading-6 text-gray-400",
                                    children: "Your teams"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    role: "list",
                                    className: "-mx-2 mt-2 space-y-1",
                                    children: teams.map((team)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: team.href,
                                                className: classNames(team.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover-bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: classNames(team.current ? "text-indigo-600 border-indigo-600" : "text-gray-400 border-gray-200 group-hover-border-indigo-600 group-hover-text-indigo-600", "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"),
                                                        children: team.initial
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "truncate",
                                                        children: team.name
                                                    })
                                                ]
                                            })
                                        }, team.name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mt-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "#",
                                className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover-bg-gray-50 hover-text-indigo-600",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Cog6ToothIcon/* default */.Z, {
                                        className: "h-6 w-6 shrink-0 text-gray-400 group-hover-text-indigo-600",
                                        "aria-hidden": "true"
                                    }),
                                    "Settings"
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const dashboard_SidebarContent = (SidebarContent);

// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(57048);
;// CONCATENATED MODULE: ./app/dashboard/MobileSidebar.tsx





const MobileSidebar = ({ sidebarOpen, setSidebarOpen, navigation, teams })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Root, {
        show: sidebarOpen,
        as: (compiled_react_default()).Fragment,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog/* Dialog */.V, {
            as: "div",
            className: "relative z-50 lg:hidden",
            onClose: ()=>setSidebarOpen(false),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                    as: (compiled_react_default()).Fragment,
                    enter: "transition-opacity ease-linear duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "transition-opacity ease-linear duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed inset-0 bg-gray-900/80"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed inset-0 flex",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                        as: (compiled_react_default()).Fragment,
                        enter: "transition ease-in-out duration-300 transform",
                        enterFrom: "-translate-x-full",
                        enterTo: "translate-x-0",
                        leave: "transition ease-in-out duration-300 transform",
                        leaveFrom: "translate-x-0",
                        leaveTo: "-translate-x-full",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog/* Dialog */.V.Panel, {
                            className: "relative mr-16 flex w-full max-w-xs flex-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                                    as: (compiled_react_default()).Fragment,
                                    enter: "ease-in-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in-out duration-300",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute left-full top-0 flex w-16 justify-center pt-5",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            type: "button",
                                            className: "-m-2.5 p-2.5",
                                            onClick: ()=>setSidebarOpen(false),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Close sidebar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                                                    className: "h-6 w-6 text-white",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex h-16 shrink-0 items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                className: "h-8 w-auto",
                                                src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                                                alt: "Your Company"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(dashboard_SidebarContent, {
                                            navigation: navigation,
                                            teams: teams,
                                            session: undefined
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const dashboard_MobileSidebar = (MobileSidebar);

;// CONCATENATED MODULE: ./app/dashboard/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
















const navigation = [
    {
        name: "Dashboard",
        href: "#",
        icon: HomeIcon/* default */.Z,
        current: true
    },
    {
        name: "Team",
        href: "#",
        icon: UsersIcon/* default */.Z,
        current: false
    },
    {
        name: "Projects",
        href: "#",
        icon: FolderIcon/* default */.Z,
        current: false
    },
    {
        name: "Calendar",
        href: "#",
        icon: CalendarIcon/* default */.Z,
        current: false
    },
    {
        name: "Documents",
        href: "#",
        icon: DocumentDuplicateIcon/* default */.Z,
        current: false
    },
    {
        name: "Reports",
        href: "../stats.tsx",
        icon: ChartPieIcon/* default */.Z,
        current: false
    }
];
const teams = [
    {
        id: 1,
        name: "Heroicons",
        href: "#",
        initial: "H",
        current: false
    },
    {
        id: 2,
        name: "Tailwind Labs",
        href: "#",
        initial: "T",
        current: false
    },
    {
        id: 3,
        name: "Workcation",
        href: "#",
        initial: "W",
        current: false
    }
];
const userNavigation = [
    {
        name: "Your profile",
        href: "#"
    },
    {
        name: "Sign out",
        href: "#"
    }
];
function page_classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Example() {
    const [sidebarOpen, setSidebarOpen] = (0,react_.useState)(false);
    const session = (0,react.useSession)();
    console.log(session);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(dashboard_MobileSidebar, {
                    sidebarOpen: sidebarOpen,
                    setSidebarOpen: setSidebarOpen,
                    navigation: navigation,
                    teams: teams
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex h-16 shrink-0 items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "h-8 w-auto",
                                    src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                                    alt: "Your Company"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: "flex flex-1 flex-col",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    role: "list",
                                    className: "flex flex-1 flex-col gap-y-7",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                role: "list",
                                                className: "-mx-2 space-y-1",
                                                children: navigation.map((item)=>{
                                                    return session?.data?.user?.role === "admin" ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: item.href,
                                                            className: page_classNames(item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                                                                    className: page_classNames(item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600", "h-6 w-6 shrink-0"),
                                                                    "aria-hidden": "true"
                                                                }),
                                                                item.name
                                                            ]
                                                        })
                                                    }, item.name) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                        children: item.name === "Reports" ? /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: item.href,
                                                                className: page_classNames(item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(item.icon, {
                                                                        className: page_classNames(item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600", "h-6 w-6 shrink-0"),
                                                                        "aria-hidden": "true"
                                                                    }),
                                                                    item.name
                                                                ]
                                                            })
                                                        }, item.name) : null
                                                    });
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-xs font-semibold leading-6 text-gray-400",
                                                    children: "Your teams"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    role: "list",
                                                    className: "-mx-2 mt-2 space-y-1",
                                                    children: teams.map((team)=>{
                                                        return session?.data?.user?.role === "admin" && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: team.href,
                                                                className: page_classNames(team.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"),
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: page_classNames(team.current ? "text-indigo-600 border-indigo-600" : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600", "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"),
                                                                        children: team.initial
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "truncate",
                                                                        children: team.name
                                                                    })
                                                                ]
                                                            })
                                                        }, team.name);
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mt-auto",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: "#",
                                                className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Cog6ToothIcon/* default */.Z, {
                                                        className: "h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600",
                                                        "aria-hidden": "true"
                                                    }),
                                                    "Settings"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "lg:pl-72",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "sticky top-0 z-40 lg:mx-auto lg:max-w-full yokko",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "button",
                                    className: "-m-2.5 p-2.5 text-gray-700 lg:hidden",
                                    onClick: ()=>setSidebarOpen(true),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Open sidebar"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon/* default */.Z, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "h-6 w-px bg-gray-200 lg:hidden",
                                    "aria-hidden": "true"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(dashboard_SearchForm, {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center gap-x-4 lg:gap-x-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    type: "button",
                                                    className: "-m-2.5 p-2.5 text-gray-400 hover:text-gray-500",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "sr-only",
                                                            children: "View notifications"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(BellIcon/* default */.Z, {
                                                            className: "h-6 w-6",
                                                            "aria-hidden": "true"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200",
                                                    "aria-hidden": "true"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v, {
                                                    as: "div",
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v.Button, {
                                                            className: "-m-1.5 flex items-center p-1.5",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "sr-only",
                                                                    children: "Open user menu"
                                                                }),
                                                                session?.data?.user?.image ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "relative h-10 w-10",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                        src: session.data.user.image,
                                                                        alt: session.data.user.image,
                                                                        className: "inline-block rounded-full",
                                                                        fill: true
                                                                    })
                                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                        className: "h-full w-full text-stone-300",
                                                                        fill: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "hidden lg:flex lg:items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "ml-4 text-sm font-semibold leading-6 text-gray-900",
                                                                            "aria-hidden": "true",
                                                                            children: session?.data?.user?.name
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(ChevronDownIcon/* default */.Z, {
                                                                            className: "ml-2 h-5 w-5 text-gray-400",
                                                                            "aria-hidden": "true"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                                                            as: react_.Fragment,
                                                            enter: "transition ease-out duration-100",
                                                            enterFrom: "transform opacity-0 scale-95",
                                                            enterTo: "transform opacity-100 scale-100",
                                                            leave: "transition ease-in duration-75",
                                                            leaveFrom: "transform opacity-100 scale-100",
                                                            leaveTo: "transform opacity-0 scale-95",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Items, {
                                                                className: "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none",
                                                                children: userNavigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu */.v.Item, {
                                                                        children: ({ active })=>item.name === "Sign out" ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                                onClick: ()=>(0,react.signOut)(),
                                                                                className: page_classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer"),
                                                                                children: item.name
                                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                href: item.href,
                                                                                className: page_classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900"),
                                                                                children: item.name
                                                                            })
                                                                    }, item.name))
                                                            })
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
                })
            ]
        })
    });
}


/***/ }),

/***/ 54802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74284);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43500);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Home() {
    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
    const handleLogin = async (selectedRole)=>{
        setRole(selectedRole);
    };
    const handleGoogleLogin = async ()=>{
        // Use signIn function with the role as a query parameter
        const result = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)("google", {
            role
        });
    // If you want to pass additional data, use it like this:
    // await signIn('google', { role, otherData: 'value' });
    };
    console.log(handleGoogleLogin);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "flex min-h-screen flex-col items-center justify-center p-24",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl font-semibold mb-8",
                children: "Shatez Frontend Interview Task"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: handleGoogleLogin,
                className: "flex items-center px-4 py-2 border rounded-md bg-white hover-bg-gray-100 focus:outline-none focus-ring focus-ring-gray-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaGoogle */ .ldW, {
                        className: "mr-2"
                    }),
                    " Login with Gmail"
                ]
            })
        ]
    });
}


/***/ }),

/***/ 22572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\shatez-interview-frontend-master\shatez-interview-frontend-master\app\dashboard\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 60995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(92411);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/@auth/firebase-adapter/index.js
var firebase_adapter = __webpack_require__(59939);
// EXTERNAL MODULE: external "firebase-admin/app"
var app_ = __webpack_require__(60325);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(49861);
var next_auth_default = /*#__PURE__*/__webpack_require__.n(next_auth);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/google.js
var google = __webpack_require__(51989);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts




const authOptions = {
    // Configure one or more authentication providers
    providers: [
        (0,google/* default */.Z)({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            profile (profile) {
                console.log("Google profile data:", profile);
                return {
                    role: profile.email === "work25355@gmail.com" ? "admin" : "user",
                    id: profile.sub,
                    email: profile.email,
                    image: profile.picture,
                    name: profile.name
                };
            }
        })
    ],
    callbacks: {
        session ({ session, user }) {
            session.user.role = user.role;
            console.log(session);
            return session;
        // console.log(user)
        }
    },
    // callbacks: {
    //   async jwt(token, user) {
    //     if (user) {
    //       token.role = user.role;
    //       // Add other properties if necessary
    //     }
    //     return token;
    //   },
    //   async session(session, token) {
    //     session.user.role = token.role;
    //     // Add other properties if necessary
    //     return session;
    //   },
    // },
    adapter: (0,firebase_adapter/* FirestoreAdapter */.E1)({
        credential: (0,app_.cert)({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
        })
    })
};
/* harmony default export */ const _nextauth_ = (next_auth_default()(authOptions));

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/SessionProvider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\shatez-interview-frontend-master\shatez-interview-frontend-master\app\SessionProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const SessionProvider = (__default__);
// EXTERNAL MODULE: ./app/page.tsx
var page = __webpack_require__(92838);
// EXTERNAL MODULE: ./app/dashboard/page.tsx
var dashboard_page = __webpack_require__(22572);
;// CONCATENATED MODULE: ./app/layout.tsx








async function RootLayout({ children }) {
    const session = await (0,next_auth.getServerSession)(authOptions);
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(SessionProvider, {
                session: session,
                children: !session ? /*#__PURE__*/ jsx_runtime_.jsx(page["default"], {}) : /*#__PURE__*/ jsx_runtime_.jsx(dashboard_page["default"], {})
            })
        })
    });
}


/***/ }),

/***/ 92838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\shatez-interview-frontend-master\shatez-interview-frontend-master\app\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;