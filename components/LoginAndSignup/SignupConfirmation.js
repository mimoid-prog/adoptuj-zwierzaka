import React from "react";

const SignupConfirmation = () => {
  return (
    <>
      <div>
        <p>Na podany adres email został wysłany link aktywacyjny.</p>
        <p>Aktywuj konto i zacznij korzystać z adoptujzwierzaka.pl :)</p>
        <img src="/award.png" alt="ikona" />
      </div>
      <style jsx>
        {`
          div {
            margin-top: 10px;
          }

          img {
            margin: 0 auto;
            display: block;
            margin-top: 10px;
          }
        `}
      </style>
    </>
  );
};

export default SignupConfirmation;
