import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "./form.module.css";

const validate = values => {
  const errors = {};
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

const SignupForm = () => {
  const [passwordType, setPasswordType] = useState("password");

  const handlePasswordTypeChange = e => {
    e.preventDefault();
    if (passwordType === "text") setPasswordType("password");
    else setPasswordType("text");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label htmlFor="firstName" className={styles.label}>
        Imię
      </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        className={styles.textInput}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <p className={styles.error}>{formik.errors.firstName}</p>
      ) : null}

      <label htmlFor="lastName" className={styles.label}>
        Nazwisko
      </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        className={styles.textInput}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <p className={styles.error}>{formik.errors.lastName}</p>
      ) : null}

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

      <label htmlFor="phone" className={styles.label}>
        Telefon
      </label>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        className={styles.textInput}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <p className={styles.error}>{formik.errors.phone}</p>
      ) : null}

      <label htmlFor="password" className={styles.label}>
        Hasło
      </label>
      <div className={styles.passwordBox}>
        <input
          id="password"
          name="password"
          type={passwordType}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={styles.textInput}
        />
        <button
          className={styles.showPassword}
          onClick={handlePasswordTypeChange}
        >
          Pokaż
        </button>
      </div>

      {formik.touched.password && formik.errors.password ? (
        <p className={styles.error}>{formik.errors.password}</p>
      ) : null}

      <button type="submit" className={`btn main-btn ${styles.submitBtn}`}>
        Zarejestruj się
      </button>
      <p className={styles.info}>
        Zakładając konto, akceptujesz regulamin oraz politykę prywatności
        adoptujzwierzaka.pl.
      </p>
    </form>
  );
};

export default SignupForm;
