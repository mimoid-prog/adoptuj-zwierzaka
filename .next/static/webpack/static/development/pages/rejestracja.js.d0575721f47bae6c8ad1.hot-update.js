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
/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.module.css */ "./components/Forms/form.module.css");
/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Forms\\SignupForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




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
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "firstName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Imi\u0119"), __jsx("input", {
    id: "firstName",
    name: "firstName",
    type: "text",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.firstName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), formik.touched.firstName && formik.errors.firstName ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, formik.errors.firstName) : null, __jsx("label", {
    htmlFor: "lastName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Nazwisko"), __jsx("input", {
    id: "lastName",
    name: "lastName",
    type: "text",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.lastName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), formik.touched.lastName && formik.errors.lastName ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, formik.errors.lastName) : null, __jsx("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Adres e-mail"), __jsx("input", {
    id: "email",
    name: "email",
    type: "email",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), formik.touched.email && formik.errors.email ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, formik.errors.email) : null, __jsx("label", {
    htmlFor: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Telefon"), __jsx("input", {
    id: "phone",
    name: "phone",
    type: "text",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.phone,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), formik.touched.phone && formik.errors.phone ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, formik.errors.phone) : null, __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Zaloguj si\u0119"));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ })

})
//# sourceMappingURL=rejestracja.js.d0575721f47bae6c8ad1.hot-update.js.map