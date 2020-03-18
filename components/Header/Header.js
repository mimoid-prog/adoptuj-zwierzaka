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
      <div className="container">
        <Navbar />
        <div className="visual">
          <div className="svg-wrapper" ref={wrapper}>
            <Dog className="svg" />
          </div>
        </div>
        <div className="content">
          <h1>
            adoptuj
            <br />
            <span>zwierzaka</span>.pl
          </h1>
          <p>
            Obejrzyj zwierzaki ze schronisk, wybierz tego, który najbardziej ci
            się podoba i podaruj mu nowy dom
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
            .header {
              background: rgb(170, 209, 93);
              background: linear-gradient(
                90deg,
                rgba(170, 209, 93, 1) 0%,
                rgba(109, 190, 69, 1) 81%,
                rgba(7, 153, 72, 1) 100%
              );
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
