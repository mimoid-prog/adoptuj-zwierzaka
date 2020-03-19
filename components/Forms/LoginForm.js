import React from "react";
import { useFormik } from "formik";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: ""
    },
    onSubmit: values => {
      alert("Yeah bruh");
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="login">Nazwa lub email</label>
      <input
        id="login"
        name="login"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.login}
      />
      <label htmlFor="password">Hasło</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Zaloguj się</button>
    </form>
  );
};

export default LoginForm;
