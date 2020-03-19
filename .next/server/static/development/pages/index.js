module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg_react_loader_name_Dog_public_doggie_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg-react-loader?name=Dog!../../public/doggie.svg */ "./node_modules/svg-react-loader/lib/loader.js?name=Dog!./public/doggie.svg");
/* harmony import */ var svg_react_loader_name_Dog_public_doggie_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg_react_loader_name_Dog_public_doggie_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navbar/Navbar */ "./components/Navbar/Navbar.js");
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Header\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Header = () => {
  const wrapper = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const changeCollarColor = () => {
    const [elements] = wrapper.current.children;
    const collar = elements.getElementById("collar");
    const rand = [Math.floor(Math.random() * (255 - 0)) + 0, Math.floor(Math.random() * (255 - 0)) + 0, Math.floor(Math.random() * (255 - 0)) + 0];
    collar.style.stroke = `rgb(${rand[0]}, ${rand[1]}, ${rand[2]})`;
  };

  return __jsx("div", {
    className: "jsx-1371038531" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1371038531" + " " + "content-desktop-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1371038531" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1371038531" + " " + "header-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1371038531" + " " + "visual",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    ref: wrapper,
    className: "jsx-1371038531" + " " + "svg-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(svg_react_loader_name_Dog_public_doggie_svg__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "dog-svg",
    onClick: changeCollarColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-1371038531" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1371038531" + " " + "content-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-1371038531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "adoptuj", __jsx("br", {
    className: "jsx-1371038531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-1371038531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "zwierzaka"), ".pl"), __jsx("p", {
    className: "jsx-1371038531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Obejrzyj zwierzaki ze schronisk,", " ", __jsx("span", {
    className: "jsx-1371038531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "wybierz tego, kt\xF3ry najbardziej Ci si\u0119 podoba"), " i podaruj mu nowy dom"), __jsx("div", {
    className: "jsx-1371038531" + " " + "see-more-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("a", {
    href: "#main",
    className: "jsx-1371038531" + " " + "a btn main-btn see-more-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1371038531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Obejrzyj zwierzaki", __jsx("img", {
    src: "/down-arrow.png",
    alt: "Arrow bottom",
    className: "jsx-1371038531",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "988985675",
    __self: undefined
  }, ".header.jsx-1371038531{background:rgb(170,209,93);background:linear-gradient( 180deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding-bottom:10px;}.content.jsx-1371038531{background:white;border-radius:10px;padding:60px 20px 20px;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}h1.jsx-1371038531{font-size:30px;font-weight:900;line-height:1.2;text-align:center;}h1.jsx-1371038531 span.jsx-1371038531{color:var(--main-color);}p.jsx-1371038531{margin-top:20px;line-height:1.4;}.svg-wrapper.jsx-1371038531{width:60%;margin:0 auto;z-index:10;position:relative;}.see-more-box.jsx-1371038531{text-align:center;}.see-more-btn.jsx-1371038531{margin:30px auto 0;}.see-more-btn.jsx-1371038531 img.jsx-1371038531{width:20px;margin-left:10px;}.see-more-btn.jsx-1371038531 span.jsx-1371038531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (min-width:1024px){.header-outer.jsx-1371038531{background-image:url(\"/header-stain.png\");background-size:cover;}.header.jsx-1371038531{background:rgb(170,209,93);background:linear-gradient( 90deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding:0;}.header-inner.jsx-1371038531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:30px 0;}.content.jsx-1371038531{width:60%;background-color:transparent;padding:50px 0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.content-desktop-bg.jsx-1371038531{background:url(\"/header-stain.png\") transparent no-repeat;background-size:65%;background-position:-5% 35%;}.content-inner.jsx-1371038531{text-align:center;}h1.jsx-1371038531{font-size:3.8rem;}p.jsx-1371038531{font-size:1.2rem;}p.jsx-1371038531 span.jsx-1371038531{display:block;}.visual.jsx-1371038531{width:40%;}.svg-wrapper.jsx-1371038531{width:60%;}}@media (min-width:1280px){.content.jsx-1371038531{padding:80px 0;}h1.jsx-1371038531{font-size:4.4rem;}}@media (min-width:1400px){.content-desktop-bg.jsx-1371038531{background-size:55%;background-position:12% 35%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEUyxBQUcwQyxBQVdaLEFBT0YsQUFPUyxBQUlSLEFBS04sQUFPUSxBQUlDLEFBSVIsQUFLRSxBQU0rQixBQUtiLEFBWWhCLEFBT0gsQUFRZ0QsQUFNeEMsQUFJRCxBQUlBLEFBSUgsQUFJSixBQUlBLEFBTUssQUFJRSxBQU1HLFVBbkdSLEFBbURpQixBQTZCL0IsQUFJQSxDQXJFaUIsR0E2RGpCLENBNUZnQixBQTBHaEIsQ0EvRmdCLENBbEJHLEFBMkZuQixBQUlBLEFBc0JBLENBdkZGLEFBeURFLENBckRGLENBeUZnQyxJQTdHaEMsQUFVYSxHQTlCVixBQWlFRSxDQXBCTCxHQS9Ca0IsQ0FXbEIsR0FNb0IsQ0F4QkssR0EwRU4sR0ExQk8sS0F4Q04sQ0FtSGxCLEtBbEdGLENBa0Q0QixJQUtKLENBL0VNLEtBZ0Q1QixDQXhDRixTQWlDcUIsQUF1QlUsSUFnQkMsNEJBQzlCLDJCQXRCWSxDQWxFUSxJQWtGcEIsS0FmQSxXQWxFRixDQU9BLFlBeUNBLEFBdUJ5QixxR0FDTixlQUNqQiIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERvZyBmcm9tIFwic3ZnLXJlYWN0LWxvYWRlcj9uYW1lPURvZyEuLi8uLi9wdWJsaWMvZG9nZ2llLnN2Z1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9OYXZiYXIvTmF2YmFyXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd3JhcHBlciA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ29sbGFyQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZWxlbWVudHNdID0gd3JhcHBlci5jdXJyZW50LmNoaWxkcmVuO1xyXG4gICAgY29uc3QgY29sbGFyID0gZWxlbWVudHMuZ2V0RWxlbWVudEJ5SWQoXCJjb2xsYXJcIik7XHJcbiAgICBjb25zdCByYW5kID0gW1xyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCkpICsgMCxcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDApKSArIDAsXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwKSkgKyAwXHJcbiAgICBdO1xyXG4gICAgY29sbGFyLnN0eWxlLnN0cm9rZSA9IGByZ2IoJHtyYW5kWzBdfSwgJHtyYW5kWzFdfSwgJHtyYW5kWzJdfSlgO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZGVza3RvcC1iZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc3VhbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLXdyYXBwZXJcIiByZWY9e3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPERvZyBjbGFzc05hbWU9XCJkb2ctc3ZnXCIgb25DbGljaz17Y2hhbmdlQ29sbGFyQ29sb3J9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgYWRvcHR1alxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+endpZXJ6YWthPC9zcGFuPi5wbFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBPYmVqcnp5aiB6d2llcnpha2kgemUgc2Nocm9uaXNrLHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+d3liaWVyeiB0ZWdvLCBrdMOzcnkgbmFqYmFyZHppZWogQ2kgc2nEmSBwb2RvYmE8L3NwYW4+IGlcclxuICAgICAgICAgICAgICAgICAgcG9kYXJ1aiBtdSBub3d5IGRvbVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWUtbW9yZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtYWluXCIgY2xhc3NOYW1lPVwiYSBidG4gbWFpbi1idG4gc2VlLW1vcmUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPYmVqcnp5aiB6d2llcnpha2lcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Rvd24tYXJyb3cucG5nXCIgYWx0PVwiQXJyb3cgYm90dG9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTcwLCAyMDksIDkzKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDE4MGRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDE3MCwgMjA5LCA5MywgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxMDksIDE5MCwgNjksIDEpIDgxJSxcclxuICAgICAgICAgICAgICByZ2JhKDcsIDE1MywgNzIsIDEpIDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdmctd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtbW9yZS1ib3gge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5oZWFkZXItb3V0ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9oZWFkZXItc3RhaW4ucG5nXCIpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxNzAsIDIwOSwgOTMpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIDkwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgxNzAsIDIwOSwgOTMsIDEpIDAlLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgxMDksIDE5MCwgNjksIDEpIDgxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoNywgMTUzLCA3MiwgMSkgMTAwJVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG5cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudC1kZXNrdG9wLWJnIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaGVhZGVyLXN0YWluLnBuZ1wiKSB0cmFuc3BhcmVudCBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2NSU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTUlIDM1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQtaW5uZXIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy44cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCBzcGFuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZpc3VhbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN2Zy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogODBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgIC5jb250ZW50LWRlc2t0b3AtYmcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTUlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyJSAzNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAuZG9nLXN2Zzpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdGFpbCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHRhaWwgMS40cyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyB0YWlsIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC02ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDIwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG9nLXN2ZyAjZWFyIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogZWFyIDJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG9nLXN2Zzpob3ZlciAjZWFyIHtcclxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBlYXIge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAzMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA2MCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA5MCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooM2RlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Header\\\\Header.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "753730305",
    __self: undefined
  }, ".dog-svg:hover{cursor:pointer;}#tail{-webkit-animation:tail 1.4s infinite alternate;animation:tail 1.4s infinite alternate;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform-box:fill-box;-ms-transform-box:fill-box;transform-box:fill-box;}@-webkit-keyframes tail{0%{-webkit-transform:rotateZ(-6deg);-ms-transform:rotateZ(-6deg);transform:rotateZ(-6deg);}20%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}@keyframes tail{0%{-webkit-transform:rotateZ(-6deg);-ms-transform:rotateZ(-6deg);transform:rotateZ(-6deg);}20%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}.dog-svg #ear{-webkit-animation:ear 2s;animation:ear 2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;-webkit-transform-box:fill-box;-ms-transform-box:fill-box;transform-box:fill-box;-webkit-animation-play-state:paused;animation-play-state:paused;}.dog-svg:hover #ear{-webkit-animation-play-state:running;animation-play-state:running;}@-webkit-keyframes ear{0%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}30%{-webkit-transform:rotateZ(5deg);-ms-transform:rotateZ(5deg);transform:rotateZ(5deg);}60%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}90%{-webkit-transform:rotateZ(3deg);-ms-transform:rotateZ(3deg);transform:rotateZ(3deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}@keyframes ear{0%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}30%{-webkit-transform:rotateZ(5deg);-ms-transform:rotateZ(5deg);transform:rotateZ(5deg);}60%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}90%{-webkit-transform:rotateZ(3deg);-ms-transform:rotateZ(3deg);transform:rotateZ(3deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVNeUIsQUFHMEIsQUFJd0IsQUFPWixBQUdELEFBR0EsQUFLVCxBQVFZLEFBS0gsQUFHQSxBQUdBLEFBR0EsQUFHQSxlQTlDNUIsMkJBc0JxQyx3QkFRckMsa0JBaEJFLEFBR0EsQUFrQkEsQUFHQSxBQUdBLEFBR0EsQUFHQSxFQTNDNkIsQ0FPN0IsaUNBWXFCLGlFQWxCRSxVQW1CQSx1RUFsQnpCLFVBbUI4QixnRUFDOUIiLCJmaWxlIjoiTTpcXFByb2pla3R5TVxcTmV4dFxcQWRvcHR1alp3aWVyemFrYVxcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEb2cgZnJvbSBcInN2Zy1yZWFjdC1sb2FkZXI/bmFtZT1Eb2chLi4vLi4vcHVibGljL2RvZ2dpZS5zdmdcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vTmF2YmFyL05hdmJhclwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdyYXBwZXIgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNvbGxhckNvbG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2VsZW1lbnRzXSA9IHdyYXBwZXIuY3VycmVudC5jaGlsZHJlbjtcclxuICAgIGNvbnN0IGNvbGxhciA9IGVsZW1lbnRzLmdldEVsZW1lbnRCeUlkKFwiY29sbGFyXCIpO1xyXG4gICAgY29uc3QgcmFuZCA9IFtcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDApKSArIDAsXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwKSkgKyAwLFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCkpICsgMFxyXG4gICAgXTtcclxuICAgIGNvbGxhci5zdHlsZS5zdHJva2UgPSBgcmdiKCR7cmFuZFswXX0sICR7cmFuZFsxXX0sICR7cmFuZFsyXX0pYDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWRlc2t0b3AtYmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXN1YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy13cmFwcGVyXCIgcmVmPXt3cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxEb2cgY2xhc3NOYW1lPVwiZG9nLXN2Z1wiIG9uQ2xpY2s9e2NoYW5nZUNvbGxhckNvbG9yfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgIGFkb3B0dWpcclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnp3aWVyemFrYTwvc3Bhbj4ucGxcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgT2JlanJ6eWogendpZXJ6YWtpIHplIHNjaHJvbmlzayx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnd5YmllcnogdGVnbywga3TDs3J5IG5hamJhcmR6aWVqIENpIHNpxJkgcG9kb2JhPC9zcGFuPiBpXHJcbiAgICAgICAgICAgICAgICAgIHBvZGFydWogbXUgbm93eSBkb21cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VlLW1vcmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbWFpblwiIGNsYXNzTmFtZT1cImEgYnRuIG1haW4tYnRuIHNlZS1tb3JlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT2JlanJ6eWogendpZXJ6YWtpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9kb3duLWFycm93LnBuZ1wiIGFsdD1cIkFycm93IGJvdHRvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE3MCwgMjA5LCA5Myk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAxODBkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgxNzAsIDIwOSwgOTMsIDEpIDAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMTA5LCAxOTAsIDY5LCAxKSA4MSUsXHJcbiAgICAgICAgICAgICAgcmdiYSg3LCAxNTMsIDcyLCAxKSAxMDAlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYwcHggMjBweCAyMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3ZnLXdyYXBwZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYm94IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtbW9yZS1idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtbW9yZS1idG4gaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtbW9yZS1idG4gc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAuaGVhZGVyLW91dGVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaGVhZGVyLXN0YWluLnBuZ1wiKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTcwLCAyMDksIDkzKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICA5MGRlZyxcclxuICAgICAgICAgICAgICAgIHJnYmEoMTcwLCAyMDksIDkzLCAxKSAwJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMTA5LCAxOTAsIDY5LCAxKSA4MSUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDcsIDE1MywgNzIsIDEpIDEwMCVcclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQtZGVza3RvcC1iZyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2hlYWRlci1zdGFpbi5wbmdcIikgdHJhbnNwYXJlbnQgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjUlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC01JSAzNSU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50LWlubmVyIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52aXN1YWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdmctd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC40cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgICAgICAuY29udGVudC1kZXNrdG9wLWJnIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDU1JTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMiUgMzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgLmRvZy1zdmc6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3RhaWwge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiB0YWlsIDEuNHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgdGFpbCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNmRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvZy1zdmcgI2VhciB7XHJcbiAgICAgICAgICBhbmltYXRpb246IGVhciAycztcclxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvZy1zdmc6aG92ZXIgI2VhciB7XHJcbiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgZWFyIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMzAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDVkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNjAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgOTAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDNkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Header\\\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Navbar/Hamburger.js":
/*!****************************************!*\
  !*** ./components/Navbar/Hamburger.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Navbar\\Hamburger.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Hamburger = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    type: "button",
    onClick: () => props.setIsActive(!props.isActive),
    className: "jsx-1013763085" + " " + `hamburger hamburger--3dx ${props.isActive && "is-active"}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1013763085" + " " + "hamburger-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1013763085" + " " + "hamburger-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1013763085",
    __self: undefined
  }, ".hamburger.jsx-1013763085{display:inline-block;cursor:pointer;-webkit-transition-property:opacity,filter;transition-property:opacity,filter;-webkit-transition-duration:0.15s;transition-duration:0.15s;-webkit-transition-timing-function:linear;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible;position:absolute;z-index:99;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.hamburger.is-active.jsx-1013763085 .hamburger-inner.jsx-1013763085,.hamburger.is-active.jsx-1013763085 .hamburger-inner.jsx-1013763085::before,.hamburger.is-active.jsx-1013763085 .hamburger-inner.jsx-1013763085::after{background-color:#000;}.hamburger-box.jsx-1013763085{width:40px;height:24px;display:inline-block;position:relative;}.hamburger-inner.jsx-1013763085{display:block;top:50%;margin-top:-2px;}.hamburger-inner.jsx-1013763085,.hamburger-inner.jsx-1013763085::before,.hamburger-inner.jsx-1013763085::after{width:40px;height:4px;background-color:#000;border-radius:4px;position:absolute;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-duration:0.15s;transition-duration:0.15s;-webkit-transition-timing-function:ease;transition-timing-function:ease;}.hamburger-inner.jsx-1013763085::before,.hamburger-inner.jsx-1013763085::after{content:\"\";display:block;}.hamburger-inner.jsx-1013763085::before{top:-10px;}.hamburger-inner.jsx-1013763085::after{bottom:-10px;}.hamburger--3dx.jsx-1013763085 .hamburger-box.jsx-1013763085{-webkit-perspective:80px;-moz-perspective:80px;-ms-perspective:80px;perspective:80px;}.hamburger--3dx.jsx-1013763085 .hamburger-inner.jsx-1013763085{-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0.15s cubic-bezier(0.645,0.045,0.355,1), background-color 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.hamburger--3dx.jsx-1013763085 .hamburger-inner.jsx-1013763085::before,.hamburger--3dx.jsx-1013763085 .hamburger-inner.jsx-1013763085::after{-webkit-transition:-webkit-transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);-webkit-transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);transition:transform 0s 0.1s cubic-bezier(0.645,0.045,0.355,1);}.hamburger--3dx.is-active.jsx-1013763085 .hamburger-inner.jsx-1013763085{background-color:transparent !important;-webkit-transform:rotateY(180deg);-ms-transform:rotateY(180deg);transform:rotateY(180deg);background:#fff;}.hamburger--3dx.is-active.jsx-1013763085 .hamburger-inner.jsx-1013763085::before{-webkit-transform:translate3d(0,10px,0) rotate(45deg);-ms-transform:translate3d(0,10px,0) rotate(45deg);transform:translate3d(0,10px,0) rotate(45deg);background:#fff;}.hamburger--3dx.is-active.jsx-1013763085 .hamburger-inner.jsx-1013763085::after{-webkit-transform:translate3d(0,-10px,0) rotate(-45deg);-ms-transform:translate3d(0,-10px,0) rotate(-45deg);transform:translate3d(0,-10px,0) rotate(-45deg);background:#fff;}@media (min-width:1024px){.hamburger.jsx-1013763085{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcSGFtYnVyZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCUyxBQUdrQyxBQXNCQyxBQUlYLEFBT0csQUFPSCxBQVdBLEFBSUQsQUFHRyxBQUlJLEFBSzhDLEFBSUcsQUFJMUIsQUFLUSxBQUlFLEFBTW5DLFVBbENqQixDQTdCYyxBQWNELEFBV0csRUFPaEIsQUFnQ0UsQ0F6RFEsT0FqQ08sQ0FzQmpCLEFBWWtCLEFBT00sQ0FkRCxFQXlCdkIsV0FuRHNDLEVBa0N0QyxFQXdDNEIsSUEvQ1IsQUFjQSxrQkFicEIsQUFjb0Isa0JBQ1ksS0FrQmhDLDZCQTVENEIsZ0JBMEVWLGdCQUNsQixJQUdrQixNQUlBLFVBSGxCLE1BSUEsRUFsRm9DLG9CQTBDUixtQkEwQjVCLHFDQW5FZSxJQTBDbUIsU0F6Q2xCLGNBQ00sb0JBQ1MsNkJBQ3BCLEFBdUNYLFNBdENXLFNBQ1EsaUJBRUMsa0JBQ1AsUUFzRGIsR0FyRFUsUUFDbUIsNkZBQzdCIiwiZmlsZSI6Ik06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcSGFtYnVyZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSGFtYnVyZ2VyID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgaGFtYnVyZ2VyIGhhbWJ1cmdlci0tM2R4ICR7cHJvcHMuaXNBY3RpdmUgJiYgXCJpcy1hY3RpdmVcIn1gfVxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldElzQWN0aXZlKCFwcm9wcy5pc0FjdGl2ZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmhhbWJ1cmdlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCBmaWx0ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oYW1idXJnZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIsXHJcbiAgICAgICAgICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXHJcbiAgICAgICAgICAuaGFtYnVyZ2VyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhhbWJ1cmdlci1ib3gge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGFtYnVyZ2VyLWlubmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhhbWJ1cmdlci1pbm5lcixcclxuICAgICAgICAgIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSxcclxuICAgICAgICAgIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXHJcbiAgICAgICAgICAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgYm90dG9tOiAtMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1ib3gge1xyXG4gICAgICAgICAgICBwZXJzcGVjdGl2ZTogODBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwcyAwLjFzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oYW1idXJnZXItLTNkeCAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXHJcbiAgICAgICAgICAuaGFtYnVyZ2VyLS0zZHggLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgMC4xcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhhbWJ1cmdlci0tM2R4LmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGFtYnVyZ2VyLS0zZHguaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oYW1idXJnZXItLTNkeC5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5oYW1idXJnZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlcjtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Navbar\\\\Hamburger.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ }),

/***/ "./components/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/Navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hamburger */ "./components/Navbar/Hamburger.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Navbar\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Navbar = props => {
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx("div", {
    className: "jsx-468195527" + " " + `navbar ${props.notHome ? "not-home" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-468195527" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-468195527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "adoptuj", __jsx("span", {
    className: "jsx-468195527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "zwierzaka"), ".pl"))), __jsx("div", {
    className: "jsx-468195527" + " " + "hamburger-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_Hamburger__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isActive: isActive,
    setIsActive: setIsActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), __jsx("nav", {
    className: "jsx-468195527" + " " + `nav ${isActive ? "is-active" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-468195527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-468195527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/kontakt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-468195527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Kontakt"))), __jsx("li", {
    className: "jsx-468195527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/logowanie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-468195527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Logowanie"))), __jsx("li", {
    className: "jsx-468195527",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/rejestracja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-468195527" + " " + "signup-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Rejestracja"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "468195527",
    __self: undefined
  }, ".navbar.jsx-468195527{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:25px 0;}.nav.jsx-468195527{position:absolute;z-index:20;right:0;top:0;padding:25px;background:rgba(0,0,0,0.7);color:white;padding-top:20px;width:100%;-webkit-transform:translateY(-200px);-ms-transform:translateY(-200px);transform:translateY(-200px);-webkit-transition:-webkit-transform 0.2s ease;-webkit-transition:transform 0.2s ease;transition:transform 0.2s ease;}.nav.is-active.jsx-468195527{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}ul.jsx-468195527{list-style-type:none;}li.jsx-468195527{margin-bottom:14px;}li.jsx-468195527:last-child{margin-bottom:0;}a.jsx-468195527{color:#fff;}a.jsx-468195527:hover{color:#f5f5f5;}.hamburger-box.jsx-468195527{position:relative;height:32px;width:40px;}.title.jsx-468195527{visibility:hidden;}.title.jsx-468195527 h2.jsx-468195527{font-size:1.2rem;color:var(--font-color);}.title.jsx-468195527 h2.jsx-468195527{font-size:1.2rem;color:var(--font-color);}.not-home.jsx-468195527 .title.jsx-468195527{visibility:visible;}.not-home.jsx-468195527 .title.jsx-468195527{-webkit-text-decoration:none;text-decoration:none;}.not-home.jsx-468195527 .title.jsx-468195527 h2.jsx-468195527 span.jsx-468195527{color:var(--main-color);}.not-home.jsx-468195527 .nav.jsx-468195527{background:#000;}@media (min-width:1024px){.navbar.jsx-468195527{height:auto;}.nav.jsx-468195527{background:transparent;position:relative;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);padding:0;}ul.jsx-468195527{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-468195527{margin-bottom:0;margin-left:24px;}li.jsx-468195527:last-child{margin-left:16px;}a.jsx-468195527{-webkit-text-decoration:none;text-decoration:none;}.signup-btn.jsx-468195527{background:var(--main-color);color:white;-webkit-transition:background 0.2s ease;transition:background 0.2s ease;border-radius:99px;padding:6px 18px;border:none;display:inline-block;}.signup-btn.jsx-468195527:hover{background:#e3396b;}.title.jsx-468195527 h2.jsx-468195527{font-size:1.5rem;}.not-home.jsx-468195527 a.jsx-468195527{color:var(--font-color);}.not-home.jsx-468195527 .signup-btn.jsx-468195527{color:#fff;}}@media (min-width:1280px){li.jsx-468195527{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDUyxBQUcwQixBQU9LLEFBY1EsQUFJTCxBQUlGLEFBSUgsQUFJTCxBQUlHLEFBSUksQUFNQSxBQUlELEFBS0EsQUFLRSxBQUlFLEFBSUcsQUFJUixBQUtGLEFBSVcsQUFPVixBQU1HLEFBS0MsQUFJSSxBQUlRLEFBVVYsQUFJRixBQUlPLEFBSWIsQUFNSSxXQXRHbkIsQUFpR0UsQ0FwREEsRUF6Q0YsQ0FtR0UsQ0EzR0YsQUE0Q0EsQUFzQnFCLENBNUNLLEFBS0EsQUE0Q3hCLEFBc0JBLENBdkhXLEFBc0NDLEFBTWQsQ0F0QkEsQUFvQ0EsQUF5REUsRUFqR0YsRUE2RHNCLENBYnRCLEFBeURFLEtBMUhRLEFBd0dNLENBbEVILEdBc0RYLElBM0ZNLElBc0NSLEFBU0EsQUFLQSxBQTBCOEIsQUEwQk0sRUF2R3JCLE9BMkRmLEFBdUNFLE1Bakc4QixrQkFYWCxBQTZGUSxTQWpGZixPQVNkLEtBUm1CLGlCQUNOLENBb0dVLFVBbkdRLFFBeUVqQixDQTJCTyxTQTFCbkIsUUEyQmMsWUFDUyxNQXBITyxJQTZGVCxXQXdCckIsd0NBdEcrQiwwQ0ErRS9CLGtCQTdGZSxlQUNqQiwwQ0FjQSIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxOYXZiYXJcXE5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gXCIuL0hhbWJ1cmdlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdmJhciAke3Byb3BzLm5vdEhvbWUgPyBcIm5vdC1ob21lXCIgOiBcIlwifWB9PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIGFkb3B0dWo8c3Bhbj56d2llcnpha2E8L3NwYW4+LnBsXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuICAgICAgICA8SGFtYnVyZ2VyIGlzQWN0aXZlPXtpc0FjdGl2ZX0gc2V0SXNBY3RpdmU9e3NldElzQWN0aXZlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2BuYXYgJHtpc0FjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rb250YWt0XCI+XHJcbiAgICAgICAgICAgICAgPGE+S29udGFrdDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dvd2FuaWVcIj5cclxuICAgICAgICAgICAgICA8YT5Mb2dvd2FuaWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVqZXN0cmFjamFcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzaWdudXAtYnRuXCI+UmVqZXN0cmFjamE8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXYuaXMtYWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhhbWJ1cmdlci1ib3gge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aXRsZSBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubm90LWhvbWUgLnRpdGxlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubm90LWhvbWUgLnRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ub3QtaG9tZSAudGl0bGUgaDIgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubm90LWhvbWUgLm5hdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDE4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNpZ251cC1idG46aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMzM5NmI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZSBoMiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ub3QtaG9tZSBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ub3QtaG9tZSAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Navbar\\\\Navbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/svg-react-loader/lib/loader.js?name=Dog!./public/doggie.svg":
/*!**********************************************************************************!*\
  !*** ./node_modules/svg-react-loader/lib/loader.js?name=Dog!./public/doggie.svg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Dog (props) {
    return React.createElement("svg",props,[React.createElement("g",{"id":"doggie","key":0},React.createElement("g",{"clipPath":"url(#clip0)"},[React.createElement("path",{"id":"bg","d":"M490.92 48.71C518.61 94.55 499.13 173.78 500.99 240.94C502.85 308.1 526 363.09 513 408C500 452.91 450.74 487.75 401.19 493.32C351.64 498.89 302.1 475.32 234.79 465.63C167.48 455.94 82.31 460.63 37.79 422.71C-6.73 384.79 -10.65 304.53 19.29 246.9C49.23 189.27 113.08 154 167.8 113C222.52 72 268.35 24.73 328.5 7.37999C388.65 -9.97001 463.36 2.73999 490.92 48.71Z","fill":"#F2F2F2","key":0}),React.createElement("g",{"id":"body","key":1},[React.createElement("path",{"id":"Vector","d":"M397.62 330.82C397.53 335.45 384.89 428.75 384.89 428.75L370.32 439.58H421.24C421.24 439.58 430.92 394.79 464.18 361.91C466.08 356.91 437.53 334.72 437.53 334.72L397.62 330.82Z","fill":"#D37C59","key":0}),React.createElement("path",{"id":"Vector 2","d":"M163.69 298.94C154.95 298.793 146.003 298.717 136.85 298.71C130.22 298.71 123.85 299.45 123.85 301.17C123.85 302.89 133.91 327.68 135.14 328.9C136.37 330.12 148.64 331.71 148.64 338.72C148.64 342.16 147.38 356.4 131.7 356.4C111.07 356.4 67.88 285.79 67.88 263.4C74.75 260.7 131.21 249.62 131.21 249.62","fill":"#D37C59","key":1}),React.createElement("path",{"id":"Vector 3","d":"M260.6 304.26C452.6 323.09 507.48 385.48 507.48 423.72C507.48 426.86 492.33 437.21 492.33 439.58H548.17C549.17 436.58 552.17 410.58 552.17 380.58C552.17 288.35 468.1 192.58 450.17 192.58C444.17 192.58 426.77 198.58 373.17 198.58C96.08 198.58 220.09 54.58 118.17 54.58C85.05 54.58 66.88 97.41 51.42 97.41C47.49 97.41 20.98 92.75 18.52 92.75C16.06 92.75 7.51999 96.43 7.51999 104.53C7.51999 167.38 61.94 170.77 85.09 185.3C96.71 192.59 124.09 239.06 131.24 249.58C141.15 265.58 246.45 429.43 246.45 429.43L231.45 439.58H294.25L260.6 304.26Z","fill":"#DE8E68","key":2})]),React.createElement("path",{"id":"ear","d":"M124 81.73C130.73 79.64 168.54 78.02 186.41 86.6C186.41 122.6 177.03 171.73 146.74 168.51C120.52 165.72 106.83 123.49 124 81.73Z","fill":"#744626","key":2}),React.createElement("path",{"id":"tongue","d":"M59.73 144C62.73 149.49 86.65 184.13 102.61 178C113.32 173.88 99.61 141.16 93.44 133.62C89.58 135.68 70.58 142.93 59.73 144Z","fill":"#FD8369","key":3}),React.createElement("path",{"id":"Vector 4","d":"M78.91 139.7C80.52 142.56 83.01 147.09 87.11 153.11","stroke":"#D14D37","strokeLinecap":"round","strokeLinejoin":"round","key":4}),React.createElement("path",{"id":"Vector 5","d":"M9.79001 125.14C21.03 144.54 56.63 153.61 96.84 131.85","stroke":"#3A3A3A","strokeWidth":"2","strokeMiterlimit":"10","strokeLinecap":"round","key":5}),React.createElement("path",{"id":"Vector 6","d":"M20.56 97.37C25.0059 97.37 28.61 95.7537 28.61 93.76C28.61 91.7662 25.0059 90.15 20.56 90.15C16.1141 90.15 12.51 91.7662 12.51 93.76C12.51 95.7537 16.1141 97.37 20.56 97.37Z","fill":"#3A3A3A","key":6}),React.createElement("path",{"id":"Vector 7","d":"M88.09 97.36C90.3268 97.36 92.14 93.9305 92.14 89.7C92.14 85.4695 90.3268 82.04 88.09 82.04C85.8533 82.04 84.04 85.4695 84.04 89.7C84.04 93.9305 85.8533 97.36 88.09 97.36Z","fill":"#3A3A3A","key":7}),React.createElement("path",{"id":"tail","d":"M476.37 222.27C505.1 222.27 537.62 173.7 537.62 149.83C537.62 100.72 492.86 82.72 477.7 82.72C443.7 82.72 435.1 116.55 435.1 119.72C435.1 122.89 436.49 127.33 437.25 127.33C438.01 127.33 442.64 124.94 445.8 124.94C475.13 124.94 477.91 147.23 477.91 150.79C477.91 179.86 450.04 194.17 445.36 194.17C440.68 194.17 465.16 222.27 476.37 222.27Z","fill":"#DE8E68","key":8}),React.createElement("path",{"id":"collar","d":"M110.46 217.2C121.88 213.47 173.22 189.74 198.7 154.2","stroke":"#56CAD8","strokeWidth":"10","strokeMiterlimit":"10","strokeLinecap":"round","key":9})])),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0"},React.createElement("rect",{"width":"553","height":"495","fill":"white"})))]);
}

Dog.defaultProps = {"viewBox":"0 0 553 495","fill":"none"};

module.exports = Dog;

Dog.default = Dog;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const index = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! M:\ProjektyM\Next\AdoptujZwierzaka\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map