webpackHotUpdate("static\\development\\pages\\rejestracja.js",{

/***/ "./components/Forms/SignupForm.js":
/*!****************************************!*\
  !*** ./components/Forms/SignupForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Forms\\SignupForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var validate = function validate(values) {
  var errors = {};

  if (!values.firstName) {
    errors.firstName = "Pole nie może być puste";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Maksymalna ilość znaków to 15";
  }

  if (!values.lastName) {
    errors.lastName = "Pole nie może być puste";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Maksymalna ilość znaków to 20";
  }

  if (!values.email) {
    errors.email = "Pole nie może być puste";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Nieprawidłowy adres e-mail";
  }

  if (!values.phone) {
    errors.phone = "Pole nie może być puste";
  } else if (values.phone.length > 12) {
    errors.phone = "Maksymalna ilość znaków to 12";
  }

  return errors;
};

var SignupForm = function SignupForm() {
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_2__["useFormik"])({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    },
    validate: validate,
    onSubmit: function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return __jsx("form", {
    onSubmit: formik.handleSubmit,
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "firstName",
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Imi\u0119"), __jsx("input", {
    id: "firstName",
    name: "firstName",
    type: "text",
    onChange: formik.handleChange,
    value: formik.values.firstName,
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), formik.errors.firstName ? __jsx("p", {
    className: "jsx-1513038886" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, formik.errors.firstName) : null, __jsx("label", {
    htmlFor: "lastName",
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Nazwisko"), __jsx("input", {
    id: "lastName",
    name: "lastName",
    type: "text",
    onChange: formik.handleChange,
    value: formik.values.lastName,
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), formik.errors.lastName ? __jsx("p", {
    className: "jsx-1513038886" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, formik.errors.lastName) : null, __jsx("label", {
    htmlFor: "email",
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Adres e-mail"), __jsx("input", {
    id: "email",
    name: "email",
    type: "email",
    onChange: formik.handleChange,
    value: formik.values.email,
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), formik.errors.email ? __jsx("p", {
    className: "jsx-1513038886" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, formik.errors.email) : null, __jsx("label", {
    htmlFor: "phone",
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Telefon"), __jsx("input", {
    id: "phone",
    name: "phone",
    type: "text",
    onChange: formik.handleChange,
    value: formik.values.phone,
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), formik.errors.phone ? __jsx("p", {
    className: "jsx-1513038886" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, formik.errors.phone) : null, __jsx("button", {
    type: "submit",
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Zaloguj si\u0119"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1513038886",
    __self: this
  }, "form.jsx-1513038886{width:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEZvcm1zXFxTaWdudXBGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1HUyxBQUd5QixZQUNDLDBFQUNTLDhFQUN4QiIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxGb3Jtc1xcU2lnbnVwRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5cclxuY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xyXG4gIGNvbnN0IGVycm9ycyA9IHt9O1xyXG4gIGlmICghdmFsdWVzLmZpcnN0TmFtZSkge1xyXG4gICAgZXJyb3JzLmZpcnN0TmFtZSA9IFwiUG9sZSBuaWUgbW/FvGUgYnnEhyBwdXN0ZVwiO1xyXG4gIH0gZWxzZSBpZiAodmFsdWVzLmZpcnN0TmFtZS5sZW5ndGggPiAxNSkge1xyXG4gICAgZXJyb3JzLmZpcnN0TmFtZSA9IFwiTWFrc3ltYWxuYSBpbG/Fm8SHIHpuYWvDs3cgdG8gMTVcIjtcclxuICB9XHJcblxyXG4gIGlmICghdmFsdWVzLmxhc3ROYW1lKSB7XHJcbiAgICBlcnJvcnMubGFzdE5hbWUgPSBcIlBvbGUgbmllIG1vxbxlIGJ5xIcgcHVzdGVcIjtcclxuICB9IGVsc2UgaWYgKHZhbHVlcy5sYXN0TmFtZS5sZW5ndGggPiAyMCkge1xyXG4gICAgZXJyb3JzLmxhc3ROYW1lID0gXCJNYWtzeW1hbG5hIGlsb8WbxIcgem5ha8OzdyB0byAyMFwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF2YWx1ZXMuZW1haWwpIHtcclxuICAgIGVycm9ycy5lbWFpbCA9IFwiUG9sZSBuaWUgbW/FvGUgYnnEhyBwdXN0ZVwiO1xyXG4gIH0gZWxzZSBpZiAoIS9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWVzLmVtYWlsKSkge1xyXG4gICAgZXJyb3JzLmVtYWlsID0gXCJOaWVwcmF3aWTFgm93eSBhZHJlcyBlLW1haWxcIjtcclxuICB9XHJcblxyXG4gIGlmICghdmFsdWVzLnBob25lKSB7XHJcbiAgICBlcnJvcnMucGhvbmUgPSBcIlBvbGUgbmllIG1vxbxlIGJ5xIcgcHVzdGVcIjtcclxuICB9IGVsc2UgaWYgKHZhbHVlcy5waG9uZS5sZW5ndGggPiAxMikge1xyXG4gICAgZXJyb3JzLnBob25lID0gXCJNYWtzeW1hbG5hIGlsb8WbxIcgem5ha8OzdyB0byAxMlwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVycm9ycztcclxufTtcclxuXHJcbmNvbnN0IFNpZ251cEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBob25lOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGUsXHJcbiAgICBvblN1Ym1pdDogdmFsdWVzID0+IHtcclxuICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+SW1pxJk8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmZpcnN0TmFtZX1cclxuICAgICAgLz5cclxuICAgICAge2Zvcm1pay5lcnJvcnMuZmlyc3ROYW1lID8gKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9ycy1tZXNzYWdlXCI+e2Zvcm1pay5lcnJvcnMuZmlyc3ROYW1lfTwvcD5cclxuICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TmF6d2lza288L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD1cImxhc3ROYW1lXCJcclxuICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5sYXN0TmFtZX1cclxuICAgICAgLz5cclxuICAgICAge2Zvcm1pay5lcnJvcnMubGFzdE5hbWUgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JzLW1lc3NhZ2VcIj57Zm9ybWlrLmVycm9ycy5sYXN0TmFtZX08L3A+XHJcbiAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkFkcmVzIGUtbWFpbDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH1cclxuICAgICAgLz5cclxuICAgICAge2Zvcm1pay5lcnJvcnMuZW1haWwgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JzLW1lc3NhZ2VcIj57Zm9ybWlrLmVycm9ycy5lbWFpbH08L3A+XHJcbiAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlRlbGVmb248L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5waG9uZX1cclxuICAgICAgLz5cclxuICAgICAge2Zvcm1pay5lcnJvcnMucGhvbmUgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JzLW1lc3NhZ2VcIj57Zm9ybWlrLmVycm9ycy5waG9uZX08L3A+XHJcbiAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+WmFsb2d1aiBzacSZPC9idXR0b24+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm07XHJcbiJdfQ== */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Forms\\\\SignupForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ })

})
//# sourceMappingURL=rejestracja.js.1ebf286a3d7ac8bfa797.hot-update.js.map