import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import styles from "./form.module.css";
import Link from "next/link";
import * as Yup from "yup";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={Yup.object({
        email: Yup.string().required("Pole nie może być puste"),
        password: Yup.string().required("Pole nie może być puste")
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const res = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        });

        const data = await res.json();
        console.log(data);
        setSubmitting(false);
      }}
    >
      <Form className={styles.form}>
        <TextInput label="Adres e-mail" name="email" type="email" />
        <PasswordInput label="Hasło" name="password" />

        <button type="submit" className={`btn main-btn ${styles.submitBtn}`}>
          Zaloguj się
        </button>

        <Link href="/przypomnienie-hasla">
          <a className={styles.forgotPasswordBtn}>Zapomniałeś hasła?</a>
        </Link>
      </Form>
    </Formik>
  );
};

export default LoginForm;
