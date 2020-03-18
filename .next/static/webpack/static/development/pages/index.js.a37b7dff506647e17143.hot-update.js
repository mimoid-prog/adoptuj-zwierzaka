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
      x: "-=5",
      y: "+=10"
    }, {
      x: "+=5",
      y: "-=5",
      duration: 1,
      ease: "elastic",
      repeat: -1,
      repeatDelay: 2
    });
  }, []);
  return __jsx("div", {
    className: "jsx-340339973" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-340339973" + " " + "content-desktop-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-340339973" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-340339973" + " " + "header-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-340339973" + " " + "visual",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    ref: wrapper,
    className: "jsx-340339973" + " " + "svg-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(svg_react_loader_name_Dog_public_doggie_svg__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-340339973" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-340339973" + " " + "content-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-340339973",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "adoptuj", __jsx("br", {
    className: "jsx-340339973",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-340339973",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "zwierzaka"), ".pl"), __jsx("p", {
    className: "jsx-340339973",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Obejrzyj zwierzaki ze schronisk,", " ", __jsx("span", {
    className: "jsx-340339973",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "wybierz tego, kt\xF3ry najbardziej Ci si\u0119 podoba"), " i podaruj mu nowy dom"), __jsx("div", {
    className: "jsx-340339973" + " " + "see-more-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    href: "#main",
    className: "jsx-340339973" + " " + "a btn main-btn see-more-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-340339973",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Obejrzyj zwierzaki", __jsx("img", {
    src: "/down-arrow.png",
    alt: "Arrow bottom",
    className: "jsx-340339973",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "340339973",
    __self: this
  }, ".header.jsx-340339973{background:rgb(170,209,93);background:linear-gradient( 180deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding:20px 0 10px;}.content.jsx-340339973{background:white;border-radius:10px;padding:60px 20px 20px;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}h1.jsx-340339973{font-size:30px;font-weight:900;line-height:1.2;text-align:center;}h1.jsx-340339973 span.jsx-340339973{color:var(--main-color);}p.jsx-340339973{margin-top:20px;line-height:1.4;}.svg-wrapper.jsx-340339973{width:60%;margin:0 auto;z-index:10;position:relative;}.see-more-box.jsx-340339973{text-align:center;}.see-more-btn.jsx-340339973{margin:30px auto 0;}.see-more-btn.jsx-340339973 img.jsx-340339973{width:20px;margin-left:10px;}.see-more-btn.jsx-340339973 span.jsx-340339973{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.svg.jsx-340339973{-webkit-animation:tail-jsx-340339973 1s infinite linear;animation:tail-jsx-340339973 1s infinite linear;-webkit-tranform-origin:center;tranform-origin:center;-webkit-transform-box:fill-box;-ms-transform-box:fill-box;transform-box:fill-box;}@-webkit-keyframes tail-jsx-340339973{from{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}to{-webkit-transform:rotateZ(20deg);-ms-transform:rotateZ(20deg);transform:rotateZ(20deg);}}@keyframes tail-jsx-340339973{from{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}to{-webkit-transform:rotateZ(20deg);-ms-transform:rotateZ(20deg);transform:rotateZ(20deg);}}@media (min-width:1024px){.header-outer.jsx-340339973{background-image:url(\"/header-stain.png\");background-size:cover;}.header.jsx-340339973{background:rgb(170,209,93);background:linear-gradient( 90deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding:0;}.header-inner.jsx-340339973{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:30px 0;}.content.jsx-340339973{width:60%;background-color:transparent;padding:50px 0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.content-desktop-bg.jsx-340339973{background:url(\"/header-stain.png\") transparent no-repeat;background-size:65%;background-position:-5% 35%;}.content-inner.jsx-340339973{text-align:center;}h1.jsx-340339973{font-size:3.8rem;}p.jsx-340339973{font-size:1.2rem;}p.jsx-340339973 span.jsx-340339973{display:block;}.visual.jsx-340339973{width:40%;}.svg-wrapper.jsx-340339973{width:60%;}}@media (min-width:1280px){.content.jsx-340339973{padding:80px 0;}h1.jsx-340339973{font-size:4.4rem;}}@media (min-width:1400px){.content-desktop-bg.jsx-340339973{background-size:55%;background-position:12% 35%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEUyxBQUcwQyxBQVdaLEFBT0YsQUFPUyxBQUlSLEFBS04sQUFPUSxBQUlDLEFBSVIsQUFLRSxBQUtxQixBQU9SLEFBSUMsQUFNaUIsQUFLYixBQVloQixBQU9ILEFBUWdELEFBTXhDLEFBSUQsQUFJQSxBQUlILEFBSUosQUFJQSxBQU1LLEFBSUUsQUFNRyxVQW5IUixBQW1FaUIsQUE2Qi9CLEFBSUEsQ0FyRmlCLEdBNkVqQixDQTVHZ0IsQUEwSGhCLENBL0dnQixDQWxCRyxBQTJHbkIsQUFJQSxBQXNCQSxDQXZHRixBQXlFRSxDQXJFRixDQXlHZ0MsSUE3SGhDLEFBVWEsR0E5QlYsQUFpRkUsQ0FwQ0wsR0EvQmtCLENBV2xCLEdBTW9CLENBeEJLLEdBMEZOLEdBMUJPLEtBeEROLENBbUlsQixLQWxIRixDQWtFNEIsSUFLSixDQS9GTSxLQWdFNUIsQ0F4REYsU0FpQ3FCLEFBdUNVLElBZ0JDLE1BM0M5QixHQUlBLGlCQVh1QixFQW1EdkIsMkJBdEJZLENBbEZRLElBa0dwQixLQWZBLFdBbEZGLENBT0EsR0E4Q3lCLFNBTHpCLEFBdUN5Qix3RUFqQ3pCLDZCQWtDbUIsZUFDakIiLCJmaWxlIjoiTTpcXFByb2pla3R5TVxcTmV4dFxcQWRvcHR1alp3aWVyemFrYVxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERvZyBmcm9tIFwic3ZnLXJlYWN0LWxvYWRlcj9uYW1lPURvZyEuLi8uLi9wdWJsaWMvZG9nZ2llLnN2Z1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9OYXZiYXIvTmF2YmFyXCI7XHJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd3JhcHBlciA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IFtlbGVtZW50c10gPSB3cmFwcGVyLmN1cnJlbnQuY2hpbGRyZW47XHJcbiAgICBjb25zdCB0YWlsID0gZWxlbWVudHMuZ2V0RWxlbWVudEJ5SWQoXCJ0YWlsXCIpO1xyXG4gICAgZ3NhcC5mcm9tVG8oXHJcbiAgICAgIHRhaWwsXHJcbiAgICAgIHsgeDogXCItPTVcIiwgeTogXCIrPTEwXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIHg6IFwiKz01XCIsXHJcbiAgICAgICAgeTogXCItPTVcIixcclxuICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICBlYXNlOiBcImVsYXN0aWNcIixcclxuICAgICAgICByZXBlYXQ6IC0xLFxyXG4gICAgICAgIHJlcGVhdERlbGF5OiAyXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWRlc2t0b3AtYmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXN1YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy13cmFwcGVyXCIgcmVmPXt3cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxEb2cgY2xhc3NOYW1lPVwic3ZnXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICBhZG9wdHVqXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj56d2llcnpha2E8L3NwYW4+LnBsXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIE9iZWpyenlqIHp3aWVyemFraSB6ZSBzY2hyb25pc2sse1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj53eWJpZXJ6IHRlZ28sIGt0w7NyeSBuYWpiYXJkemllaiBDaSBzacSZIHBvZG9iYTwvc3Bhbj4gaVxyXG4gICAgICAgICAgICAgICAgICBwb2RhcnVqIG11IG5vd3kgZG9tXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZS1tb3JlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI21haW5cIiBjbGFzc05hbWU9XCJhIGJ0biBtYWluLWJ0biBzZWUtbW9yZS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIE9iZWpyenlqIHp3aWVyemFraVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZG93bi1hcnJvdy5wbmdcIiBhbHQ9XCJBcnJvdyBib3R0b21cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxNzAsIDIwOSwgOTMpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMTgwZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMTcwLCAyMDksIDkzLCAxKSAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDEwOSwgMTkwLCA2OSwgMSkgODElLFxyXG4gICAgICAgICAgICAgIHJnYmEoNywgMTUzLCA3MiwgMSkgMTAwJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2MHB4IDIwcHggMjBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnN2Zy13cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJveCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYnRuIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYnRuIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdmcge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHRhaWwgMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgICAgICB0cmFuZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyB0YWlsIHtcclxuICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDIwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlci1vdXRlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2hlYWRlci1zdGFpbi5wbmdcIik7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE3MCwgMjA5LCA5Myk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgOTBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDE3MCwgMjA5LCA5MywgMSkgMCUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDEwOSwgMTkwLCA2OSwgMSkgODElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSg3LCAxNTMsIDcyLCAxKSAxMDAlXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50LWRlc2t0b3AtYmcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9oZWFkZXItc3RhaW4ucG5nXCIpIHRyYW5zcGFyZW50IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDY1JTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNSUgMzUlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudC1pbm5lciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmlzdWFsIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3ZnLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgICAgLmNvbnRlbnQtZGVza3RvcC1iZyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1NSU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTIlIDM1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXX0= */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Header\\\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.a37b7dff506647e17143.hot-update.js.map