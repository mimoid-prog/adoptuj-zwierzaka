import React from "react";
import Toys from "../../public/toys.svg";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="cta">
      <div className="overlay">
        <div className="container">
          <div className="cta-content">
            <div className="visual">
              <Toys className="toys" />
            </div>
            <div className="content">
              <h2 className="secondary-title">
                Załóż konto i wystaw swojego zwierzaka do adopcji
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget dictum nisl. Etiam at tincidunt ex. Nunc in nibh vitae diam
                semper tempus eget sed neque. Morbi auctor ac elit vitae
                consectetur. Suspendisse ultrices dictum sapien, nec accumsan
                sem ornare ac. Aliquam at varius orci.
              </p>
              <Link href="/rejestracja">
                <a className="a btn secondary-btn signup-btn">Załóż konto</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .cta {
            background: url("/room.jpg") left center;
          }

          .overlay {
            background: #ef4476;
          }

          .cta-content {
            padding: 30px 0 40px;
          }

          .visual {
            width: 200px;
            margin: 0 auto;
          }

          .content {
            color: white;
            margin-top: 20px;
            text-align: center;
          }

          .content p {
            margin-top: 20px;
          }

          .signup-btn {
            margin-top: 20px;
          }

          @media (min-width: 1000px) {
            .cta-content {
              padding: 40px 0 50px;
            }

            .cta-content {
              display: flex;
            }

            .visual {
              width: 25%;
              position: relative;
            }

            .content {
              width: 75%;
              padding-left: 40px;
            }
          }

          @media (min-width: 1400px) {
            .container {
              max-width: 60%;
            }
          }
        `}
      </style>
      <style global jsx>{`
        @media (min-width: 1000px) {
          .toys {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Cta;
