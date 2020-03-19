import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "./form.module.css";
import Link from "next/link";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Pole nie może być puste";
  }

  if (!values.password) {
    errors.password = "Pole nie może być puste";
  }

  return errors;
};

const LoginForm = () => {
  const [passwordOptions, setPasswordOptions] = useState({
    type: "password",
    text: "Pokaż"
  });

  const handlePasswordOptionsChange = e => {
    e.preventDefault();
    if (passwordOptions.type === "text")
      setPasswordOptions({
        type: "password",
        text: "Pokaż"
      });
    else
      setPasswordOptions({
        type: "text",
        text: "Ukryj"
      });
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      password: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        Adres e-mail
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={styles.textInput}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className={styles.error}>{formik.errors.email}</p>
      ) : null}

      <label htmlFor="password" className={styles.label}>
        Hasło
      </label>
      <div className={styles.passwordBox}>
        <input
          id="password"
          name="password"
          type={passwordOptions.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={styles.textInput}
        />
        <button
          className={styles.showPassword}
          onClick={handlePasswordOptionsChange}
        >
          {passwordOptions.text}
        </button>
      </div>

      {formik.touched.password && formik.errors.password ? (
        <p className={styles.error}>{formik.errors.password}</p>
      ) : null}

      <button type="submit" className={`btn main-btn ${styles.submitBtn}`}>
        Zaloguj się
      </button>

      <Link href="/przypomnienie-hasla">
        <a className={styles.forgotPasswordBtn}>Zapomniałeś hasła?</a>
      </Link>
    </form>
  );
};

export default LoginForm;
