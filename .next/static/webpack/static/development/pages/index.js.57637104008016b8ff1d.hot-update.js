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
    className: "jsx-232529288" + " " + "navbar ".concat(props.notHome ? "not-home" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-232529288" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-232529288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "adoptuj", __jsx("span", {
    className: "jsx-232529288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "zwierzaka"), ".pl"))), __jsx("div", {
    className: "jsx-232529288" + " " + "hamburger-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isActive: isActive,
    setIsActive: setIsActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("nav", {
    className: "jsx-232529288" + " " + "nav ".concat(isActive ? "is-active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-232529288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-232529288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/kontakt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-232529288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Kontakt"))), __jsx("li", {
    className: "jsx-232529288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/logowanie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-232529288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Logowanie"))), __jsx("li", {
    className: "jsx-232529288",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/rejestracja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-232529288" + " " + "signup-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Rejestracja"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "232529288",
    __self: this
  }, ".navbar.jsx-232529288{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:25px 0;}.nav.jsx-232529288{position:absolute;z-index:20;right:0;top:0;padding:25px;background:rgba(0,0,0,0.7);color:white;padding-top:20px;width:100%;-webkit-transform:translateY(-200px);-ms-transform:translateY(-200px);transform:translateY(-200px);-webkit-transition:-webkit-transform 0.2s ease;-webkit-transition:transform 0.2s ease;transition:transform 0.2s ease;}.nav.is-active.jsx-232529288{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}ul.jsx-232529288{list-style-type:none;}li.jsx-232529288{margin-bottom:14px;}li.jsx-232529288:last-child{margin-bottom:0;}a.jsx-232529288{color:#fff;}a.jsx-232529288:hover{color:#f5f5f5;}.hamburger-box.jsx-232529288{position:relative;height:32px;width:40px;}.title.jsx-232529288{-webkit-text-decoration:none;text-decoration:none;}h1.jsx-232529288{font-size:1.2rem;color:var(--font-color);}h1.jsx-232529288 span.jsx-232529288{color:var(--main-color);}@media (min-width:1024px){.navbar.jsx-232529288{height:auto;}.nav.jsx-232529288{background:transparent;position:relative;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);padding:0;}ul.jsx-232529288{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-232529288{margin-bottom:0;margin-left:24px;}li.jsx-232529288:last-child{margin-left:16px;}a.jsx-232529288{-webkit-text-decoration:none;text-decoration:none;}.signup-btn.jsx-232529288{background:var(--main-color);color:white;-webkit-transition:background 0.2s ease;transition:background 0.2s ease;border-radius:99px;padding:6px 18px;border:none;display:inline-block;}.signup-btn.jsx-232529288:hover{background:#e3396b;}.not-home.jsx-232529288 a.jsx-232529288{color:var(--font-color);}.not-home.jsx-232529288 .signup-btn.jsx-232529288{color:#fff;}}@media (min-width:1280px){li.jsx-232529288{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDUyxBQUcwQixBQU9LLEFBY1EsQUFJTCxBQUlGLEFBSUgsQUFJTCxBQUlHLEFBSUksQUFNRyxBQUlKLEFBSU8sQUFLVixBQUlXLEFBT1YsQUFNRyxBQUtDLEFBSUksQUFJUSxBQVVWLEFBSUssQUFJYixBQU1JLFdBaEZuQixBQTJFRSxDQWhEQSxFQXZCRixDQTZFRSxDQXJGRixBQWdEcUIsQ0ExQkssQUErQnhCLENBL0VXLEFBc0NDLENBaEJkLEFBMkVFLEVBL0VGLEVBMkNzQixDQVR0QixBQWlERSxLQXBHUSxBQXNGTSxDQWhESCxHQW9DWCxJQXpFTSxJQXNDUixBQVNBLEFBYThCLEFBMEJNLEVBckZyQixPQXlDZixBQXVDRSxNQS9FOEIsa0JBWFgsQUEyRVEsU0EvRGYsT0FTZCxLQVJtQixpQkFDTixDQWtGVSxVQWpGUSxRQXVEakIsQ0EyQk8sU0ExQm5CLFFBMkJjLFlBQ1MsTUFsR0UsSUEyRUosV0F3QnJCLHdDQXBGK0IsMENBZGhCLEFBMkVmLGVBMUVGLDREQWNBIiwiZmlsZSI6Ik06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIYW1idXJnZXIgZnJvbSBcIi4vSGFtYnVyZ2VyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2YmFyICR7cHJvcHMubm90SG9tZSA/IFwibm90LWhvbWVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgYWRvcHR1ajxzcGFuPnp3aWVyemFrYTwvc3Bhbj4ucGxcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJveFwiPlxyXG4gICAgICAgIDxIYW1idXJnZXIgaXNBY3RpdmU9e2lzQWN0aXZlfSBzZXRJc0FjdGl2ZT17c2V0SXNBY3RpdmV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17YG5hdiAke2lzQWN0aXZlID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2tvbnRha3RcIj5cclxuICAgICAgICAgICAgICA8YT5Lb250YWt0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ293YW5pZVwiPlxyXG4gICAgICAgICAgICAgIDxhPkxvZ293YW5pZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWplc3RyYWNqYVwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNpZ251cC1idG5cIj5SZWplc3RyYWNqYTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXYuaXMtYWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhhbWJ1cmdlci1ib3gge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNpZ251cC1idG46aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMzM5NmI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ub3QtaG9tZSBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ub3QtaG9tZSAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Navbar\\\\Navbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.57637104008016b8ff1d.hot-update.js.map