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
      lineNumber: 43
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 47
    },
    __self: this
  }), formik.touched.email && formik.errors.email ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, formik.errors.email) : null, __jsx("label", {
    htmlFor: "password",
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Has\u0142o"), __jsx("div", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.passwordBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
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
      lineNumber: 64
    },
    __self: this
  }), __jsx("button", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.showPassword,
    onClick: handlePasswordOptionsChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, passwordOptions.text)), formik.touched.password && formik.errors.password ? __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, formik.errors.password) : null, __jsx("button", {
    type: "submit",
    className: "btn main-btn ".concat(_form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.submitBtn),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Zarejestruj si\u0119"), __jsx("p", {
    className: _form_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Zak\u0142adaj\u0105c konto, akceptujesz regulamin oraz polityk\u0119 prywatno\u015Bci adoptujzwierzaka.pl."));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ })

})
//# sourceMappingURL=logowanie.js.3f9fb3a08646237c44fb.hot-update.js.map