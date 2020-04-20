import React from "react";
import Layout from "../components/Layouts/BasicLayout";
import Form from "../components/Forms/LoginForm";

const logowanie = () => {
  return (
    <Layout>
      <h2 className="secondary-title">Logowanie</h2>
      <div className="content">
        <Form />
      </div>

      <style jsx>
        {`
          .content {
            width: 100%;
          }

          @media (min-width: 1024px) {
            h2 {
              text-align: center;
            }

            .content {
              width: 450px;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default logowanie;
