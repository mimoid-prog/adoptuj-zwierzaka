import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import styles from "./form.module.css";
import * as Yup from "yup";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Maksymalna liczba znaków to 15")
          .required("Pole nie może być puste"),
        lastName: Yup.string()
          .max(30, "Maksymalna liczba znaków to 30")
          .required("Pole nie może być puste"),
        email: Yup.string()
          .email("Nieprawidłowy adres e-mail")
          .required("Pole nie może być puste"),
        phone: Yup.string()
          .max(12, "Maksymalna liczba znaków to 12")
          .required("Pole nie może być puste"),
        password: Yup.string()
          .max(30, "Maksymalna liczba znaków to 30")
          .required("Pole nie może być puste")
      })}
      onSubmit={async (values, { setSubmitting }) => {
        console.log("Submitted");
        setSubmitting(false);
      }}
    >
      <Form className={styles.form}>
        <TextInput label="Imię" name="firstName" type="text" />
        <TextInput label="Nazwisko" name="lastName" type="text" />
        <TextInput label="Adres e-mail" name="email" type="email" />
        <TextInput label="Telefon" name="phone" type="text" />
        <PasswordInput label="Hasło" name="password" />

        <button type="submit" className={`btn main-btn ${styles.submitBtn}`}>
          Zarejestruj się
        </button>
        <p className={styles.info}>
          Zakładając konto, akceptujesz regulamin oraz politykę prywatności
          adoptujzwierzaka.pl.
        </p>
      </Form>
    </Formik>
  );
};

export default SignupForm;
