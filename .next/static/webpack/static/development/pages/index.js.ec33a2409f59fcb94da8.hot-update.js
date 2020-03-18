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

  var changeCollarColor = function changeCollarColor() {
    var _wrapper$current$chil = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(wrapper.current.children, 1),
        elements = _wrapper$current$chil[0];

    var collar = elements.getElementById("collar");
    var rand = [Math.floor(Math.random() * (255 - 0)) + 0, Math.floor(Math.random() * (255 - 0)) + 0, Math.floor(Math.random() * (255 - 0)) + 0];
    collar.style.stroke = "#000";
  };

  return __jsx("div", {
    className: "jsx-1913810221" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1913810221" + " " + "content-desktop-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1913810221" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1913810221" + " " + "header-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1913810221" + " " + "visual",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    ref: wrapper,
    className: "jsx-1913810221" + " " + "svg-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(svg_react_loader_name_Dog_public_doggie_svg__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "dog-svg",
    onClick: changeCollarColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1913810221" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1913810221" + " " + "content-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1913810221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "adoptuj", __jsx("br", {
    className: "jsx-1913810221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1913810221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "zwierzaka"), ".pl"), __jsx("p", {
    className: "jsx-1913810221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Obejrzyj zwierzaki ze schronisk,", " ", __jsx("span", {
    className: "jsx-1913810221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "wybierz tego, kt\xF3ry najbardziej Ci si\u0119 podoba"), " i podaruj mu nowy dom"), __jsx("div", {
    className: "jsx-1913810221" + " " + "see-more-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    href: "#main",
    className: "jsx-1913810221" + " " + "a btn main-btn see-more-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1913810221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Obejrzyj zwierzaki", __jsx("img", {
    src: "/down-arrow.png",
    alt: "Arrow bottom",
    className: "jsx-1913810221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "242760485",
    __self: this
  }, ".header.jsx-1913810221{background:rgb(170,209,93);background:linear-gradient( 180deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding:20px 0 10px;}.content.jsx-1913810221{background:white;border-radius:10px;padding:60px 20px 20px;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}h1.jsx-1913810221{font-size:30px;font-weight:900;line-height:1.2;text-align:center;}h1.jsx-1913810221 span.jsx-1913810221{color:var(--main-color);}p.jsx-1913810221{margin-top:20px;line-height:1.4;}.svg-wrapper.jsx-1913810221{width:60%;margin:0 auto;z-index:10;position:relative;}.see-more-box.jsx-1913810221{text-align:center;}.see-more-btn.jsx-1913810221{margin:30px auto 0;}.see-more-btn.jsx-1913810221 img.jsx-1913810221{width:20px;margin-left:10px;}.see-more-btn.jsx-1913810221 span.jsx-1913810221{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (min-width:1024px){.header-outer.jsx-1913810221{background-image:url(\"/header-stain.png\");background-size:cover;}.header.jsx-1913810221{background:rgb(170,209,93);background:linear-gradient( 90deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding:0;}.header-inner.jsx-1913810221{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:30px 0;}.content.jsx-1913810221{width:60%;background-color:transparent;padding:50px 0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.content-desktop-bg.jsx-1913810221{background:url(\"/header-stain.png\") transparent no-repeat;background-size:65%;background-position:-5% 35%;}.content-inner.jsx-1913810221{text-align:center;}h1.jsx-1913810221{font-size:3.8rem;}p.jsx-1913810221{font-size:1.2rem;}p.jsx-1913810221 span.jsx-1913810221{display:block;}.visual.jsx-1913810221{width:40%;}.svg-wrapper.jsx-1913810221{width:60%;}}@media (min-width:1280px){.content.jsx-1913810221{padding:80px 0;}h1.jsx-1913810221{font-size:4.4rem;}}@media (min-width:1400px){.content-desktop-bg.jsx-1913810221{background-size:55%;background-position:12% 35%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEUyxBQUcwQyxBQVdaLEFBT0YsQUFPUyxBQUlSLEFBS04sQUFPUSxBQUlDLEFBSVIsQUFLRSxBQU0rQixBQUtiLEFBWWhCLEFBT0gsQUFRZ0QsQUFNeEMsQUFJRCxBQUlBLEFBSUgsQUFJSixBQUlBLEFBTUssQUFJRSxBQU1HLFVBbkdSLEFBbURpQixBQTZCL0IsQUFJQSxDQXJFaUIsR0E2RGpCLENBNUZnQixBQTBHaEIsQ0EvRmdCLENBbEJHLEFBMkZuQixBQUlBLEFBc0JBLENBdkZGLEFBeURFLENBckRGLENBeUZnQyxJQTdHaEMsQUFVYSxHQTlCVixBQWlFRSxDQXBCTCxHQS9Ca0IsQ0FXbEIsR0FNb0IsQ0F4QkssR0EwRU4sR0ExQk8sS0F4Q04sQ0FtSGxCLEtBbEdGLENBa0Q0QixJQUtKLENBL0VNLEtBZ0Q1QixDQXhDRixTQWlDcUIsQUF1QlUsSUFnQkMsNEJBQzlCLDJCQXRCWSxDQWxFUSxJQWtGcEIsS0FmQSxXQWxFRixDQU9BLFlBeUNBLEFBdUJ5QixxR0FDTixlQUNqQiIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRG9nIGZyb20gXCJzdmctcmVhY3QtbG9hZGVyP25hbWU9RG9nIS4uLy4uL3B1YmxpYy9kb2dnaWUuc3ZnXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCB3cmFwcGVyID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VDb2xsYXJDb2xvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlbGVtZW50c10gPSB3cmFwcGVyLmN1cnJlbnQuY2hpbGRyZW47XHJcbiAgICBjb25zdCBjb2xsYXIgPSBlbGVtZW50cy5nZXRFbGVtZW50QnlJZChcImNvbGxhclwiKTtcclxuICAgIGNvbnN0IHJhbmQgPSBbXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwKSkgKyAwLFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCkpICsgMCxcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDApKSArIDBcclxuICAgIF07XHJcbiAgICBjb2xsYXIuc3R5bGUuc3Ryb2tlID0gXCIjMDAwXCI7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1kZXNrdG9wLWJnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctd3JhcHBlclwiIHJlZj17d3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8RG9nIGNsYXNzTmFtZT1cImRvZy1zdmdcIiBvbkNsaWNrPXtjaGFuZ2VDb2xsYXJDb2xvcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICBhZG9wdHVqXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj56d2llcnpha2E8L3NwYW4+LnBsXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIE9iZWpyenlqIHp3aWVyemFraSB6ZSBzY2hyb25pc2sse1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj53eWJpZXJ6IHRlZ28sIGt0w7NyeSBuYWpiYXJkemllaiBDaSBzacSZIHBvZG9iYTwvc3Bhbj4gaVxyXG4gICAgICAgICAgICAgICAgICBwb2RhcnVqIG11IG5vd3kgZG9tXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZS1tb3JlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI21haW5cIiBjbGFzc05hbWU9XCJhIGJ0biBtYWluLWJ0biBzZWUtbW9yZS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIE9iZWpyenlqIHp3aWVyemFraVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZG93bi1hcnJvdy5wbmdcIiBhbHQ9XCJBcnJvdyBib3R0b21cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxNzAsIDIwOSwgOTMpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMTgwZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMTcwLCAyMDksIDkzLCAxKSAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDEwOSwgMTkwLCA2OSwgMSkgODElLFxyXG4gICAgICAgICAgICAgIHJnYmEoNywgMTUzLCA3MiwgMSkgMTAwJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2MHB4IDIwcHggMjBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnN2Zy13cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJveCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYnRuIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYnRuIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlci1vdXRlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2hlYWRlci1zdGFpbi5wbmdcIik7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE3MCwgMjA5LCA5Myk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgOTBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDE3MCwgMjA5LCA5MywgMSkgMCUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDEwOSwgMTkwLCA2OSwgMSkgODElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSg3LCAxNTMsIDcyLCAxKSAxMDAlXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50LWRlc2t0b3AtYmcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9oZWFkZXItc3RhaW4ucG5nXCIpIHRyYW5zcGFyZW50IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDY1JTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNSUgMzUlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudC1pbm5lciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmlzdWFsIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3ZnLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgICAgLmNvbnRlbnQtZGVza3RvcC1iZyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1NSU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTIlIDM1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIC5kb2ctc3ZnOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0YWlsIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogdGFpbCAxLjRzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHRhaWwge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTZkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMjAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kb2ctc3ZnICNlYXIge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBlYXIgMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICAgICAgICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kb2ctc3ZnOmhvdmVyICNlYXIge1xyXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIGVhciB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDMwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig1ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDYwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDkwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigzZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXX0= */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Header\\\\Header.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "753730305",
    __self: this
  }, ".dog-svg:hover{cursor:pointer;}#tail{-webkit-animation:tail 1.4s infinite alternate;animation:tail 1.4s infinite alternate;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform-box:fill-box;-ms-transform-box:fill-box;transform-box:fill-box;}@-webkit-keyframes tail{0%{-webkit-transform:rotateZ(-6deg);-ms-transform:rotateZ(-6deg);transform:rotateZ(-6deg);}20%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}@keyframes tail{0%{-webkit-transform:rotateZ(-6deg);-ms-transform:rotateZ(-6deg);transform:rotateZ(-6deg);}20%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}.dog-svg #ear{-webkit-animation:ear 2s;animation:ear 2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;-webkit-transform-box:fill-box;-ms-transform-box:fill-box;transform-box:fill-box;-webkit-animation-play-state:paused;animation-play-state:paused;}.dog-svg:hover #ear{-webkit-animation-play-state:running;animation-play-state:running;}@-webkit-keyframes ear{0%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}30%{-webkit-transform:rotateZ(5deg);-ms-transform:rotateZ(5deg);transform:rotateZ(5deg);}60%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}90%{-webkit-transform:rotateZ(3deg);-ms-transform:rotateZ(3deg);transform:rotateZ(3deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}@keyframes ear{0%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}30%{-webkit-transform:rotateZ(5deg);-ms-transform:rotateZ(5deg);transform:rotateZ(5deg);}60%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}90%{-webkit-transform:rotateZ(3deg);-ms-transform:rotateZ(3deg);transform:rotateZ(3deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdNeUIsQUFHMEIsQUFJd0IsQUFPWixBQUdELEFBR0EsQUFLVCxBQVFZLEFBS0gsQUFHQSxBQUdBLEFBR0EsQUFHQSxlQTlDNUIsMkJBc0JxQyx3QkFRckMsa0JBaEJFLEFBR0EsQUFrQkEsQUFHQSxBQUdBLEFBR0EsQUFHQSxFQTNDNkIsQ0FPN0IsaUNBWXFCLGlFQWxCRSxVQW1CQSx1RUFsQnpCLFVBbUI4QixnRUFDOUIiLCJmaWxlIjoiTTpcXFByb2pla3R5TVxcTmV4dFxcQWRvcHR1alp3aWVyemFrYVxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERvZyBmcm9tIFwic3ZnLXJlYWN0LWxvYWRlcj9uYW1lPURvZyEuLi8uLi9wdWJsaWMvZG9nZ2llLnN2Z1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9OYXZiYXIvTmF2YmFyXCI7XHJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd3JhcHBlciA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ29sbGFyQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZWxlbWVudHNdID0gd3JhcHBlci5jdXJyZW50LmNoaWxkcmVuO1xyXG4gICAgY29uc3QgY29sbGFyID0gZWxlbWVudHMuZ2V0RWxlbWVudEJ5SWQoXCJjb2xsYXJcIik7XHJcbiAgICBjb25zdCByYW5kID0gW1xyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCkpICsgMCxcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDApKSArIDAsXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwKSkgKyAwXHJcbiAgICBdO1xyXG4gICAgY29sbGFyLnN0eWxlLnN0cm9rZSA9IFwiIzAwMFwiO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZGVza3RvcC1iZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc3VhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXdyYXBwZXJcIiByZWY9e3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPERvZyBjbGFzc05hbWU9XCJkb2ctc3ZnXCIgb25DbGljaz17Y2hhbmdlQ29sbGFyQ29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgYWRvcHR1alxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+endpZXJ6YWthPC9zcGFuPi5wbFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBPYmVqcnp5aiB6d2llcnpha2kgemUgc2Nocm9uaXNrLHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+d3liaWVyeiB0ZWdvLCBrdMOzcnkgbmFqYmFyZHppZWogQ2kgc2nEmSBwb2RvYmE8L3NwYW4+IGlcclxuICAgICAgICAgICAgICAgICAgcG9kYXJ1aiBtdSBub3d5IGRvbVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWUtbW9yZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtYWluXCIgY2xhc3NOYW1lPVwiYSBidG4gbWFpbi1idG4gc2VlLW1vcmUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPYmVqcnp5aiB6d2llcnpha2lcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Rvd24tYXJyb3cucG5nXCIgYWx0PVwiQXJyb3cgYm90dG9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTcwLCAyMDksIDkzKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDE4MGRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDE3MCwgMjA5LCA5MywgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxMDksIDE5MCwgNjksIDEpIDgxJSxcclxuICAgICAgICAgICAgICByZ2JhKDcsIDE1MywgNzIsIDEpIDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdmctd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtbW9yZS1ib3gge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5oZWFkZXItb3V0ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9oZWFkZXItc3RhaW4ucG5nXCIpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxNzAsIDIwOSwgOTMpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIDkwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgxNzAsIDIwOSwgOTMsIDEpIDAlLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgxMDksIDE5MCwgNjksIDEpIDgxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoNywgMTUzLCA3MiwgMSkgMTAwJVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG5cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudC1kZXNrdG9wLWJnIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaGVhZGVyLXN0YWluLnBuZ1wiKSB0cmFuc3BhcmVudCBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2NSU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTUlIDM1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQtaW5uZXIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy44cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCBzcGFuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZpc3VhbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN2Zy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogODBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgIC5jb250ZW50LWRlc2t0b3AtYmcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTUlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyJSAzNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAuZG9nLXN2Zzpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdGFpbCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHRhaWwgMS40cyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyB0YWlsIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC02ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDIwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG9nLXN2ZyAjZWFyIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogZWFyIDJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG9nLXN2Zzpob3ZlciAjZWFyIHtcclxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBlYXIge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAzMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA2MCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA5MCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooM2RlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Header\\\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.ec33a2409f59fcb94da8.hot-update.js.map