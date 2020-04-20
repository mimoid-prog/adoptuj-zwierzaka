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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Footer\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Footer = () => {
  return __jsx("div", {
    className: "jsx-611161892" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-611161892" + " " + "a logo-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-611161892" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "adoptujzwierzaka.pl"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "611161892",
    __self: undefined
  }, ".footer.jsx-611161892{background:#242424;padding:30px 0;text-align:center;}.logo-link.jsx-611161892{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEZvb3RlclxcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFTLEFBR2dDLEFBTVAsWUFDZCxPQU5pQixlQUNHLGtCQUNwQiIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxGb290ZXJcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImEgbG9nby1saW5rXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibG9nb1wiPmFkb3B0dWp6d2llcnpha2EucGw8L2gyPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNDI0MjQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sb2dvLWxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdfQ== */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Footer\\\\Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

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
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/Navbar */ "./components/Navbar/Navbar.js");
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Header\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Dog = function Dog(props) {
  return __jsx("svg", _extends({}, props, {
    __self: this
  }), __jsx("g", {
    clipPath: "url(#clip0)",
    id: "doggie",
    __self: this
  }, __jsx("path", {
    id: "bg",
    d: "M490.92 48.71c27.69 45.84 8.21 125.07 10.07 192.23C502.85 308.1 526 363.09 513 408c-13 44.91-62.26 79.75-111.81 85.32-49.55 5.57-99.09-18-166.4-27.69-67.31-9.69-152.48-5-197-42.92-44.52-37.92-48.44-118.18-18.5-175.81C49.23 189.27 113.08 154 167.8 113 222.52 72 268.35 24.73 328.5 7.38c60.15-17.35 134.86-4.64 162.42 41.33z",
    fill: "#F2F2F2",
    __self: this
  }), __jsx("g", {
    id: "body",
    __self: this
  }, __jsx("path", {
    id: "Vector",
    d: "M397.62 330.82c-.09 4.63-12.73 97.93-12.73 97.93l-14.57 10.83h50.92s9.68-44.79 42.94-77.67c1.9-5-26.65-27.19-26.65-27.19l-39.91-3.9z",
    fill: "#D37C59",
    __self: this
  }), __jsx("path", {
    id: "Vector 2",
    d: "M163.69 298.94c-8.74-.147-17.687-.223-26.84-.23-6.63 0-13 .74-13 2.46s10.06 26.51 11.29 27.73c1.23 1.22 13.5 2.81 13.5 9.82 0 3.44-1.26 17.68-16.94 17.68-20.63 0-63.82-70.61-63.82-93 6.87-2.7 63.33-13.78 63.33-13.78",
    fill: "#D37C59",
    __self: this
  }), __jsx("path", {
    id: "Vector 3",
    d: "M260.6 304.26c192 18.83 246.88 81.22 246.88 119.46 0 3.14-15.15 13.49-15.15 15.86h55.84c1-3 4-29 4-59 0-92.23-84.07-188-102-188-6 0-23.4 6-77 6-277.09 0-153.08-144-255-144-33.12 0-51.29 42.83-66.75 42.83-3.93 0-30.44-4.66-32.9-4.66-2.46 0-11 3.68-11 11.78 0 62.85 54.42 66.24 77.57 80.77 11.62 7.29 39 53.76 46.15 64.28 9.91 16 115.21 179.85 115.21 179.85l-15 10.15h62.8L260.6 304.26z",
    fill: "#DE8E68",
    __self: this
  })), __jsx("path", {
    id: "ear",
    d: "M124 81.73c6.73-2.09 44.54-3.71 62.41 4.87 0 36-9.38 85.13-39.67 81.91-26.22-2.79-39.91-45.02-22.74-86.78z",
    fill: "#744626",
    __self: this
  }), __jsx("path", {
    id: "tongue",
    d: "M59.73 144c3 5.49 26.92 40.13 42.88 34 10.71-4.12-3-36.84-9.17-44.38-3.86 2.06-22.86 9.31-33.71 10.38z",
    fill: "#FD8369",
    __self: this
  }), __jsx("path", {
    id: "Vector 4",
    d: "M78.91 139.7c1.61 2.86 4.1 7.39 8.2 13.41",
    stroke: "#D14D37",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    __self: this
  }), __jsx("path", {
    id: "Vector 5",
    d: "M9.79 125.14c11.24 19.4 46.84 28.47 87.05 6.71",
    stroke: "#3A3A3A",
    strokeWidth: "2",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    __self: this
  }), __jsx("path", {
    id: "Vector 6",
    d: "M20.56 97.37c4.446 0 8.05-1.616 8.05-3.61 0-1.994-3.604-3.61-8.05-3.61-4.446 0-8.05 1.616-8.05 3.61 0 1.994 3.604 3.61 8.05 3.61z",
    fill: "#3A3A3A",
    __self: this
  }), __jsx("path", {
    id: "Vector 7",
    d: "M88.09 97.36c2.237 0 4.05-3.43 4.05-7.66s-1.813-7.66-4.05-7.66-4.05 3.43-4.05 7.66 1.813 7.66 4.05 7.66z",
    fill: "#3A3A3A",
    __self: this
  }), __jsx("path", {
    id: "tail",
    d: "M476.37 222.27c28.73 0 61.25-48.57 61.25-72.44 0-49.11-44.76-67.11-59.92-67.11-34 0-42.6 33.83-42.6 37 0 3.17 1.39 7.61 2.15 7.61s5.39-2.39 8.55-2.39c29.33 0 32.11 22.29 32.11 25.85 0 29.07-27.87 43.38-32.55 43.38-4.68 0 19.8 28.1 31.01 28.1z",
    fill: "#DE8E68",
    __self: this
  }), __jsx("path", {
    id: "collar",
    d: "M110.46 217.2c11.42-3.73 62.76-27.46 88.24-63",
    stroke: "#56CAD8",
    strokeWidth: "10",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    __self: this
  })), __jsx("defs", {
    __self: this
  }, __jsx("clipPath", {
    id: "clip0",
    __self: this
  }, __jsx("path", {
    fill: "#fff",
    d: "M0 0h553v495H0z",
    __self: this
  }))));
};

Dog.defaultProps = {
  viewBox: "0 0 553 495",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


const Header = () => {
  const wrapper = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const changeCollarColor = () => {
    const [elements] = wrapper.current.children;
    const collar = elements.getElementById("collar");
    const rand = [Math.floor(Math.random() * (255 - 0)) + 0, Math.floor(Math.random() * (255 - 0)) + 0, Math.floor(Math.random() * (255 - 0)) + 0];
    collar.style.stroke = `rgb(${rand[0]}, ${rand[1]}, ${rand[2]})`;
  };

  return __jsx("div", {
    className: "jsx-3304577250" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3304577250" + " " + "content-desktop-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3304577250" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3304577250" + " " + "header-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3304577250" + " " + "visual",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    ref: wrapper,
    className: "jsx-3304577250" + " " + "svg-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(Dog, {
    className: "dog-svg",
    onClick: changeCollarColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-3304577250" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3304577250" + " " + "content-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-3304577250" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "adoptuj", __jsx("br", {
    className: "jsx-3304577250",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3304577250",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "zwierzaka"), ".pl"), __jsx("p", {
    className: "jsx-3304577250",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Obejrzyj zwierzaki ze schronisk,", __jsx("span", {
    className: "jsx-3304577250",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "wybierz tego, kt\xF3ry najbardziej Ci si\u0119 podoba"), " i podaruj mu nowy dom"), __jsx("div", {
    className: "jsx-3304577250" + " " + "see-more-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("a", {
    href: "#intro",
    className: "jsx-3304577250" + " " + "a btn main-btn see-more-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3304577250",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Obejrzyj zwierzaki", __jsx("img", {
    src: "/down-arrow.png",
    alt: "Arrow bottom",
    className: "jsx-3304577250",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3526323872",
    __self: undefined
  }, ".header.jsx-3304577250{background:rgb(170,209,93);background:linear-gradient( 180deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding-bottom:10px;}.content.jsx-3304577250{background:white;border-radius:10px;padding:60px 20px 20px;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}h1.jsx-3304577250{font-size:30px;line-height:1.2;text-align:center;}h1.jsx-3304577250 span.jsx-3304577250{color:var(--main-color);}p.jsx-3304577250{margin-top:20px;line-height:1.4;}.svg-wrapper.jsx-3304577250{width:60%;margin:0 auto;z-index:10;position:relative;}.see-more-box.jsx-3304577250{text-align:center;}.see-more-btn.jsx-3304577250{margin:30px auto 0;}.see-more-btn.jsx-3304577250 img.jsx-3304577250{width:20px;margin-left:10px;}.see-more-btn.jsx-3304577250 span.jsx-3304577250{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (min-width:1024px){.header-outer.jsx-3304577250{background-image:url(\"/header-stain.png\");background-size:cover;}.header.jsx-3304577250{background:rgb(170,209,93);background:linear-gradient( 90deg, rgba(170,209,93,1) 0%, rgba(109,190,69,1) 81%, rgba(7,153,72,1) 100% );padding:0;}.header-inner.jsx-3304577250{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;padding:30px 0;}.content.jsx-3304577250{width:60%;background-color:transparent;padding:50px 0;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.content-desktop-bg.jsx-3304577250{background:url(\"/header-stain.png\") transparent no-repeat;background-size:65%;background-position:-5% 35%;}.content-inner.jsx-3304577250{text-align:center;}h1.jsx-3304577250{font-size:3.8rem;}p.jsx-3304577250{font-size:1.2rem;}p.jsx-3304577250 span.jsx-3304577250{display:block;}.visual.jsx-3304577250{width:40%;}.svg-wrapper.jsx-3304577250{width:60%;}}@media (min-width:1280px){.content.jsx-3304577250{padding:80px 0;}h1.jsx-3304577250{font-size:4.4rem;}}@media (min-width:1400px){.content-desktop-bg.jsx-3304577250{background-size:55%;background-position:12% 35%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEUyxBQUcwQyxBQVdaLEFBT0YsQUFNUyxBQUlSLEFBS04sQUFPUSxBQUlDLEFBSVIsQUFLRSxBQU0rQixBQUtiLEFBWWhCLEFBT0gsQUFRZ0QsQUFNeEMsQUFJRCxBQUlBLEFBSUgsQUFJSixBQUlBLEFBTUssQUFJRSxBQU1HLFVBbkdSLEFBbURpQixBQTZCL0IsQUFJQSxDQXJFaUIsR0E2RGpCLENBM0ZnQixBQXlHaEIsQ0EvRmdCLENBakJHLEFBMEZuQixBQUlBLEFBc0JBLENBdkZGLEFBeURFLENBckRGLENBeUZnQyxJQTdHaEMsQUFVYSxHQTdCVixBQWdFRSxDQXBCTCxHQTlCb0IsQ0FVcEIsR0FNb0IsQ0F2QkssR0F5RU4sR0ExQk8sTUEyRXhCLENBbEhGLElBZ0JBLENBa0Q0QixJQUtKLENBOUVNLEtBK0M1QixVQVBtQixBQXVCVSxJQWdCQyw0QkFDOUIsMkJBdEJZLENBakVRLElBaUZwQixLQWZBLFdBakVGLENBT0EsWUF3Q0EsQUF1QnlCLHFHQUNOLGVBQ2pCIiwiZmlsZSI6Ik06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRG9nIGZyb20gXCIuLi8uLi9wdWJsaWMvZG9nZ2llLnN2Z1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9OYXZiYXIvTmF2YmFyXCI7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd3JhcHBlciA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ29sbGFyQ29sb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZWxlbWVudHNdID0gd3JhcHBlci5jdXJyZW50LmNoaWxkcmVuO1xyXG4gICAgY29uc3QgY29sbGFyID0gZWxlbWVudHMuZ2V0RWxlbWVudEJ5SWQoXCJjb2xsYXJcIik7XHJcbiAgICBjb25zdCByYW5kID0gW1xyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCkpICsgMCxcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDApKSArIDAsXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwKSkgKyAwLFxyXG4gICAgXTtcclxuICAgIGNvbGxhci5zdHlsZS5zdHJva2UgPSBgcmdiKCR7cmFuZFswXX0sICR7cmFuZFsxXX0sICR7cmFuZFsyXX0pYDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWRlc2t0b3AtYmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aXN1YWxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy13cmFwcGVyXCIgcmVmPXt3cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxEb2cgY2xhc3NOYW1lPVwiZG9nLXN2Z1wiIG9uQ2xpY2s9e2NoYW5nZUNvbGxhckNvbG9yfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICBhZG9wdHVqXHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj56d2llcnpha2E8L3NwYW4+LnBsXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIE9iZWpyenlqIHp3aWVyemFraSB6ZSBzY2hyb25pc2ssXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnd5YmllcnogdGVnbywga3TDs3J5IG5hamJhcmR6aWVqIENpIHNpxJkgcG9kb2JhPC9zcGFuPiBpXHJcbiAgICAgICAgICAgICAgICAgIHBvZGFydWogbXUgbm93eSBkb21cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VlLW1vcmUtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjaW50cm9cIiBjbGFzc05hbWU9XCJhIGJ0biBtYWluLWJ0biBzZWUtbW9yZS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIE9iZWpyenlqIHp3aWVyemFraVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZG93bi1hcnJvdy5wbmdcIiBhbHQ9XCJBcnJvdyBib3R0b21cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxNzAsIDIwOSwgOTMpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMTgwZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMTcwLCAyMDksIDkzLCAxKSAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDEwOSwgMTkwLCA2OSwgMSkgODElLFxyXG4gICAgICAgICAgICAgIHJnYmEoNywgMTUzLCA3MiwgMSkgMTAwJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2MHB4IDIwcHggMjBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnN2Zy13cmFwcGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJveCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYnRuIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2VlLW1vcmUtYnRuIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlci1vdXRlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2hlYWRlci1zdGFpbi5wbmdcIik7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE3MCwgMjA5LCA5Myk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgOTBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDE3MCwgMjA5LCA5MywgMSkgMCUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDEwOSwgMTkwLCA2OSwgMSkgODElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSg3LCAxNTMsIDcyLCAxKSAxMDAlXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci1pbm5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50LWRlc2t0b3AtYmcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9oZWFkZXItc3RhaW4ucG5nXCIpIHRyYW5zcGFyZW50IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDY1JTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNSUgMzUlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudC1pbm5lciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudmlzdWFsIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3ZnLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQuNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgICAgLmNvbnRlbnQtZGVza3RvcC1iZyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1NSU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTIlIDM1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIC5kb2ctc3ZnOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0YWlsIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogdGFpbCAxLjRzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHRhaWwge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTZkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMjUlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC02ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDM1JSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG9nLXN2ZyAjZWFyIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogZWFyIDFzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG9nLXN2Zzpob3ZlciAjZWFyIHtcclxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBlYXIge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAzMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA2MCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA5MCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooM2RlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Header\\\\Header.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2925168011",
    __self: undefined
  }, ".dog-svg:hover{cursor:pointer;}#tail{-webkit-animation:tail 1.4s infinite alternate;animation:tail 1.4s infinite alternate;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform-box:fill-box;-ms-transform-box:fill-box;transform-box:fill-box;}@-webkit-keyframes tail{0%{-webkit-transform:rotateZ(-6deg);-ms-transform:rotateZ(-6deg);transform:rotateZ(-6deg);}10%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}25%{-webkit-transform:rotateZ(-6deg);-ms-transform:rotateZ(-6deg);transform:rotateZ(-6deg);}35%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}@keyframes tail{0%{-webkit-transform:rotateZ(-6deg);-ms-transform:rotateZ(-6deg);transform:rotateZ(-6deg);}10%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}25%{-webkit-transform:rotateZ(-6deg);-ms-transform:rotateZ(-6deg);transform:rotateZ(-6deg);}35%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}.dog-svg #ear{-webkit-animation:ear 1s;animation:ear 1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;-webkit-transform-box:fill-box;-ms-transform-box:fill-box;transform-box:fill-box;-webkit-animation-play-state:paused;animation-play-state:paused;}.dog-svg:hover #ear{-webkit-animation-play-state:running;animation-play-state:running;}@-webkit-keyframes ear{0%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}30%{-webkit-transform:rotateZ(5deg);-ms-transform:rotateZ(5deg);transform:rotateZ(5deg);}60%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}90%{-webkit-transform:rotateZ(3deg);-ms-transform:rotateZ(3deg);transform:rotateZ(3deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}@keyframes ear{0%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}30%{-webkit-transform:rotateZ(5deg);-ms-transform:rotateZ(5deg);transform:rotateZ(5deg);}60%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}90%{-webkit-transform:rotateZ(3deg);-ms-transform:rotateZ(3deg);transform:rotateZ(3deg);}100%{-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNNeUIsQUFHMEIsQUFJd0IsQUFPWixBQUdELEFBR0MsQUFHRCxBQUdBLEFBS1QsQUFRWSxBQUtILEFBR0EsQUFHQSxBQUdBLEFBR0EsZUFwRDVCLDJCQTRCcUMsd0JBUXJDLGtCQXRCRSxBQU1BLEFBR0EsQUFrQkEsQUFHQSxBQUdBLEFBR0EsQUFHQSxFQWpENkIsQ0FPN0IsQUFNQSxpQ0FZcUIsaUVBeEJFLFVBeUJBLHVFQXhCekIsVUF5QjhCLGdFQUM5QiIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERvZyBmcm9tIFwiLi4vLi4vcHVibGljL2RvZ2dpZS5zdmdcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vTmF2YmFyL05hdmJhclwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdyYXBwZXIgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZUNvbGxhckNvbG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2VsZW1lbnRzXSA9IHdyYXBwZXIuY3VycmVudC5jaGlsZHJlbjtcclxuICAgIGNvbnN0IGNvbGxhciA9IGVsZW1lbnRzLmdldEVsZW1lbnRCeUlkKFwiY29sbGFyXCIpO1xyXG4gICAgY29uc3QgcmFuZCA9IFtcclxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDApKSArIDAsXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwKSkgKyAwLFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCkpICsgMCxcclxuICAgIF07XHJcbiAgICBjb2xsYXIuc3R5bGUuc3Ryb2tlID0gYHJnYigke3JhbmRbMF19LCAke3JhbmRbMV19LCAke3JhbmRbMl19KWA7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1kZXNrdG9wLWJnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdmctd3JhcHBlclwiIHJlZj17d3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8RG9nIGNsYXNzTmFtZT1cImRvZy1zdmdcIiBvbkNsaWNrPXtjaGFuZ2VDb2xsYXJDb2xvcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgYWRvcHR1alxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+endpZXJ6YWthPC9zcGFuPi5wbFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBPYmVqcnp5aiB6d2llcnpha2kgemUgc2Nocm9uaXNrLFxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj53eWJpZXJ6IHRlZ28sIGt0w7NyeSBuYWpiYXJkemllaiBDaSBzacSZIHBvZG9iYTwvc3Bhbj4gaVxyXG4gICAgICAgICAgICAgICAgICBwb2RhcnVqIG11IG5vd3kgZG9tXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZS1tb3JlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2ludHJvXCIgY2xhc3NOYW1lPVwiYSBidG4gbWFpbi1idG4gc2VlLW1vcmUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPYmVqcnp5aiB6d2llcnpha2lcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Rvd24tYXJyb3cucG5nXCIgYWx0PVwiQXJyb3cgYm90dG9tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTcwLCAyMDksIDkzKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDE4MGRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDE3MCwgMjA5LCA5MywgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxMDksIDE5MCwgNjksIDEpIDgxJSxcclxuICAgICAgICAgICAgICByZ2JhKDcsIDE1MywgNzIsIDEpIDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdmctd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtbW9yZS1ib3gge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlZS1tb3JlLWJ0biBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5oZWFkZXItb3V0ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9oZWFkZXItc3RhaW4ucG5nXCIpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxNzAsIDIwOSwgOTMpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIDkwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgxNzAsIDIwOSwgOTMsIDEpIDAlLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgxMDksIDE5MCwgNjksIDEpIDgxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoNywgMTUzLCA3MiwgMSkgMTAwJVxyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG5cclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudC1kZXNrdG9wLWJnIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaGVhZGVyLXN0YWluLnBuZ1wiKSB0cmFuc3BhcmVudCBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2NSU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTUlIDM1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQtaW5uZXIge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMy44cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCBzcGFuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZpc3VhbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN2Zy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogODBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgIC5jb250ZW50LWRlc2t0b3AtYmcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTUlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEyJSAzNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAuZG9nLXN2Zzpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdGFpbCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHRhaWwgMS40cyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyB0YWlsIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC02ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDI1JSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNmRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAzNSUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvZy1zdmcgI2VhciB7XHJcbiAgICAgICAgICBhbmltYXRpb246IGVhciAxcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvZy1zdmc6aG92ZXIgI2VhciB7XHJcbiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgZWFyIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMzAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDVkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNjAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgOTAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDNkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Header\\\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Home/Cta.js":
/*!********************************!*\
  !*** ./components/Home/Cta.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Home\\Cta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Toys = function Toys(props) {
  return __jsx("svg", _extends({}, props, {
    __self: this
  }), __jsx("path", {
    d: "M503.4 69.85c13.895 0 25.16-11.264 25.16-25.16s-11.265-25.16-25.16-25.16-25.16 11.264-25.16 25.16 11.265 25.16 25.16 25.16z",
    fill: "#d37c59",
    __self: this
  }), __jsx("g", {
    fill: "#de8e68",
    __self: this
  }, __jsx("path", {
    d: "M549.2 62.34c17.215 0 31.17-13.955 31.17-31.17S566.415 0 549.2 0s-31.17 13.955-31.17 31.17 13.955 31.17 31.17 31.17zm128.43 3c17.215 0 31.17-13.955 31.17-31.17S694.845 3 677.63 3s-31.17 13.955-31.17 31.17 13.955 31.17 31.17 31.17z",
    __self: this
  }), __jsx("use", {
    xlinkHref: "#B",
    __self: this
  }), __jsx("path", {
    d: "M598.02 53.33c12.24 0 22.16-9.92 22.16-22.16S610.26 9 598.02 9s-22.16 9.92-22.16 22.16 9.92 22.16 22.16 22.16z",
    __self: this
  })), __jsx("use", {
    xlinkHref: "#B",
    x: "30.79",
    y: "-6.74",
    fill: "#d37c59",
    __self: this
  }), __jsx("use", {
    xlinkHref: "#B",
    x: "57.08",
    fill: "#de8e68",
    __self: this
  }), __jsx("path", {
    d: "M710.67 75.85c13.895 0 25.16-11.264 25.16-25.16s-11.265-25.16-25.16-25.16S685.5 36.795 685.5 50.7s11.264 25.16 25.16 25.16zM578.5 90.13c17.215 0 31.17-13.955 31.17-31.17S595.705 27.8 578.5 27.8s-31.17 13.955-31.17 31.17 13.955 31.17 31.17 31.17z",
    fill: "#d37c59",
    __self: this
  }), __jsx("path", {
    d: "M680.2 115.42c73.4 29.85 170.18 51.17 197.25 102.52 26.88 51.35-15.94 132.92-57.66 200.58S737.68 539.77 685.6 571.1c-51.9 31.33-115.5 40.22-198.18 66.55-82.68 26.14-184.27 69.7-237.85 38.93-53.4-30.78-58.76-136.07-71.37-226.73s-32.44-166.66-11.12-228.2 84-108.82 147.38-142 127.73-52.1 185-42.45c57.1 9.8 107.35 48.38 180.76 78.22z",
    fill: "#fff",
    __self: this
  }), __jsx("path", {
    d: "M774.84 500.53h-339l26-383.57-26-88.43h339l-21 89.52 21 382.48z",
    fill: "#fed385",
    __self: this
  }), __jsx("g", {
    fill: "#fcc486",
    __self: this
  }, __jsx("path", {
    d: "M710.1 88.53H402.83l31.73-60h307.28l-31.73 60zM758.42 88.53h44.42l-16.6-60h-44.4l16.58 60z",
    __self: this
  })), __jsx("path", {
    d: "M440 438.54l-4.2 62h339l-14.7-268.3c-79.3 86.43-196.26 174.9-320.1 206.3z",
    fill: "#fccd81",
    __self: this
  }), __jsx("path", {
    d: "M807.52 574.97c60.32 0 109.22-48.9 109.22-109.22s-48.9-109.22-109.22-109.22-109.22 48.9-109.22 109.22 48.9 109.22 109.22 109.22z",
    fill: "#fd8369",
    __self: this
  }), __jsx("use", {
    xlinkHref: "#C",
    fill: "#d37c59",
    __self: this
  }), __jsx("g", {
    fill: "#de8e68",
    __self: this
  }, __jsx("use", {
    xlinkHref: "#D",
    __self: this
  }), __jsx("use", {
    xlinkHref: "#D",
    x: "223.08",
    y: "5.22",
    __self: this
  }), __jsx("use", {
    xlinkHref: "#E",
    __self: this
  }), __jsx("use", {
    xlinkHref: "#E",
    x: "-23.48",
    y: "-20.87",
    __self: this
  })), __jsx("use", {
    xlinkHref: "#E",
    x: "53.5",
    y: "-11.74",
    fill: "#d37c59",
    __self: this
  }), __jsx("use", {
    xlinkHref: "#E",
    x: "99.15",
    fill: "#de8e68",
    __self: this
  }), __jsx("g", {
    fill: "#d37c59",
    __self: this
  }, __jsx("use", {
    xlinkHref: "#C",
    x: "360.07",
    y: "10.44",
    __self: this
  }), __jsx("use", {
    xlinkHref: "#D",
    x: "50.88",
    y: "48.27",
    __self: this
  })), __jsx("path", {
    d: "M768.94 568a109.22 109.22 0 0 0 71.308 2.048 109.255 109.255 0 0 0 57.363-42.4A109.22 109.22 0 0 0 889 393.06C867.27 494.27 822 544.48 768.94 568z",
    fill: "#f76c54",
    __self: this
  }), __jsx("path", {
    d: "M629.72 518l-39.06-112.53a28.29 28.29 0 0 0-26.74-19H67.35a28.177 28.177 0 0 0-16.337 5.214A28.19 28.19 0 0 0 40.72 405.4L1.58 518.15a28.19 28.19 0 0 0 3.666 25.586 28.18 28.18 0 0 0 10.05 8.71 28.198 28.198 0 0 0 12.925 3.134H603a28.293 28.293 0 0 0 23.048-11.901 28.298 28.298 0 0 0 4.95-12.394A28.29 28.29 0 0 0 629.72 518z",
    fill: "#45d4ff",
    __self: this
  }), __jsx("path", {
    d: "M583.7 553.84v57.3h321.5v-57.3H583.7z",
    fill: "#fcc486",
    __self: this
  }), __jsx("path", {
    d: "M629.72 518l-39.06-112.53a28.29 28.29 0 0 0-26.74-19h-77.57c-13.45 62.32-40.05 125.74-81 169.13H603a28.296 28.296 0 0 0 23.06-11.907 28.317 28.317 0 0 0 4.95-12.402A28.29 28.29 0 0 0 629.72 518z",
    fill: "#1ccff9",
    __self: this
  }), __jsx("g", {
    fill: "#fed385",
    __self: this
  }, __jsx("use", {
    xlinkHref: "#F",
    __self: this
  }), __jsx("use", {
    xlinkHref: "#F",
    y: "-67.08",
    __self: this
  }), __jsx("use", {
    xlinkHref: "#F",
    x: "-321.5",
    y: "-.7",
    __self: this
  }), __jsx("path", {
    d: "M583.7 586c20.843 0 37.74-16.897 37.74-37.74s-16.897-37.74-37.74-37.74-37.74 16.897-37.74 37.74S562.867 586 583.7 586z",
    __self: this
  })), __jsx("g", {
    fill: "#de8e68",
    __self: this
  }, __jsx("use", {
    xlinkHref: "#E",
    x: "-231.76",
    y: "187.41",
    __self: this
  }), __jsx("path", {
    d: "M157.96 610.9c10.68 0 19.34-8.66 19.34-19.34s-8.66-19.34-19.34-19.34-19.34 8.66-19.34 19.34 8.66 19.34 19.34 19.34z",
    __self: this
  })), __jsx("path", {
    d: "M458.15 441.02h-285v60h285v-60zm267.68-296.5h-241v79h241v-79z",
    fill: "#f2f2f2",
    __self: this
  }), __jsx("path", {
    d: "M536.83 155.53h-37v54h37v-54zm147 15h-133v24h133v-24z",
    fill: "#c4c4c4",
    __self: this
  }), __jsx("defs", {
    __self: this
  }, __jsx("path", {
    id: "B",
    d: "M611.54 65.34c12.24 0 22.16-9.92 22.16-22.16s-9.92-22.16-22.16-22.16-22.16 9.92-22.16 22.16 9.92 22.16 22.16 22.16z",
    __self: this
  }), __jsx("path", {
    id: "C",
    d: "M132.93 430.9c24.14 0 43.7-19.57 43.7-43.7s-19.57-43.7-43.7-43.7-43.7 19.57-43.7 43.7 19.57 43.7 43.7 43.7z",
    __self: this
  }), __jsx("path", {
    id: "D",
    d: "M212.52 417.85c29.9 0 54.14-24.24 54.14-54.14s-24.24-54.14-54.14-54.14-54.14 24.24-54.14 54.14 24.24 54.14 54.14 54.14z",
    __self: this
  }), __jsx("path", {
    id: "E",
    d: "M320.8 423.07c21.257 0 38.5-17.233 38.5-38.5s-17.233-38.5-38.5-38.5-38.5 17.233-38.5 38.5 17.233 38.5 38.5 38.5z",
    __self: this
  }), __jsx("path", {
    id: "F",
    d: "M905.2 653.78c20.843 0 37.74-16.897 37.74-37.74s-16.897-37.74-37.74-37.74-37.74 16.897-37.74 37.74 16.897 37.74 37.74 37.74z",
    __self: this
  })));
};

Toys.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 943 688",
  fill: "none"
};


const Cta = () => {
  return __jsx("div", {
    className: "jsx-126338113" + " " + "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-126338113" + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-126338113" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-126338113" + " " + "cta-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-126338113" + " " + "visual",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(Toys, {
    className: "toys",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-126338113" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-126338113" + " " + "secondary-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Za\u0142\xF3\u017C konto i wystaw swojego zwierzaka do adopcji"), __jsx("p", {
    className: "jsx-126338113",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dictum nisl. Etiam at tincidunt ex. Nunc in nibh vitae diam semper tempus eget sed neque. Morbi auctor ac elit vitae consectetur. Suspendisse ultrices dictum sapien, nec accumsan sem ornare ac. Aliquam at varius orci."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/rejestracja",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-126338113" + " " + "a btn secondary-btn signup-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Za\u0142\xF3\u017C konto")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "633174178",
    __self: undefined
  }, ".cta.jsx-126338113{background:url(\"/room.jpg\") left center;}.overlay.jsx-126338113{background:#ef4476;}.cta-content.jsx-126338113{padding:30px 0 40px;}.visual.jsx-126338113{width:200px;margin:0 auto;}.content.jsx-126338113{color:white;margin-top:20px;text-align:center;}.content.jsx-126338113 p.jsx-126338113{margin-top:20px;}.signup-btn.jsx-126338113{margin-top:20px;}@media (min-width:1000px){.cta-content.jsx-126338113{padding:40px 0 50px;}.cta-content.jsx-126338113{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.visual.jsx-126338113{width:25%;position:relative;}.content.jsx-126338113{width:75%;padding-left:40px;}}@media (min-width:1400px){.container.jsx-126338113{max-width:60%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhvbWVcXEN0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ1MsQUFHcUQsQUFJckIsQUFJQyxBQUlSLEFBS0EsQUFNSSxBQUlBLEFBS00sQUFJUCxBQUlILEFBS0EsQUFPSSxVQVhJLEFBS0EsRUFqQ04sQUFLRSxFQW1DaEIsRUE3QkYsQUFJQSxHQXZCQSxDQUlBLEFBd0JFLE1BbkJGLEVBS29CLEFBdUJsQixBQUtBLFlBOUNGLE1BbUJBLDRCQWlCRSIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxIb21lXFxDdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb3lzIGZyb20gXCIuLi8uLi9wdWJsaWMvdG95cy5zdmdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgQ3RhID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc3VhbFwiPlxyXG4gICAgICAgICAgICAgIDxUb3lzIGNsYXNzTmFtZT1cInRveXNcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY29uZGFyeS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgWmHFgsOzxbwga29udG8gaSB3eXN0YXcgc3dvamVnbyB6d2llcnpha2EgZG8gYWRvcGNqaVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWRcclxuICAgICAgICAgICAgICAgIGVnZXQgZGljdHVtIG5pc2wuIEV0aWFtIGF0IHRpbmNpZHVudCBleC4gTnVuYyBpbiBuaWJoIHZpdGFlIGRpYW1cclxuICAgICAgICAgICAgICAgIHNlbXBlciB0ZW1wdXMgZWdldCBzZWQgbmVxdWUuIE1vcmJpIGF1Y3RvciBhYyBlbGl0IHZpdGFlXHJcbiAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgdWx0cmljZXMgZGljdHVtIHNhcGllbiwgbmVjIGFjY3Vtc2FuXHJcbiAgICAgICAgICAgICAgICBzZW0gb3JuYXJlIGFjLiBBbGlxdWFtIGF0IHZhcml1cyBvcmNpLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlamVzdHJhY2phXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhIGJ0biBzZWNvbmRhcnktYnRuIHNpZ251cC1idG5cIj5aYcWCw7PFvCBrb250bzwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmN0YSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9yb29tLmpwZ1wiKSBsZWZ0IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZjQ0NzY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmN0YS1jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweCAwIDQwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnZpc3VhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGVudCBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuY3RhLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMCA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY3RhLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52aXN1YWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAudG95cyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdGE7XHJcbiJdfQ== */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Home\\\\Cta.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1268431242",
    __self: undefined
  }, "@media (min-width:1000px){.toys{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhvbWVcXEN0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RnlCLEFBSStCLGtCQUNWLFFBQ21CLDZGQUM3QiIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxIb21lXFxDdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb3lzIGZyb20gXCIuLi8uLi9wdWJsaWMvdG95cy5zdmdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgQ3RhID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc3VhbFwiPlxyXG4gICAgICAgICAgICAgIDxUb3lzIGNsYXNzTmFtZT1cInRveXNcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY29uZGFyeS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgWmHFgsOzxbwga29udG8gaSB3eXN0YXcgc3dvamVnbyB6d2llcnpha2EgZG8gYWRvcGNqaVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWRcclxuICAgICAgICAgICAgICAgIGVnZXQgZGljdHVtIG5pc2wuIEV0aWFtIGF0IHRpbmNpZHVudCBleC4gTnVuYyBpbiBuaWJoIHZpdGFlIGRpYW1cclxuICAgICAgICAgICAgICAgIHNlbXBlciB0ZW1wdXMgZWdldCBzZWQgbmVxdWUuIE1vcmJpIGF1Y3RvciBhYyBlbGl0IHZpdGFlXHJcbiAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ci4gU3VzcGVuZGlzc2UgdWx0cmljZXMgZGljdHVtIHNhcGllbiwgbmVjIGFjY3Vtc2FuXHJcbiAgICAgICAgICAgICAgICBzZW0gb3JuYXJlIGFjLiBBbGlxdWFtIGF0IHZhcml1cyBvcmNpLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlamVzdHJhY2phXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhIGJ0biBzZWNvbmRhcnktYnRuIHNpZ251cC1idG5cIj5aYcWCw7PFvCBrb250bzwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmN0YSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9yb29tLmpwZ1wiKSBsZWZ0IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZjQ0NzY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmN0YS1jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweCAwIDQwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnZpc3VhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGVudCBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuY3RhLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMCA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY3RhLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52aXN1YWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAudG95cyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdGE7XHJcbiJdfQ== */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Home\\\\Cta.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Cta);

/***/ }),

/***/ "./components/Home/Intro.js":
/*!**********************************!*\
  !*** ./components/Home/Intro.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Home\\Intro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Intro = () => {
  return __jsx("div", {
    id: "intro",
    className: "jsx-2959333441" + " " + "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2959333441" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-2959333441" + " " + "secondary-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Najnowsze og\u0142oszenia"), __jsx("div", {
    className: "jsx-2959333441" + " " + "ads",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, ads.map((ad, i) => __jsx("div", {
    key: i,
    className: "jsx-2959333441" + " " + "ad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2959333441" + " " + "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("img", {
    src: ad.photo,
    alt: "zwierz\u0119",
    className: "jsx-2959333441",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-2959333441" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2959333441",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-2959333441" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, ad.title), __jsx("p", {
    className: "jsx-2959333441" + " " + "place",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, ad.voivo, ", ", ad.city)), __jsx("div", {
    className: "jsx-2959333441",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ogloszenie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2959333441" + " " + "see-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Zobacz")), __jsx("p", {
    className: "jsx-2959333441" + " " + "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, ad.time, " temu")))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/ogloszenie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-2959333441" + " " + "a btn secondary-btn see-all-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Zobacz wszystkie"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2959333441",
    __self: undefined
  }, ".intro.jsx-2959333441{padding:30px 0 40px;background:#ededed;text-align:center;}h2.jsx-2959333441{text-align:center;}.ad.jsx-2959333441{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;background:white;}.ad.jsx-2959333441 .image.jsx-2959333441{width:30%;height:120px;}.ad.jsx-2959333441 .image.jsx-2959333441 img.jsx-2959333441{width:100%;height:100%;object-fit:cover;}.ad.jsx-2959333441 .content.jsx-2959333441{width:70%;padding:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;text-align:left;}.ad.jsx-2959333441 .content.jsx-2959333441 div.jsx-2959333441:last-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.ad.jsx-2959333441 .title.jsx-2959333441{font-weight:700;font-size:16px;line-height:1.3;margin-bottom:3px;}.ad.jsx-2959333441 .place.jsx-2959333441{font-size:14px;}.ad.jsx-2959333441 .see-more.jsx-2959333441{color:var(--main-color);font-weight:700;}.ad.jsx-2959333441 .time.jsx-2959333441{font-size:14px;text-align:right;color:gray;}.see-all-btn.jsx-2959333441{margin-top:30px;text-align:center;}@media (min-width:1000px){.intro.jsx-2959333441{padding:50px 0 80px;}.ads.jsx-2959333441{width:700px;margin:0 auto;}.ad.jsx-2959333441 .image.jsx-2959333441{height:140px;}.ad.jsx-2959333441 .title.jsx-2959333441{font-size:18px;margin-bottom:2px;}.ad.jsx-2959333441 .place.jsx-2959333441,.ad.jsx-2959333441 .time.jsx-2959333441{font-size:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEhvbWVcXEludHJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDUyxBQUdpQyxBQU1GLEFBSUwsQUFNSCxBQUtDLEFBTUQsQUFTRyxBQU1HLEFBT0QsQUFJUyxBQUtULEFBTUMsQUFNTSxBQUlSLEFBS0MsQUFJRSxBQU1BLFVBeEVKLEFBV0EsQ0FORCxDQXFESSxDQUtoQixFQTlCRixBQVNtQixBQXlCRyxBQU1wQixDQS9DZSxBQXNCRyxFQTFEcEIsRUFOcUIsQUFzRW5CLEdBckRGLEFBS21CLEFBTUosQ0F5QkcsRUFzQmhCLEtBaENnQixDQWdCTCxDQXlCWCxDQW5CRixLQWhFb0IsQ0FzQnBCLEFBK0JBLEdBTUEsSUFoQm9CLFVBMUNwQixRQTJDQSxTQW5Da0IsQUEwQmMsZ0JBekJiLE9Ba0JLLFVBakJ4QixvRUFrQmdDLGNBT1gsNkZBQ3JCLFFBUGtCLGdCQUNsQiIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxIb21lXFxJbnRyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgSW50cm8gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9cIiBpZD1cImludHJvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNlY29uZGFyeS10aXRsZVwiPk5ham5vd3N6ZSBvZ8WCb3N6ZW5pYTwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHNcIj5cclxuICAgICAgICAgIHthZHMubWFwKChhZCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWQucGhvdG99IGFsdD1cInp3aWVyesSZXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e2FkLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7YWQudm9pdm99LCB7YWQuY2l0eX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL29nbG9zemVuaWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZWUtbW9yZVwiPlpvYmFjejwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aW1lXCI+e2FkLnRpbWV9IHRlbXU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL29nbG9zemVuaWVcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImEgYnRuIHNlY29uZGFyeS1idG4gc2VlLWFsbC1idG5cIj5ab2JhY3ogd3N6eXN0a2llPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuaW50cm8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDAgNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hZCAuaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hZCAuaW1hZ2UgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFkIC5jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hZCAuY29udGVudCBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYWQgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFkIC5wbGFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYWQgLnNlZS1tb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hZCAudGltZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWUtYWxsLWJ0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgIC5pbnRybyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAwIDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hZHMge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFkIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFkIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFkIC5wbGFjZSxcclxuICAgICAgICAgICAgLmFkIC50aW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGFkcyA9IFtcclxuICB7XHJcbiAgICBwaG90bzogXCJrb3QxLmpwZWdcIixcclxuICAgIHRpdGxlOiBcIlBpxJlrbnkgYmXFvG93eSBrb3Rla1wiLFxyXG4gICAgdm9pdm86IFwiTWF6b3dpZWNraWVcIixcclxuICAgIGNpdHk6IFwiV2Fyc3phd2FcIixcclxuICAgIHRpbWU6IFwiMmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBob3RvOiBcInBpZXMxLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiS29jaGFueSBwaWVzZWsgY3pla2EgbmEgd8WCYcWbY2ljaWVsYVwiLFxyXG4gICAgdm9pdm86IFwiUG9tb3Jza2llXCIsXHJcbiAgICBjaXR5OiBcIkdkeW5pYVwiLFxyXG4gICAgdGltZTogXCI0Z1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGhvdG86IFwicGllczIucG5nXCIsXHJcbiAgICB0aXRsZTogXCJXaWVybnkgYmlhxYJvZnV0cnphc3R5IHBpZXNcIixcclxuICAgIHZvaXZvOiBcIk1hxYJvcG9sc2tpZVwiLFxyXG4gICAgY2l0eTogXCJLcmFrw7N3XCIsXHJcbiAgICB0aW1lOiBcIjVnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwaG90bzogXCJwYXB1Z2ExLmpwZ1wiLFxyXG4gICAgdGl0bGU6IFwiS29sb3Jvd2EgcGFwdWdhXCIsXHJcbiAgICB2b2l2bzogXCJNYcWCb3BvbHNraWVcIixcclxuICAgIGNpdHk6IFwiWmFrb3BhbmVcIixcclxuICAgIHRpbWU6IFwiNmdcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm87XHJcbiJdfQ== */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Home\\\\Intro.js */"));
};

const ads = [{
  photo: "kot1.jpeg",
  title: "Piękny beżowy kotek",
  voivo: "Mazowieckie",
  city: "Warszawa",
  time: "2g"
}, {
  photo: "pies1.jpg",
  title: "Kochany piesek czeka na właściciela",
  voivo: "Pomorskie",
  city: "Gdynia",
  time: "4g"
}, {
  photo: "pies2.png",
  title: "Wierny białofutrzasty pies",
  voivo: "Małopolskie",
  city: "Kraków",
  time: "5g"
}, {
  photo: "papuga1.jpg",
  title: "Kolorowa papuga",
  voivo: "Małopolskie",
  city: "Zakopane",
  time: "6g"
}];
/* harmony default export */ __webpack_exports__["default"] = (Intro);

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
    className: "jsx-4040379432" + " " + `navbar ${props.notHome ? "not-home" : ""}`,
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
    className: "jsx-4040379432" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-4040379432" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "adoptuj", __jsx("span", {
    className: "jsx-4040379432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "zwierzaka"), ".pl"))), __jsx("div", {
    className: "jsx-4040379432" + " " + "hamburger-box",
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
    className: "jsx-4040379432" + " " + `nav ${isActive ? "is-active" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-4040379432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-4040379432",
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
    className: "jsx-4040379432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Kontakt"))), __jsx("li", {
    className: "jsx-4040379432",
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
    className: "jsx-4040379432",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Logowanie"))), __jsx("li", {
    className: "jsx-4040379432",
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
    className: "jsx-4040379432" + " " + "signup-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Rejestracja"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4040379432",
    __self: undefined
  }, ".navbar.jsx-4040379432{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:25px 0;}.nav.jsx-4040379432{position:absolute;z-index:20;right:0;top:0;padding:25px;background:rgba(0,0,0,0.7);color:white;padding-top:20px;width:100%;-webkit-transform:translateY(-200px);-ms-transform:translateY(-200px);transform:translateY(-200px);-webkit-transition:-webkit-transform 0.2s ease;-webkit-transition:transform 0.2s ease;transition:transform 0.2s ease;}.nav.is-active.jsx-4040379432{-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);}ul.jsx-4040379432{list-style-type:none;}li.jsx-4040379432{margin-bottom:14px;}li.jsx-4040379432:last-child{margin-bottom:0;}a.jsx-4040379432{color:#fff;}a.jsx-4040379432:hover{color:#f5f5f5;}.hamburger-box.jsx-4040379432{position:relative;height:32px;width:40px;}.title.jsx-4040379432{visibility:hidden;}.title.jsx-4040379432 h2.jsx-4040379432{font-size:1.2rem;color:var(--font-color);}.title.jsx-4040379432 h2.jsx-4040379432{font-size:1.2rem;color:var(--font-color);}.not-home.jsx-4040379432 .title.jsx-4040379432{visibility:visible;}.not-home.jsx-4040379432 .title.jsx-4040379432{-webkit-text-decoration:none;text-decoration:none;}.not-home.jsx-4040379432 .title.jsx-4040379432 h2.jsx-4040379432 span.jsx-4040379432{color:var(--main-color);}.not-home.jsx-4040379432 .nav.jsx-4040379432{background:#000;}@media (min-width:1024px){.navbar.jsx-4040379432{height:auto;}.nav.jsx-4040379432{background:transparent;position:relative;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px);padding:0;}ul.jsx-4040379432{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.jsx-4040379432{margin-bottom:0;margin-left:24px;}li.jsx-4040379432:last-child{margin-left:16px;}a.jsx-4040379432{-webkit-text-decoration:none;text-decoration:none;font-weight:500;}.signup-btn.jsx-4040379432{background:var(--main-color);color:white;-webkit-transition:background 0.2s ease;transition:background 0.2s ease;border-radius:99px;padding:8px 18px 10px;border:none;display:inline-block;}.signup-btn.jsx-4040379432:hover{background:#e3396b;}.title.jsx-4040379432 h2.jsx-4040379432{font-size:1.5rem;}.not-home.jsx-4040379432 a.jsx-4040379432{color:var(--font-color);}.not-home.jsx-4040379432 .signup-btn.jsx-4040379432{color:#fff;}.not-home.jsx-4040379432 .nav.jsx-4040379432{background:transparent;}}@media (min-width:1280px){li.jsx-4040379432{font-size:18px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXE5hdmJhclxcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDUyxBQUcwQixBQU9LLEFBY1EsQUFJTCxBQUlGLEFBSUgsQUFJTCxBQUlHLEFBSUksQUFNQSxBQUlELEFBS0EsQUFLRSxBQUlFLEFBSUcsQUFJUixBQUtGLEFBSVcsQUFPVixBQU1HLEFBS0MsQUFJSSxBQUtRLEFBVVYsQUFJRixBQUlPLEFBSWIsQUFJWSxBQU1SLFdBM0duQixBQWtHRSxDQXJEQSxFQXpDRixDQXdHRSxDQWhIRixBQTRDQSxBQXNCcUIsQ0E1Q0ssQUFLQSxBQTRDeEIsQUF1QkEsQ0F4SFcsQUFzQ0MsQUFNZCxDQXRCQSxBQW9DQSxBQTBERSxFQWxHRixFQTZEc0IsQUFxRHBCLENBbEVGLEFBMERFLEtBM0hRLEFBeUdNLENBbkVILEdBc0RYLElBM0ZNLElBc0NSLEFBU0EsQUFLQSxBQTBCOEIsQUEyQk0sRUF4R3JCLE9BMkRmLEFBdUNvQixNQWpHWSxVQWtHOUIsUUE3R21CLEFBNkZRLFNBakZmLE9BU2QsS0FSbUIsaUJBQ04sQ0FxR1UsVUFwR1EsUUF5RWpCLENBNEJZLFNBM0J4QixhQTRCYyxZQUNTLENBckhPLElBNkZULGdCQXlCckIsbUNBdkcrQiwwQ0ErRS9CLGtCQTdGZSxlQUNqQiwwQ0FjQSIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxOYXZiYXJcXE5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gXCIuL0hhbWJ1cmdlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2YmFyICR7cHJvcHMubm90SG9tZSA/IFwibm90LWhvbWVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIGFkb3B0dWo8c3Bhbj56d2llcnpha2E8L3NwYW4+LnBsXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuICAgICAgICA8SGFtYnVyZ2VyIGlzQWN0aXZlPXtpc0FjdGl2ZX0gc2V0SXNBY3RpdmU9e3NldElzQWN0aXZlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9e2BuYXYgJHtpc0FjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rb250YWt0XCI+XHJcbiAgICAgICAgICAgICAgPGE+S29udGFrdDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dvd2FuaWVcIj5cclxuICAgICAgICAgICAgICA8YT5Mb2dvd2FuaWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVqZXN0cmFjamFcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzaWdudXAtYnRuXCI+UmVqZXN0cmFjamE8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYXYuaXMtYWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhhbWJ1cmdlci1ib3gge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aXRsZSBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubm90LWhvbWUgLnRpdGxlIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubm90LWhvbWUgLnRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ub3QtaG9tZSAudGl0bGUgaDIgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubm90LWhvbWUgLm5hdiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zaWdudXAtYnRuIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2U7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMThweCAxMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zaWdudXAtYnRuOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTMzOTZiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUgaDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm90LWhvbWUgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm90LWhvbWUgLnNpZ251cC1idG4ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm90LWhvbWUgLm5hdiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Navbar\\\\Navbar.js */"));
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
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

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

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


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
/* harmony import */ var _components_Home_Intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Intro */ "./components/Home/Intro.js");
/* harmony import */ var _components_Home_Cta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/Cta */ "./components/Home/Cta.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const index = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_components_Home_Intro__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(_components_Home_Cta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 4:
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