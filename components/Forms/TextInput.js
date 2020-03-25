import React from "react";
import { useField } from "formik";
import styles from "./form.module.css";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className={styles.label}>
        {label}
      </label>
      <input className={styles.textInput} {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className={styles.error}>{meta.error}</p>
      ) : null}
    </>
  );
};

export default TextInput;
