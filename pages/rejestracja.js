import React from "react";
import Layout from "../components/Layouts/BasicLayout";
import Form from "../components/Forms/SignupForm";

const rejestracja = () => {
  return (
    <Layout>
      <h2>Nowe konto</h2>
      <Form />
      <style jsx>
        {`
          @media (min-width: 1024px) {
            h2 {
              text-align: center;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default rejestracja;
