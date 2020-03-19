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
    className: "jsx-112829064" + " " + "navbar ".concat(props.notHome ? "not-home" : ""),
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
    className: "jsx-112829064" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-112829064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "adoptuj", __jsx("span", {
    className: "jsx-112829064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "zwierzaka"), ".pl"))), __jsx("div", {
    className: "jsx-112829064" + " " + "hamburger-box",
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
    className: "jsx-112829064" + " " + "nav ".concat(isActive ? "is-active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-112829064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-112829064",
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
    className: "jsx-112829064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Kontakt"))), __jsx("li", {
    className: "jsx-112829064",
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
    className: "jsx-112829064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Logowanie"))), __jsx("li", {
    className: "jsx-112829064",
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
    className: "jsx-112829064" + " " + "signup-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Rejestracja"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "112829064",
    __self: this
  }, ".navbar.jsx-112829064{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:25px 0;}.nav.jsx-112829064{position:absolute;z-index:20;right:0;top:0;padding:25px;background:rgba(0,0,0,0.7);color:white;padding-top:20px;width:100%;-webkit-transform:translateY(-200px);-ms-transform:translateY(-200px);transform:translateY(-200px);-webkit-transition:-webkit-transform 0.2s ease;-webkit-transition:transform 0.2s ease;transition:transform 0.2s ease;}.nav.is-active.jsx-112829064{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}ul.jsx-112829064{list-style-type:none;}li.jsx-112829064{margin-bottom:14px;}li.jsx-112829064:last-child{margin-bottom:0;}a.jsx-112829064{color:#fff;}a.jsx-112829064:hover{color:#f5f5f5;}.hamburger-box.jsx-112829064{position:relative;height:32px;width:40px;}.title.jsx-112829064{-webkit-text-decoration:none;text-decoration:none;}h1.jsx-112829064{font-size:1.2rem;color:var(--font-color);}h1.jsx-112829064 span.jsx-112829064{color:var(--main-color);}.title.jsx-112829064{visibility:hidden;}@media (min-width:1024px){.navbar.jsx-112829064{height:auto;}.nav.jsx-112829064{background:transparent;position:relative;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);padding:0;}ul.jsx-112829064{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-112829064{margin-bottom:0;margin-left:24px;}li.jsx-112829064:last-child{margin-left:16px;}a.jsx-112829064{-webkit-text-decoration:none;text-decoration:none;}.signup-btn.jsx-112829064{background:var(--main-color);color:white;-webkit-transition:background 0.2s ease;transition:background 0.2s ease;border-radius:99px;padding:6px 18px;border:none;display:inline-block;}.signup-btn.jsx-112829064:hover{background:#e3396b;}.not-home.jsx-112829064 a.jsx-112829064{color:var(--font-color);}.not-home.jsx-112829064 .signup-btn.jsx-112829064{color:#fff;}}@media (min-width:1280px){li.jsx-112829064{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDUyxBQUcwQixBQU9LLEFBY1EsQUFJTCxBQUlGLEFBSUgsQUFJTCxBQUlHLEFBSUksQUFNRyxBQUlKLEFBS08sQUFJTixBQUtKLEFBSVcsQUFPVixBQU1HLEFBS0MsQUFJSSxBQUlRLEFBVVYsQUFJSyxBQUliLEFBTUksV0FyRm5CLEFBZ0ZFLENBaERBLEVBNUJGLENBa0ZFLENBMUZGLEFBcURxQixDQS9CSyxBQW9DeEIsQ0FwRlcsQUFzQ0MsQUFtQmQsQ0FuQ0EsQUFnRkUsRUFwRkYsRUFnRHNCLENBYnRCLEFBcURFLEtBekdRLEFBMkZNLENBckRILEdBeUNYLElBOUVNLElBc0NSLEFBU0EsQUFrQjhCLEFBMEJNLEVBMUZyQixPQXlDZixBQTRDRSxNQXBGOEIsa0JBWFgsQUFnRlEsU0FwRWYsT0FTZCxLQVJtQixpQkFDTixDQXVGVSxVQXRGUSxRQTREakIsQ0EyQk8sU0ExQm5CLFFBMkJjLFlBQ1MsTUF2R08sSUFnRlQsV0F3QnJCLHdDQXpGK0IsMENBa0UvQixrQkFoRmUsZUFDakIsMENBY0EiLCJmaWxlIjoiTTpcXFByb2pla3R5TVxcTmV4dFxcQWRvcHR1alp3aWVyemFrYVxcY29tcG9uZW50c1xcTmF2YmFyXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhhbWJ1cmdlciBmcm9tIFwiLi9IYW1idXJnZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BuYXZiYXIgJHtwcm9wcy5ub3RIb21lID8gXCJub3QtaG9tZVwiIDogXCJcIn1gfT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBhZG9wdHVqPHNwYW4+endpZXJ6YWthPC9zcGFuPi5wbFxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XHJcbiAgICAgICAgPEhhbWJ1cmdlciBpc0FjdGl2ZT17aXNBY3RpdmV9IHNldElzQWN0aXZlPXtzZXRJc0FjdGl2ZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgbmF2ICR7aXNBY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIva29udGFrdFwiPlxyXG4gICAgICAgICAgICAgIDxhPktvbnRha3Q8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9nb3dhbmllXCI+XHJcbiAgICAgICAgICAgICAgPGE+TG9nb3dhbmllPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlamVzdHJhY2phXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2lnbnVwLWJ0blwiPlJlamVzdHJhY2phPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2LmlzLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oYW1idXJnZXItYm94IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNpZ251cC1idG46aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMzM5NmI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ub3QtaG9tZSBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ub3QtaG9tZSAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Navbar\\\\Navbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=logowanie.js.ca5590e725754e8851a8.hot-update.js.map