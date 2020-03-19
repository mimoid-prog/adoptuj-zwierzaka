webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/Navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hamburger */ "./components/Navbar/Hamburger.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Navbar\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Navbar = function Navbar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState[0],
      setIsActive = _useState[1];

  return __jsx("div", {
    className: "jsx-2435142423" + " " + "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.notHome && __jsx("h1", {
    className: "jsx-2435142423",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "adoptuj", __jsx("span", {
    className: "jsx-2435142423",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "zwierzaka"), ".pl"), __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isActive: isActive,
    setIsActive: setIsActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("nav", {
    className: "jsx-2435142423" + " " + "nav ".concat(isActive && "is-active"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2435142423",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-2435142423",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/kontakt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2435142423",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Kontakt"))), __jsx("li", {
    className: "jsx-2435142423",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/logowanie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2435142423",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Logowanie"))), __jsx("li", {
    className: "jsx-2435142423",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/rejestracja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2435142423" + " " + "signup-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Rejestracja"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2435142423",
    __self: this
  }, ".navbar.jsx-2435142423{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:60px;}.nav.jsx-2435142423{position:absolute;z-index:20;right:0;top:0;padding:25px;background:rgba(0,0,0,0.7);color:white;padding-top:20px;width:100%;-webkit-transform:translateY(-200px);-ms-transform:translateY(-200px);transform:translateY(-200px);-webkit-transition:-webkit-transform 0.2s ease;-webkit-transition:transform 0.2s ease;transition:transform 0.2s ease;}.nav.is-active.jsx-2435142423{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}ul.jsx-2435142423{list-style-type:none;}li.jsx-2435142423{margin-top:14px;}a.jsx-2435142423{color:#fff;}a.jsx-2435142423:hover{color:#f5f5f5;}h1.jsx-2435142423{font-size:1rem;}@media (min-width:1024px){.navbar.jsx-2435142423{height:auto;}.nav.jsx-2435142423{background:transparent;position:relative;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}ul.jsx-2435142423{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-2435142423{margin-top:0;margin-left:24px;}li.jsx-2435142423:last-child{margin-left:16px;}a.jsx-2435142423{-webkit-text-decoration:none;text-decoration:none;}.signup-btn.jsx-2435142423{background:var(--main-color);color:white;-webkit-transition:background 0.2s ease;transition:background 0.2s ease;border-radius:99px;padding:6px 18px;border:none;display:inline-block;}.signup-btn.jsx-2435142423:hover{background:#e3396b;}}@media (min-width:1280px){li.jsx-2435142423{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DUyxBQUcwQixBQU1LLEFBY1EsQUFJTCxBQUlMLEFBSUwsQUFJRyxBQUlDLEFBS0QsQUFJVyxBQU1WLEFBTUEsQUFLSSxBQUlJLEFBSVEsQUFVVixBQU1KLFdBekRuQixDQWFFLENBZ0JtQixDQXpCckIsQ0FJQSxBQWtERSxDQTlERixDQXNDRSxDQTVEVyxDQThFWCxFQTVERixFQXlCc0IsTUExQ1osQUFtRU0sQ0FaZCxPQXRETSxJQTBDc0IsQUF5Qk0sRUFsRXJCLE9BNkRiLE1BNUQ4QixrQkFWTCxBQXVERSxTQTVDZixPQVNkLEtBUm1CLGlCQUNOLENBK0RVLFVBOURRLFFBcUM3QixDQTBCbUIsaUJBQ0wsWUFDUyxVQTlFWCxBQXVEUyxXQXdCckIsQ0E5RUYsdUNBYWlDLDBDQTBDL0IsMkVBekNGIiwiZmlsZSI6Ik06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIYW1idXJnZXIgZnJvbSBcIi4vSGFtYnVyZ2VyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgIHtwcm9wcy5ub3RIb21lICYmIChcclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBhZG9wdHVqPHNwYW4+endpZXJ6YWthPC9zcGFuPi5wbFxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICl9XHJcbiAgICAgIDxIYW1idXJnZXIgaXNBY3RpdmU9e2lzQWN0aXZlfSBzZXRJc0FjdGl2ZT17c2V0SXNBY3RpdmV9IC8+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgbmF2ICR7aXNBY3RpdmUgJiYgXCJpcy1hY3RpdmVcIn1gfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIva29udGFrdFwiPlxyXG4gICAgICAgICAgICAgIDxhPktvbnRha3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9nb3dhbmllXCI+XHJcbiAgICAgICAgICAgICAgPGE+TG9nb3dhbmllPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlamVzdHJhY2phXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2lnbnVwLWJ0blwiPlJlamVzdHJhY2phPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi5pcy1hY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNpZ251cC1idG46aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMzM5NmI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Navbar\\\\Navbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.fedd4770bfa4ad83b086.hot-update.js.map