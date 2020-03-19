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
/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.module.css */ "./components/Forms/form.module.css");
/* harmony import */ var _form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_form_module_css__WEBPACK_IMPORTED_MODULE_3__);
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
      lineNumber: 49
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "firstName",
    className: "jsx-1513038886",
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
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), formik.touched.firstName && formik.errors.firstName ? __jsx("p", {
    className: "jsx-1513038886" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, formik.errors.firstName) : null, __jsx("label", {
    htmlFor: "lastName",
    className: "jsx-1513038886",
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
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), formik.touched.lastName && formik.errors.lastName ? __jsx("p", {
    className: "jsx-1513038886" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, formik.errors.lastName) : null, __jsx("label", {
    htmlFor: "email",
    className: "jsx-1513038886",
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
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), formik.touched.email && formik.errors.email ? __jsx("p", {
    className: "jsx-1513038886" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, formik.errors.email) : null, __jsx("label", {
    htmlFor: "phone",
    className: "jsx-1513038886",
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
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), formik.touched.phone && formik.errors.phone ? __jsx("p", {
    className: "jsx-1513038886" + " " + "errors-message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, formik.errors.phone) : null, __jsx("button", {
    type: "submit",
    className: "jsx-1513038886",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Zaloguj si\u0119"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1513038886",
    __self: this
  }, "form.jsx-1513038886{width:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk06XFxQcm9qZWt0eU1cXE5leHRcXEFkb3B0dWpad2llcnpha2FcXGNvbXBvbmVudHNcXEZvcm1zXFxTaWdudXBGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHUyxBQUd5QixZQUNDLDBFQUNTLDhFQUN4QiIsImZpbGUiOiJNOlxcUHJvamVrdHlNXFxOZXh0XFxBZG9wdHVqWndpZXJ6YWthXFxjb21wb25lbnRzXFxGb3Jtc1xcU2lnbnVwRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vZm9ybS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCB2YWxpZGF0ZSA9IHZhbHVlcyA9PiB7XHJcbiAgY29uc3QgZXJyb3JzID0ge307XHJcbiAgaWYgKCF2YWx1ZXMuZmlyc3ROYW1lKSB7XHJcbiAgICBlcnJvcnMuZmlyc3ROYW1lID0gXCJQb2xlIG5pZSBtb8W8ZSBiecSHIHB1c3RlXCI7XHJcbiAgfSBlbHNlIGlmICh2YWx1ZXMuZmlyc3ROYW1lLmxlbmd0aCA+IDE1KSB7XHJcbiAgICBlcnJvcnMuZmlyc3ROYW1lID0gXCJNYWtzeW1hbG5hIGlsb8WbxIcgem5ha8OzdyB0byAxNVwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF2YWx1ZXMubGFzdE5hbWUpIHtcclxuICAgIGVycm9ycy5sYXN0TmFtZSA9IFwiUG9sZSBuaWUgbW/FvGUgYnnEhyBwdXN0ZVwiO1xyXG4gIH0gZWxzZSBpZiAodmFsdWVzLmxhc3ROYW1lLmxlbmd0aCA+IDIwKSB7XHJcbiAgICBlcnJvcnMubGFzdE5hbWUgPSBcIk1ha3N5bWFsbmEgaWxvxZvEhyB6bmFrw7N3IHRvIDIwXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoIXZhbHVlcy5lbWFpbCkge1xyXG4gICAgZXJyb3JzLmVtYWlsID0gXCJQb2xlIG5pZSBtb8W8ZSBiecSHIHB1c3RlXCI7XHJcbiAgfSBlbHNlIGlmICghL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZXMuZW1haWwpKSB7XHJcbiAgICBlcnJvcnMuZW1haWwgPSBcIk5pZXByYXdpZMWCb3d5IGFkcmVzIGUtbWFpbFwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF2YWx1ZXMucGhvbmUpIHtcclxuICAgIGVycm9ycy5waG9uZSA9IFwiUG9sZSBuaWUgbW/FvGUgYnnEhyBwdXN0ZVwiO1xyXG4gIH0gZWxzZSBpZiAodmFsdWVzLnBob25lLmxlbmd0aCA+IDEyKSB7XHJcbiAgICBlcnJvcnMucGhvbmUgPSBcIk1ha3N5bWFsbmEgaWxvxZvEhyB6bmFrw7N3IHRvIDEyXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3JzO1xyXG59O1xyXG5cclxuY29uc3QgU2lnbnVwRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGhvbmU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0ZSxcclxuICAgIG9uU3VibWl0OiB2YWx1ZXMgPT4ge1xyXG4gICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5JbWnEmTwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5maXJzdE5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtmb3JtaWsudG91Y2hlZC5maXJzdE5hbWUgJiYgZm9ybWlrLmVycm9ycy5maXJzdE5hbWUgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JzLW1lc3NhZ2VcIj57Zm9ybWlrLmVycm9ycy5maXJzdE5hbWV9PC9wPlxyXG4gICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIj5OYXp3aXNrbzwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubGFzdE5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtmb3JtaWsudG91Y2hlZC5sYXN0TmFtZSAmJiBmb3JtaWsuZXJyb3JzLmxhc3ROYW1lID8gKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9ycy1tZXNzYWdlXCI+e2Zvcm1pay5lcnJvcnMubGFzdE5hbWV9PC9wPlxyXG4gICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5BZHJlcyBlLW1haWw8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn1cclxuICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH1cclxuICAgICAgLz5cclxuICAgICAge2Zvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JzLW1lc3NhZ2VcIj57Zm9ybWlrLmVycm9ycy5lbWFpbH08L3A+XHJcbiAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlRlbGVmb248L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxyXG4gICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLnBob25lfVxyXG4gICAgICAvPlxyXG4gICAgICB7Zm9ybWlrLnRvdWNoZWQucGhvbmUgJiYgZm9ybWlrLmVycm9ycy5waG9uZSA/IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvcnMtbWVzc2FnZVwiPntmb3JtaWsuZXJyb3JzLnBob25lfTwvcD5cclxuICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5aYWxvZ3VqIHNpxJk8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTtcclxuIl19 */\n/*@ sourceURL=M:\\\\ProjektyM\\\\Next\\\\AdoptujZwierzaka\\\\components\\\\Forms\\\\SignupForm.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./components/Forms/form.module.css":
/*!******************************************!*\
  !*** ./components/Forms/form.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./form.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./components/Forms/form.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./form.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./components/Forms/form.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/postcss-loader/src??__nextjs_postcss!./form.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./components/Forms/form.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./components/Forms/form.module.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/postcss-loader/src??__nextjs_postcss!./components/Forms/form.module.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"form.module.css"}]);


/***/ })

})
//# sourceMappingURL=rejestracja.js.b4720897fe0c046dbd18.hot-update.js.map