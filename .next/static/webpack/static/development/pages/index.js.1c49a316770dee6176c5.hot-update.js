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
    className: "jsx-4161846568" + " " + "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.notHome && __jsx("h1", {
    className: "jsx-4161846568",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "adoptuj", __jsx("span", {
    className: "jsx-4161846568",
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
    className: "jsx-4161846568" + " " + "nav ".concat(isActive && "is-active"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-4161846568",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-4161846568",
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
    className: "jsx-4161846568",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Kontakt"))), __jsx("li", {
    className: "jsx-4161846568",
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
    className: "jsx-4161846568",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Logowanie"))), __jsx("li", {
    className: "jsx-4161846568",
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
    className: "jsx-4161846568" + " " + "signup-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Rejestracja"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4161846568",
    __self: this
  }, ".navbar.jsx-4161846568{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:60px;}.nav.jsx-4161846568{position:absolute;z-index:20;right:0;top:0;padding:25px;background:rgba(0,0,0,0.7);color:white;padding-top:20px;width:100%;-webkit-transform:translateY(-200px);-ms-transform:translateY(-200px);transform:translateY(-200px);-webkit-transition:-webkit-transform 0.2s ease;-webkit-transition:transform 0.2s ease;transition:transform 0.2s ease;}.nav.is-active.jsx-4161846568{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}ul.jsx-4161846568{list-style-type:none;}li.jsx-4161846568{margin-top:14px;}a.jsx-4161846568{color:#fff;}a.jsx-4161846568:hover{color:#f5f5f5;}h1.jsx-4161846568{font-size:1.2rem;}@media (min-width:1024px){.navbar.jsx-4161846568{height:auto;}.nav.jsx-4161846568{background:transparent;position:relative;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}ul.jsx-4161846568{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-4161846568{margin-top:0;margin-left:24px;}li.jsx-4161846568:last-child{margin-left:16px;}a.jsx-4161846568{-webkit-text-decoration:none;text-decoration:none;}.signup-btn.jsx-4161846568{background:var(--main-color);color:white;-webkit-transition:background 0.2s ease;transition:background 0.2s ease;border-radius:99px;padding:6px 18px;border:none;display:inline-block;}.signup-btn.jsx-4161846568:hover{background:#e3396b;}}@media (min-width:1280px){li.jsx-4161846568{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DUyxBQUcwQixBQU1LLEFBY1EsQUFJTCxBQUlMLEFBSUwsQUFJRyxBQUlHLEFBS0gsQUFJVyxBQU1WLEFBTUEsQUFLSSxBQUlJLEFBSVEsQUFVVixBQU1KLFdBekRuQixDQWFFLENBZ0JtQixDQXpCckIsQ0FzREUsQ0E5REYsQ0FZQSxBQTBCRSxDQTVEVyxDQThFWCxFQTVERixFQXlCc0IsTUExQ1osQUFtRU0sQ0FaZCxPQXRETSxJQTBDc0IsQUF5Qk0sRUFsRXJCLE9BNkRiLE1BNUQ4QixrQkFWTCxBQXVERSxTQTVDZixPQVNkLEtBUm1CLGlCQUNOLENBK0RVLFVBOURRLFFBcUM3QixDQTBCbUIsaUJBQ0wsWUFDUyxVQTlFWCxBQXVEUyxXQXdCckIsQ0E5RUYsdUNBYWlDLDBDQTBDL0IsMkVBekNGIiwiZmlsZSI6Ik06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIYW1idXJnZXIgZnJvbSBcIi4vSGFtYnVyZ2VyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgIHtwcm9wcy5ub3RIb21lICYmIChcclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBhZG9wdHVqPHNwYW4+endpZXJ6YWthPC9zcGFuPi5wbFxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICl9XHJcbiAgICAgIDxIYW1idXJnZXIgaXNBY3RpdmU9e2lzQWN0aXZlfSBzZXRJc0FjdGl2ZT17c2V0SXNBY3RpdmV9IC8+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgbmF2ICR7aXNBY3RpdmUgJiYgXCJpcy1hY3RpdmVcIn1gfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIva29udGFrdFwiPlxyXG4gICAgICAgICAgICAgIDxhPktvbnRha3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9nb3dhbmllXCI+XHJcbiAgICAgICAgICAgICAgPGE+TG9nb3dhbmllPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlamVzdHJhY2phXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2lnbnVwLWJ0blwiPlJlamVzdHJhY2phPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi5pcy1hY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zaWdudXAtYnRuIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMThweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2lnbnVwLWJ0bjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UzMzk2YjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXX0= */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Navbar\\\\Navbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.1c49a316770dee6176c5.hot-update.js.map