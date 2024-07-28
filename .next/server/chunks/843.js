"use strict";
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 843:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1696);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1690);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);

/* eslint-disable @next/next/no-css-tags */ 



const MainLayout = ({ children , logoClassText  })=>{
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    React.useEffect(()=>{
        var navbar = navbarRef.current, logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            // logo.setAttribute("src", "/assets/img/logo-light.png");
            } else {
                navbar.classList.remove("nav-scroll");
            // logo.setAttribute("src", "/assets/img/logo-light.png");
            }
        });
    }, [
        navbarRef
    ]);
    return(/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Head, {
                children: /*#__PURE__*/ _jsx("link", {
                    rel: "stylesheet",
                    href: "/assets/css/style.css"
                })
            }),
            /*#__PURE__*/ _jsx(Navbar, {
                navbarRef: navbarRef,
                logoRef: logoRef,
                logoClass: logoClassText
            }),
            children,
            /*#__PURE__*/ _jsx(Footer, {
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (MainLayout)));


/***/ })

};
;