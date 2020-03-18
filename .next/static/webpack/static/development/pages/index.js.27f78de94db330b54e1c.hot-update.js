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
      repeat: -1
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
  }, ".header.jsx-242760485{background:rgb(170,209,93);background:linear-gradient( 180deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding:20px 0 10px;}.content.jsx-242760485{background:white;border-radius:10px;padding:60px 20px 20px;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}h1.jsx-242760485{font-size:30px;font-weight:900;line-height:1.2;text-align:center;}h1.jsx-242760485 span.jsx-242760485{color:var(--main-color);}p.jsx-242760485{margin-top:20px;line-height:1.4;}.svg-wrapper.jsx-242760485{width:60%;margin:0 auto;z-index:10;position:relative;}.see-more-box.jsx-242760485{text-align:center;}.see-more-btn.jsx-242760485{margin:30px auto 0;}.see-more-btn.jsx-242760485 img.jsx-242760485{width:20px;margin-left:10px;}.see-more-btn.jsx-242760485 span.jsx-242760485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (min-width:1024px){.header-outer.jsx-242760485{background-image:url(\"/header-stain.png\");background-size:cover;}.header.jsx-242760485{background:rgb(170,209,93);background:linear-gradient( 90deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding:0;}.header-inner.jsx-242760485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:30px 0;}.content.jsx-242760485{width:60%;background-color:transparent;padding:50px 0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.content-desktop-bg.jsx-242760485{background:url(\"/header-stain.png\") transparent no-repeat;background-size:65%;background-position:-5% 35%;}.content-inner.jsx-242760485{text-align:center;}h1.jsx-242760485{font-size:3.8rem;}p.jsx-242760485{font-size:1.2rem;}p.jsx-242760485 span.jsx-242760485{display:block;}.visual.jsx-242760485{width:40%;}.svg-wrapper.jsx-242760485{width:60%;}}@media (min-width:1280px){.content.jsx-242760485{padding:80px 0;}h1.jsx-242760485{font-size:4.4rem;}}@media (min-width:1400px){.content-desktop-bg.jsx-242760485{background-size:55%;background-position:12% 35%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEUyxBQUcwQyxBQVdaLEFBT0YsQUFPUyxBQUlSLEFBS04sQUFPUSxBQUlDLEFBSVIsQUFLRSxBQU0rQixBQUtiLEFBWWhCLEFBT0gsQUFRZ0QsQUFNeEMsQUFJRCxBQUlBLEFBSUgsQUFJSixBQUlBLEFBTUssQUFJRSxBQU1HLFVBbkdSLEFBbURpQixBQTZCL0IsQUFJQSxDQXJFaUIsR0E2RGpCLENBNUZnQixBQTBHaEIsQ0EvRmdCLENBbEJHLEFBMkZuQixBQUlBLEFBc0JBLENBdkZGLEFBeURFLENBckRGLENBeUZnQyxJQTdHaEMsQUFVYSxHQTlCVixBQWlFRSxDQXBCTCxHQS9Ca0IsQ0FXbEIsR0FNb0IsQ0F4QkssR0EwRU4sR0ExQk8sS0F4Q04sQ0FtSGxCLEtBbEdGLENBa0Q0QixJQUtKLENBL0VNLEtBZ0Q1QixDQXhDRixTQWlDcUIsQUF1QlUsSUFnQkMsNEJBQzlCLDJCQXRCWSxDQWxFUSxJQWtGcEIsS0FmQSxXQWxFRixDQU9BLFlBeUNBLEFBdUJ5QixxR0FDTixlQUNqQiIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRG9nIGZyb20gXCJzdmctcmVhY3QtbG9hZGVyP25hbWU9RG9nIS4uLy4uL3B1YmxpYy9kb2dnaWUuc3ZnXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCB3cmFwcGVyID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgW2VsZW1lbnRzXSA9IHdyYXBwZXIuY3VycmVudC5jaGlsZHJlbjtcclxuICAgIGNvbnN0IHRhaWwgPSBlbGVtZW50cy5nZXRFbGVtZW50QnlJZChcInRhaWxcIik7XHJcbiAgICBnc2FwLmZyb21UbyhcclxuICAgICAgdGFpbCxcclxuICAgICAgeyB4OiBcIi09MTAwXCIgfSxcclxuICAgICAgeyB4OiBcIis9MTAwXCIsIGR1cmF0aW9uOiAxLCBlYXNlOiBcImVsYXN0aWNcIiwgcmVwZWF0OiAtMSB9XHJcbiAgICApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1kZXNrdG9wLWJnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctd3JhcHBlclwiIHJlZj17d3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8RG9nIGNsYXNzTmFtZT1cInN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgYWRvcHR1alxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+endpZXJ6YWthPC9zcGFuPi5wbFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBPYmVqcnp5aiB6d2llcnpha2kgemUgc2Nocm9uaXNrLHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+d3liaWVyeiB0ZWdvLCBrdMOzcnkgbmFqYmFyZHppZWogQ2kgc2nEmSBwb2RvYmE8L3NwYW4+IGlcclxuICAgICAgICAgICAgICAgICAgcG9kYXJ1aiBtdSBub3d5IGRvbVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWUtbW9yZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtYWluXCIgY2xhc3NOYW1lPVwiYSBidG4gbWFpbi1idG4gc2VlLW1vcmUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPYmVqcnp5aiB6d2llcnpha2lcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Rvd24tYXJyb3cucG5nXCIgYWx0PVwiQXJyb3cgYm90dG9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTcwLCAyMDksIDkzKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDE4MGRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDE3MCwgMjA5LCA5MywgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxMDksIDE5MCwgNjksIDEpIDgxJSxcclxuICAgICAgICAgICAgICByZ2JhKDcsIDE1MywgNzIsIDEpIDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdmctd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtbW9yZS1ib3gge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5oZWFkZXItb3V0ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9oZWFkZXItc3RhaW4ucG5nXCIpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxNzAsIDIwOSwgOTMpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIDkwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgxNzAsIDIwOSwgOTMsIDEpIDAlLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgxMDksIDE5MCwgNjksIDEpIDgxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoNywgMTUzLCA3MiwgMSkgMTAwJVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG5cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudC1kZXNrdG9wLWJnIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaGVhZGVyLXN0YWluLnBuZ1wiKSB0cmFuc3BhcmVudCBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2NSU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTUlIDM1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQtaW5uZXIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy44cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCBzcGFuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZpc3VhbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN2Zy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogODBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgIC5jb250ZW50LWRlc2t0b3AtYmcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTUlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyJSAzNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Header\\\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.27f78de94db330b54e1c.hot-update.js.map