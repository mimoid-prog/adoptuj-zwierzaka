import React from "react";
import Layout from "../components/Layouts/BasicLayout";
import Girl from "svg-react-loader?name=Girl!../public/404-colored.svg";

const Custom404 = () => {
  return (
    <Layout>
      <div className="custom404">
        <h2>Błąd - nie znaleziono podstrony</h2>
        <Girl className="girl-svg" />
      </div>

      <style global jsx>
        {`
          .girl-svg {
            max-width: 100%;
            margin-top: 30px;
          }

          @media (min-width: 500px) {
            .custom404 {
              text-align: center;
            }

            .girl-svg {
              max-width: 50%;
              display: block;
              margin: 40px auto;
            }
          }

          @media (min-width: 1024px) {
            .girl-svg {
              max-width: 450px;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Custom404;
