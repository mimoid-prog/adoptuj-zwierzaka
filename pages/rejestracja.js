import React, { useState } from "react";
import Layout from "../components/Layouts/BasicLayout";
import Form from "../components/Forms/SignupForm";
import SignupConfirmation from "../components/LoginAndSignup/SignupConfirmation";

const rejestracja = () => {
  const [isForm, setIsForm] = useState(true);

  const changeIsForm = () => setIsForm(false);

  return (
    <Layout>
      <h2 className="secondary-title">
        {isForm ? "Nowe konto" : "Potwierdzenie rejestracji"}
      </h2>
      <div className="content">
        {isForm ? <Form changeIsForm={changeIsForm} /> : <SignupConfirmation />}
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

export default rejestracja;
