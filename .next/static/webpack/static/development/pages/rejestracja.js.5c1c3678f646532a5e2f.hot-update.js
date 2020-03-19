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
    errors.firstName = "Maksymalna liczba znaków to 15";
  } else if (values.firstName.length < 3) {
    errors.firstName = "Minimalna liczba znaków to 3";
  }

  if (!values.lastName) {
    errors.lastName = "Pole nie może być puste";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Maksymalna liczba znaków to 20";
  } else if (values.lastName.length < 3) {
    errors.lastName = "Minimalna liczba znaków to 3";
  }

  if (!values.email) {
    errors.email = "Pole nie może być puste";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Nieprawidłowy adres e-mail";
  }

  if (!values.phone) {
    errors.phone = "Pole nie może być puste";
  } else if (values.phone.length > 12) {
    errors.phone = "Maksymalna liczba znaków to 12";
  } else if (values.phone.length < 9) {
    errors.phone = "Minimalna liczba znaków to 9";
  }

  if (!values.password) {
    errors.password = "Pole nie może być puste";
  } else if (values.password.length > 30) {
    errors.password = "Maksymalna liczba znaków to 30";
  } else if (values.password.length < 6) {
    errors.password = "Minimalna liczba znaków to 6";
  }

  return errors;
};

var SignupForm = function SignupForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("password"),
      passwordType = _useState[0],
      setPasswordType = _useState[1];

  var handlePasswordTypeChange = function handlePasswordTypeChange(e) {
    e.preventDefault();
    if (passwordType === "text") setPasswordType("password");else setPasswordType("text");
  };

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: ""
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
      lineNumber: 72
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "firstName",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Imi\u0119"), __jsx("input", {
    id: "firstName",
    name: "firstName",
    type: "text",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.firstName,
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), formik.touched.firstName && formik.errors.firstName ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, formik.errors.firstName) : null, __jsx("label", {
    htmlFor: "lastName",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Nazwisko"), __jsx("input", {
    id: "lastName",
    name: "lastName",
    type: "text",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.lastName,
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), formik.touched.lastName && formik.errors.lastName ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, formik.errors.lastName) : null, __jsx("label", {
    htmlFor: "email",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Adres e-mail"), __jsx("input", {
    id: "email",
    name: "email",
    type: "email",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.email,
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), formik.touched.email && formik.errors.email ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, formik.errors.email) : null, __jsx("label", {
    htmlFor: "phone",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Telefon"), __jsx("input", {
    id: "phone",
    name: "phone",
    type: "text",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.phone,
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), formik.touched.phone && formik.errors.phone ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, formik.errors.phone) : null, __jsx("label", {
    htmlFor: "password",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Has\u0142o"), __jsx("div", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.passwordBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("input", {
    id: "password",
    name: "password",
    type: passwordType,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.password,
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx("button", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.showPassword,
    onClick: handlePasswordTypeChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Poka\u017C")), formik.touched.password && formik.errors.password ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, formik.errors.password) : null, __jsx("button", {
    type: "submit",
    className: "btn main-btn ".concat(_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.submitBtn),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Zarejestruj si\u0119"), __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Zak\u0142adaj\u0105c konto, akceptujesz regulamin oraz polityk\u0119 prywatno\u015Bci adoptujzwierzaka.pl."));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ })

})
//# sourceMappingURL=rejestracja.js.5c1c3678f646532a5e2f.hot-update.js.map