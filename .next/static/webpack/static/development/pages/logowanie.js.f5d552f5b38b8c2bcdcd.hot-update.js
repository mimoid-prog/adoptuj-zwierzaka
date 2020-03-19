webpackHotUpdate("static\\development\\pages\\logowanie.js",{

/***/ "./components/Forms/LoginForm.js":
/*!***************************************!*\
  !*** ./components/Forms/LoginForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.module.css */ "./components/Forms/form.module.css");
/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "M:\\ProjektyM\\Next\\AdoptujZwierzaka\\components\\Forms\\LoginForm.js";
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

var LoginForm = function LoginForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    type: "password",
    text: "Pokaż"
  }),
      passwordOptions = _useState[0],
      setPasswordOptions = _useState[1];

  var handlePasswordOptionsChange = function handlePasswordOptionsChange(e) {
    e.preventDefault();
    if (passwordOptions.type === "text") setPasswordOptions({
      type: "password",
      text: "Pokaż"
    });else setPasswordOptions({
      type: "text",
      text: "Ukryj"
    });
  };

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useFormik"])({
    initialValues: {
      login: "",
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
      lineNumber: 80
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "firstName",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
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
      lineNumber: 84
    },
    __self: this
  }), formik.touched.firstName && formik.errors.firstName ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, formik.errors.firstName) : null, __jsx("label", {
    htmlFor: "lastName",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
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
      lineNumber: 100
    },
    __self: this
  }), formik.touched.lastName && formik.errors.lastName ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, formik.errors.lastName) : null, __jsx("label", {
    htmlFor: "email",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
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
      lineNumber: 116
    },
    __self: this
  }), formik.touched.email && formik.errors.email ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, formik.errors.email) : null, __jsx("label", {
    htmlFor: "phone",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
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
      lineNumber: 132
    },
    __self: this
  }), formik.touched.phone && formik.errors.phone ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, formik.errors.phone) : null, __jsx("label", {
    htmlFor: "password",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Has\u0142o"), __jsx("div", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.passwordBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("input", {
    id: "password",
    name: "password",
    type: passwordOptions.type,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.password,
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx("button", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.showPassword,
    onClick: handlePasswordOptionsChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, passwordOptions.text)), formik.touched.password && formik.errors.password ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, formik.errors.password) : null, __jsx("button", {
    type: "submit",
    className: "btn main-btn ".concat(_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.submitBtn),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Zarejestruj si\u0119"), __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Zak\u0142adaj\u0105c konto, akceptujesz regulamin oraz polityk\u0119 prywatno\u015Bci adoptujzwierzaka.pl."));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ })

})
//# sourceMappingURL=logowanie.js.f5d552f5b38b8c2bcdcd.hot-update.js.map