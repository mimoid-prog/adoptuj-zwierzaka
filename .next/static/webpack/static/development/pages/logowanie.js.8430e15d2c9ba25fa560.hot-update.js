webpackHotUpdate("static\\development\\pages\\logowanie.js",{

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
    className: "jsx-3845454535" + " " + "navbar ".concat(props.notHome ? "not-home" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.notHome && __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3845454535" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3845454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "adoptuj", __jsx("span", {
    className: "jsx-3845454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "zwierzaka"), ".pl"))), __jsx("div", {
    className: "jsx-3845454535" + " " + "hamburger-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isActive: isActive,
    setIsActive: setIsActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("nav", {
    className: "jsx-3845454535" + " " + "nav ".concat(isActive ? "is-active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3845454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3845454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/kontakt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3845454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Kontakt"))), __jsx("li", {
    className: "jsx-3845454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/logowanie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3845454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Logowanie"))), __jsx("li", {
    className: "jsx-3845454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/rejestracja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3845454535" + " " + "signup-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Rejestracja"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3845454535",
    __self: this
  }, ".navbar.jsx-3845454535{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:25px 0;}.nav.jsx-3845454535{position:absolute;z-index:20;right:0;top:0;padding:25px;background:rgba(0,0,0,0.7);color:white;padding-top:20px;width:100%;-webkit-transform:translateY(-200px);-ms-transform:translateY(-200px);transform:translateY(-200px);-webkit-transition:-webkit-transform 0.2s ease;-webkit-transition:transform 0.2s ease;transition:transform 0.2s ease;}.nav.is-active.jsx-3845454535{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}ul.jsx-3845454535{list-style-type:none;}li.jsx-3845454535{margin-bottom:14px;}li.jsx-3845454535:last-child{margin-bottom:0;}a.jsx-3845454535{color:#fff;}a.jsx-3845454535:hover{color:#f5f5f5;}.hamburger-box.jsx-3845454535{position:relative;height:32px;width:40px;}.not-home.jsx-3845454535{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.not-home.jsx-3845454535 .title.jsx-3845454535{-webkit-text-decoration:none;text-decoration:none;}.not-home.jsx-3845454535 h1.jsx-3845454535{font-size:1.5rem;color:var(--font-color);}.not-home.jsx-3845454535 h1.jsx-3845454535 span.jsx-3845454535{color:var(--main-color);}.not-home.jsx-3845454535 a.jsx-3845454535{color:var(--font-color);}.not-home.jsx-3845454535 .signup-btn.jsx-3845454535{color:#fff;}@media (min-width:1024px){.navbar.jsx-3845454535{height:auto;}.nav.jsx-3845454535{background:transparent;position:relative;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);padding:0;}ul.jsx-3845454535{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-3845454535{margin-bottom:0;margin-left:24px;}li.jsx-3845454535:last-child{margin-left:16px;}a.jsx-3845454535{-webkit-text-decoration:none;text-decoration:none;}.signup-btn.jsx-3845454535{background:var(--main-color);color:white;-webkit-transition:background 0.2s ease;transition:background 0.2s ease;border-radius:99px;padding:6px 18px;border:none;display:inline-block;}.signup-btn.jsx-3845454535:hover{background:#e3396b;}}@media (min-width:1280px){li.jsx-3845454535{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDUyxBQUcwQixBQU9LLEFBY1EsQUFJTCxBQUlGLEFBSUgsQUFJTCxBQUlHLEFBSUksQUFNWSxBQUlULEFBSUosQUFLTyxBQUlBLEFBSWIsQUFLRyxBQUlXLEFBT1YsQUFNRyxBQUtDLEFBSUksQUFJUSxBQVVWLEFBTUosV0FyRm5CLEFBbUNBLENBS0UsRUFwQ0YsQ0FrRkUsQ0ExRkYsQUE2RHFCLENBbkNLLEFBd0N4QixDQTVGVyxBQXNDQyxDQWhCZCxBQXdGRSxFQTVGRixFQXdEc0IsQ0FqQnRCLEFBSUEsS0E1RFUsQUFtR00sQ0E3REgsR0FpRFgsSUF0Rk0sSUFzQ1IsQUFhQSxBQXNCOEIsQUEwQk0sRUFsR3JCLE9BNkNmLEFBZ0RFLE1BNUY4QixrQkFYWCxBQXdGUSxTQTVFZixPQVNkLEtBUm1CLGlCQUNOLENBK0ZVLEVBMUR2QixRQXBDK0IsUUFvRWpCLENBMkJPLFNBMUJuQixRQTJCYyxZQUNTLE1BL0dFLElBd0ZKLFdBd0JyQix3Q0FqRytCLDBDQWRoQixBQXdGZixlQXZGRiw0REFjQSIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxOYXZiYXJcXE5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gXCIuL0hhbWJ1cmdlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdmJhciAke3Byb3BzLm5vdEhvbWUgPyBcIm5vdC1ob21lXCIgOiBcIlwifWB9PlxyXG4gICAgICB7cHJvcHMubm90SG9tZSAmJiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICBhZG9wdHVqPHNwYW4+endpZXJ6YWthPC9zcGFuPi5wbFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XHJcbiAgICAgICAgPEhhbWJ1cmdlciBpc0FjdGl2ZT17aXNBY3RpdmV9IHNldElzQWN0aXZlPXtzZXRJc0FjdGl2ZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgbmF2ICR7aXNBY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIva29udGFrdFwiPlxyXG4gICAgICAgICAgICAgIDxhPktvbnRha3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9nb3dhbmllXCI+XHJcbiAgICAgICAgICAgICAgPGE+TG9nb3dhbmllPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlamVzdHJhY2phXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2lnbnVwLWJ0blwiPlJlamVzdHJhY2phPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi5pcy1hY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGFtYnVyZ2VyLWJveCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubm90LWhvbWUge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5vdC1ob21lIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubm90LWhvbWUgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ub3QtaG9tZSBoMSBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ub3QtaG9tZSBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ub3QtaG9tZSAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNpZ251cC1idG4ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxOHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zaWdudXAtYnRuOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTMzOTZiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdfQ== */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Navbar\\\\Navbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=logowanie.js.8430e15d2c9ba25fa560.hot-update.js.map