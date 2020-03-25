import React, { useState } from "react";
import { useField } from "formik";
import styles from "./form.module.css";

const TextInput = ({ label, ...props }) => {
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

  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className={styles.label}>
        {label}
      </label>
      <div className={styles.passwordBox}>
        <input
          className={styles.textInput}
          type={passwordOptions.type}
          {...field}
          {...props}
        />
        <button
          className={styles.showPassword}
          onClick={handlePasswordOptionsChange}
        >
          {passwordOptions.text}
        </button>
      </div>

      {meta.touched && meta.error ? (
        <p className={styles.error}>{meta.error}</p>
      ) : null}
    </>
  );
};

export default TextInput;
