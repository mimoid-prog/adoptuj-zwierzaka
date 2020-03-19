webpackHotUpdate("static\\development\\pages\\rejestracja.js",{

/***/ "./components/Forms/SignupForm.js":
/*!****************************************!*\
  !*** ./components/Forms/SignupForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Forms\\SignupForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var validate = function validate(values) {};

var SignupForm = function SignupForm() {
  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])({
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "firstName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Imi\u0119"), __jsx("input", {
    id: "firstName",
    name: "firstName",
    type: "text",
    onChange: formik.handleChange,
    value: formik.values.firstName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "lastName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Nazwisko"), __jsx("input", {
    id: "lastName",
    name: "lastName",
    type: "text",
    onChange: formik.handleChange,
    value: formik.values.lastName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Adres e-mail"), __jsx("input", {
    id: "email",
    name: "email",
    type: "email",
    onChange: formik.handleChange,
    value: formik.values.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Telefon"), __jsx("input", {
    id: "phone",
    name: "phone",
    type: "text",
    onChange: formik.handleChange,
    value: formik.values.phone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ })

})
//# sourceMappingURL=rejestracja.js.cf1f5e73eed18cf1852d.hot-update.js.map