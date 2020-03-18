webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svg_react_loader_name_Dog_public_doggie_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg-react-loader?name=Dog!../../public/doggie.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Dog!./public/doggie.svg");
/* harmony import */ var svg_react_loader_name_Dog_public_doggie_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Dog_public_doggie_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Header\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Header = function Header() {
  var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _wrapper$current$chil = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapper.current.children, 1),
        elements = _wrapper$current$chil[0];

    var tail = elements.getElementById("tail");
    gsap__WEBPACK_IMPORTED_MODULE_5__["default"].fromTo(tail, {
      x: "-=100"
    }, {
      x: "+=100",
      duration: 1,
      ease: "elastic",
      repeat: -1,
      repeatDelay: 2
    });
  }, []);
  return __jsx("div", {
    className: "jsx-242760485" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-242760485" + " " + "content-desktop-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-242760485" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-242760485" + " " + "header-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-242760485" + " " + "visual",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    ref: wrapper,
    className: "jsx-242760485" + " " + "svg-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(svg_react_loader_name_Dog_public_doggie_svg__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-242760485" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-242760485" + " " + "content-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-242760485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "adoptuj", __jsx("br", {
    className: "jsx-242760485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-242760485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "zwierzaka"), ".pl"), __jsx("p", {
    className: "jsx-242760485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Obejrzyj zwierzaki ze schronisk,", " ", __jsx("span", {
    className: "jsx-242760485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "wybierz tego, kt\xF3ry najbardziej Ci si\u0119 podoba"), " i podaruj mu nowy dom"), __jsx("div", {
    className: "jsx-242760485" + " " + "see-more-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("a", {
    href: "#main",
    className: "jsx-242760485" + " " + "a btn main-btn see-more-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-242760485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Obejrzyj zwierzaki", __jsx("img", {
    src: "/down-arrow.png",
    alt: "Arrow bottom",
    className: "jsx-242760485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "242760485",
    __self: this
  }, ".header.jsx-242760485{background:rgb(170,209,93);background:linear-gradient( 180deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding:20px 0 10px;}.content.jsx-242760485{background:white;border-radius:10px;padding:60px 20px 20px;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}h1.jsx-242760485{font-size:30px;font-weight:900;line-height:1.2;text-align:center;}h1.jsx-242760485 span.jsx-242760485{color:var(--main-color);}p.jsx-242760485{margin-top:20px;line-height:1.4;}.svg-wrapper.jsx-242760485{width:60%;margin:0 auto;z-index:10;position:relative;}.see-more-box.jsx-242760485{text-align:center;}.see-more-btn.jsx-242760485{margin:30px auto 0;}.see-more-btn.jsx-242760485 img.jsx-242760485{width:20px;margin-left:10px;}.see-more-btn.jsx-242760485 span.jsx-242760485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (min-width:1024px){.header-outer.jsx-242760485{background-image:url(\"/header-stain.png\");background-size:cover;}.header.jsx-242760485{background:rgb(170,209,93);background:linear-gradient( 90deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding:0;}.header-inner.jsx-242760485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:30px 0;}.content.jsx-242760485{width:60%;background-color:transparent;padding:50px 0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.content-desktop-bg.jsx-242760485{background:url(\"/header-stain.png\") transparent no-repeat;background-size:65%;background-position:-5% 35%;}.content-inner.jsx-242760485{text-align:center;}h1.jsx-242760485{font-size:3.8rem;}p.jsx-242760485{font-size:1.2rem;}p.jsx-242760485 span.jsx-242760485{display:block;}.visual.jsx-242760485{width:40%;}.svg-wrapper.jsx-242760485{width:60%;}}@media (min-width:1280px){.content.jsx-242760485{padding:80px 0;}h1.jsx-242760485{font-size:4.4rem;}}@media (min-width:1400px){.content-desktop-bg.jsx-242760485{background-size:55%;background-position:12% 35%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEUyxBQUcwQyxBQVdaLEFBT0YsQUFPUyxBQUlSLEFBS04sQUFPUSxBQUlDLEFBSVIsQUFLRSxBQU0rQixBQUtiLEFBWWhCLEFBT0gsQUFRZ0QsQUFNeEMsQUFJRCxBQUlBLEFBSUgsQUFJSixBQUlBLEFBTUssQUFJRSxBQU1HLFVBbkdSLEFBbURpQixBQTZCL0IsQUFJQSxDQXJFaUIsR0E2RGpCLENBNUZnQixBQTBHaEIsQ0EvRmdCLENBbEJHLEFBMkZuQixBQUlBLEFBc0JBLENBdkZGLEFBeURFLENBckRGLENBeUZnQyxJQTdHaEMsQUFVYSxHQTlCVixBQWlFRSxDQXBCTCxHQS9Ca0IsQ0FXbEIsR0FNb0IsQ0F4QkssR0EwRU4sR0ExQk8sS0F4Q04sQ0FtSGxCLEtBbEdGLENBa0Q0QixJQUtKLENBL0VNLEtBZ0Q1QixDQXhDRixTQWlDcUIsQUF1QlUsSUFnQkMsNEJBQzlCLDJCQXRCWSxDQWxFUSxJQWtGcEIsS0FmQSxXQWxFRixDQU9BLFlBeUNBLEFBdUJ5QixxR0FDTixlQUNqQiIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRG9nIGZyb20gXCJzdmctcmVhY3QtbG9hZGVyP25hbWU9RG9nIS4uLy4uL3B1YmxpYy9kb2dnaWUuc3ZnXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCB3cmFwcGVyID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgW2VsZW1lbnRzXSA9IHdyYXBwZXIuY3VycmVudC5jaGlsZHJlbjtcclxuICAgIGNvbnN0IHRhaWwgPSBlbGVtZW50cy5nZXRFbGVtZW50QnlJZChcInRhaWxcIik7XHJcbiAgICBnc2FwLmZyb21UbyhcclxuICAgICAgdGFpbCxcclxuICAgICAgeyB4OiBcIi09MTAwXCIgfSxcclxuICAgICAgeyB4OiBcIis9MTAwXCIsIGR1cmF0aW9uOiAxLCBlYXNlOiBcImVsYXN0aWNcIiwgcmVwZWF0OiAtMSwgcmVwZWF0RGVsYXk6IDIgfVxyXG4gICAgKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZGVza3RvcC1iZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc3VhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXdyYXBwZXJcIiByZWY9e3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPERvZyBjbGFzc05hbWU9XCJzdmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgIGFkb3B0dWpcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnp3aWVyemFrYTwvc3Bhbj4ucGxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgT2JlanJ6eWogendpZXJ6YWtpIHplIHNjaHJvbmlzayx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnd5YmllcnogdGVnbywga3TDs3J5IG5hamJhcmR6aWVqIENpIHNpxJkgcG9kb2JhPC9zcGFuPiBpXHJcbiAgICAgICAgICAgICAgICAgIHBvZGFydWogbXUgbm93eSBkb21cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VlLW1vcmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbWFpblwiIGNsYXNzTmFtZT1cImEgYnRuIG1haW4tYnRuIHNlZS1tb3JlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT2JlanJ6eWogendpZXJ6YWtpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9kb3duLWFycm93LnBuZ1wiIGFsdD1cIkFycm93IGJvdHRvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE3MCwgMjA5LCA5Myk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAxODBkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgxNzAsIDIwOSwgOTMsIDEpIDAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMTA5LCAxOTAsIDY5LCAxKSA4MSUsXHJcbiAgICAgICAgICAgICAgcmdiYSg3LCAxNTMsIDcyLCAxKSAxMDAlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYwcHggMjBweCAyMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3ZnLXdyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYm94IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtbW9yZS1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtbW9yZS1idG4gaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtbW9yZS1idG4gc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAuaGVhZGVyLW91dGVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaGVhZGVyLXN0YWluLnBuZ1wiKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTcwLCAyMDksIDkzKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICA5MGRlZyxcclxuICAgICAgICAgICAgICAgIHJnYmEoMTcwLCAyMDksIDkzLCAxKSAwJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMTA5LCAxOTAsIDY5LCAxKSA4MSUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDcsIDE1MywgNzIsIDEpIDEwMCVcclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQtZGVza3RvcC1iZyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2hlYWRlci1zdGFpbi5wbmdcIikgdHJhbnNwYXJlbnQgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjUlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC01JSAzNSU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50LWlubmVyIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52aXN1YWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdmctd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC40cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgICAgICAuY29udGVudC1kZXNrdG9wLWJnIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDU1JTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMiUgMzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Header\\\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.1a6c0a98a2fe99a2df26.hot-update.js.map