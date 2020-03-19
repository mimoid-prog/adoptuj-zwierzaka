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
    className: "jsx-3041710127",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "firstName",
    className: "jsx-3041710127",
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
    className: "jsx-3041710127",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), formik.errors.firstName ? __jsx("p", {
    className: "jsx-3041710127" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, formik.errors.firstName) : null, __jsx("label", {
    htmlFor: "lastName",
    className: "jsx-3041710127",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Nazwisko"), __jsx("input", {
    id: "lastName",
    name: "lastName",
    type: "text",
    onChange: formik.handleChange,
    value: formik.values.lastName,
    className: "jsx-3041710127",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), formik.errors.lastName ? __jsx("p", {
    className: "jsx-3041710127" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, formik.errors.lastName) : null, __jsx("label", {
    htmlFor: "email",
    className: "jsx-3041710127",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Adres e-mail"), __jsx("input", {
    id: "email",
    name: "email",
    type: "email",
    onChange: formik.handleChange,
    value: formik.values.email,
    className: "jsx-3041710127",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), formik.errors.email ? __jsx("p", {
    className: "jsx-3041710127" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, formik.errors.email) : null, __jsx("label", {
    htmlFor: "phone",
    className: "jsx-3041710127",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Telefon"), __jsx("input", {
    id: "phone",
    name: "phone",
    type: "text",
    onChange: formik.handleChange,
    value: formik.values.phone,
    className: "jsx-3041710127",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), formik.errors.phone ? __jsx("p", {
    className: "jsx-3041710127" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, formik.errors.phone) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3041710127",
    __self: this
  }, "form.jsx-3041710127{width:400px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEZvcm1zXFxTaWdudXBGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGUyxBQUd5QixZQUNFLGNBQ0QsMEVBQ1MsOEVBQ3hCIiwiZmlsZSI6Ik06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEZvcm1zXFxTaWdudXBGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcblxyXG5jb25zdCB2YWxpZGF0ZSA9IHZhbHVlcyA9PiB7XHJcbiAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgaWYgKCF2YWx1ZXMuZmlyc3ROYW1lKSB7XHJcbiAgICBlcnJvcnMuZmlyc3ROYW1lID0gXCJQb2xlIG5pZSBtb8W8ZSBiecSHIHB1c3RlXCI7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZXMuZmlyc3ROYW1lLmxlbmd0aCA+IDE1KSB7XHJcbiAgICBlcnJvcnMuZmlyc3ROYW1lID0gXCJNYWtzeW1hbG5hIGlsb8WbxIcgem5ha8OzdyB0byAxNVwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF2YWx1ZXMubGFzdE5hbWUpIHtcclxuICAgIGVycm9ycy5sYXN0TmFtZSA9IFwiUG9sZSBuaWUgbW/FvGUgYnnEhyBwdXN0ZVwiO1xyXG4gIH0gZWxzZSBpZiAodmFsdWVzLmxhc3ROYW1lLmxlbmd0aCA+IDIwKSB7XHJcbiAgICBlcnJvcnMubGFzdE5hbWUgPSBcIk1ha3N5bWFsbmEgaWxvxZvEhyB6bmFrw7N3IHRvIDIwXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoIXZhbHVlcy5lbWFpbCkge1xyXG4gICAgZXJyb3JzLmVtYWlsID0gXCJQb2xlIG5pZSBtb8W8ZSBiecSHIHB1c3RlXCI7XHJcbiAgfSBlbHNlIGlmICghL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpKSB7XHJcbiAgICBlcnJvcnMuZW1haWwgPSBcIk5pZXByYXdpZMWCb3d5IGFkcmVzIGUtbWFpbFwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF2YWx1ZXMucGhvbmUpIHtcclxuICAgIGVycm9ycy5waG9uZSA9IFwiUG9sZSBuaWUgbW/FvGUgYnnEhyBwdXN0ZVwiO1xyXG4gIH0gZWxzZSBpZiAodmFsdWVzLnBob25lLmxlbmd0aCA+IDEyKSB7XHJcbiAgICBlcnJvcnMucGhvbmUgPSBcIk1ha3N5bWFsbmEgaWxvxZvEhyB6bmFrw7N3IHRvIDEyXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3JzO1xyXG59O1xyXG5cclxuY29uc3QgU2lnbnVwRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGhvbmU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0ZSxcclxuICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xyXG4gICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5JbWnEmTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZmlyc3ROYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICB7Zm9ybWlrLmVycm9ycy5maXJzdE5hbWUgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JzLW1lc3NhZ2VcIj57Zm9ybWlrLmVycm9ycy5maXJzdE5hbWV9PC9wPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPk5hendpc2tvPC9sYWJlbD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubGFzdE5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtmb3JtaWsuZXJyb3JzLmxhc3ROYW1lID8gKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9ycy1tZXNzYWdlXCI+e2Zvcm1pay5lcnJvcnMubGFzdE5hbWV9PC9wPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkFkcmVzIGUtbWFpbDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH1cclxuICAgICAgLz5cclxuICAgICAge2Zvcm1pay5lcnJvcnMuZW1haWwgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JzLW1lc3NhZ2VcIj57Zm9ybWlrLmVycm9ycy5lbWFpbH08L3A+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+VGVsZWZvbjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBob25lfVxyXG4gICAgICAvPlxyXG4gICAgICB7Zm9ybWlrLmVycm9ycy5waG9uZSA/IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvcnMtbWVzc2FnZVwiPntmb3JtaWsuZXJyb3JzLnBob25lfTwvcD5cclxuICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBGb3JtO1xyXG4iXX0= */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Forms\\\\SignupForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ })

})
//# sourceMappingURL=rejestracja.js.8f08e321f06c8c42f8b5.hot-update.js.map