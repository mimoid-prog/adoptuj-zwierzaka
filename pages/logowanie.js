import React from "react";
import Layout from "../components/Layouts/BasicLayout";
import Form from "../components/Forms/LoginForm";

const logowanie = () => {
  return (
    <Layout>
      <h2>Logowanie</h2>
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

export default logowanie;
