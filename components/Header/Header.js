import React, { useRef, useEffect } from "react";
import Dog from "react-svg-loader!../../public/doggie.svg";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";

const Header = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    console.log("elements: ", elements);
    const tail = elements.getElementById("tail");
    console.log(tail);
  }, []);

  return (
    <div className="header">
      <div className="content-desktop-bg">
        <div className="container">
          <Navbar />
          <div className="header-inner">
            <div className="visual">
              <div className="svg-wrapper" ref={wrapper}>
                <Dog className="svg" />
              </div>
            </div>
            <div className="content">
              <div className="content-inner">
                <h1>
                  adoptuj
                  <br />
                  <span>zwierzaka</span>.pl
                </h1>
                <p>
                  Obejrzyj zwierzaki ze schronisk,{" "}
                  <span>wybierz tego, który najbardziej Ci się podoba</span> i
                  podaruj mu nowy dom
                </p>
                <div className="see-more-box">
                  <a href="#main" className="a btn main-btn see-more-btn">
                    <span>
                      Obejrzyj zwierzaki
                      <img src="/down-arrow.png" alt="Arrow bottom" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .header {
            background: rgb(170, 209, 93);
            background: linear-gradient(
              180deg,
              rgba(170, 209, 93, 1) 0%,
              rgba(109, 190, 69, 1) 81%,
              rgba(7, 153, 72, 1) 100%
            );
            padding: 20px 0 10px;
          }

          .content {
            background: white;
            border-radius: 10px;
            padding: 60px 20px 20px;
            transform: translateY(-50px);
          }

          h1 {
            font-size: 30px;
            font-weight: 900;
            line-height: 1.2;
            text-align: center;
          }

          h1 span {
            color: var(--main-color);
          }

          p {
            margin-top: 20px;
            line-height: 1.4;
          }

          .svg-wrapper {
            width: 60%;
            margin: 0 auto;
            z-index: 10;
            position: relative;
          }

          .see-more-box {
            text-align: center;
          }

          .see-more-btn {
            margin: 30px auto 0;
          }

          .see-more-btn img {
            width: 20px;
            margin-left: 10px;
          }

          .see-more-btn span {
            display: flex;
            align-items: center;
          }

          @media (min-width: 1024px) {
            .header-outer {
              background-image: url("/header-stain.png");
              background-size: cover;
            }

            .header {
              background: rgb(170, 209, 93);
              background: linear-gradient(
                90deg,
                rgba(170, 209, 93, 1) 0%,
                rgba(109, 190, 69, 1) 81%,
                rgba(7, 153, 72, 1) 100%
              );

              padding: 0;
            }

            .header-inner {
              display: flex;
              flex-direction: row-reverse;
              align-items: flex-end;
              padding: 30px 0;
            }

            .content {
              width: 60%;

              background-color: transparent;
              padding: 50px 0;
              transform: translateY(0);
            }

            .content-desktop-bg {
              background: url("/header-stain.png") transparent no-repeat;
              background-size: 65%;
              background-position: -5% 35%;
            }

            .content-inner {
              text-align: center;
            }

            h1 {
              font-size: 3.8rem;
            }

            p {
              font-size: 1.2rem;
            }

            p span {
              display: block;
            }

            .visual {
              width: 40%;
            }

            .svg-wrapper {
              width: 60%;
            }
          }

          @media (min-width: 1280px) {
            .content {
              padding: 80px 0;
            }

            h1 {
              font-size: 4.2rem;
            }
          }

          @media (min-width: 1400px) {
            .content-desktop-bg {
              background-size: 55%;
              background-position: 8% 35%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
