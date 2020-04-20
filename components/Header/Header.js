import React, { useRef } from "react";
import Dog from "../../public/doggie.svg";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const wrapper = useRef(null);

  const changeCollarColor = () => {
    const [elements] = wrapper.current.children;
    const collar = elements.getElementById("collar");
    const rand = [
      Math.floor(Math.random() * (255 - 0)) + 0,
      Math.floor(Math.random() * (255 - 0)) + 0,
      Math.floor(Math.random() * (255 - 0)) + 0,
    ];
    collar.style.stroke = `rgb(${rand[0]}, ${rand[1]}, ${rand[2]})`;
  };

  return (
    <div className="header">
      <div className="content-desktop-bg">
        <div className="container">
          <Navbar />
          <div className="header-inner">
            <div className="visual">
              <div className="svg-wrapper" ref={wrapper}>
                <Dog className="dog-svg" onClick={changeCollarColor} />
              </div>
            </div>
            <div className="content">
              <div className="content-inner">
                <h1 className="logo">
                  adoptuj
                  <br />
                  <span>zwierzaka</span>.pl
                </h1>
                <p>
                  Obejrzyj zwierzaki ze schronisk,
                  <span>wybierz tego, który najbardziej Ci się podoba</span> i
                  podaruj mu nowy dom
                </p>
                <div className="see-more-box">
                  <a href="#intro" className="a btn main-btn see-more-btn">
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
            padding-bottom: 10px;
          }

          .content {
            background: white;
            border-radius: 10px;
            padding: 60px 20px 20px;
            transform: translateY(-50px);
          }

          h1 {
            font-size: 30px;
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
              font-size: 4.4rem;
            }
          }

          @media (min-width: 1400px) {
            .content-desktop-bg {
              background-size: 55%;
              background-position: 12% 35%;
            }
          }
        `}
      </style>

      <style global jsx>{`
        .dog-svg:hover {
          cursor: pointer;
        }

        #tail {
          animation: tail 1.4s infinite alternate;
          transform-origin: left bottom;
          transform-box: fill-box;
        }

        @keyframes tail {
          0% {
            transform: rotateZ(-6deg);
          }
          10% {
            transform: rotateZ(0deg);
          }
          25% {
            transform: rotateZ(-6deg);
          }
          35% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(0deg);
          }
        }

        .dog-svg #ear {
          animation: ear 1s;
          animation-iteration-count: infinite;
          transform-origin: top;
          transform-box: fill-box;
          animation-play-state: paused;
        }

        .dog-svg:hover #ear {
          animation-play-state: running;
        }

        @keyframes ear {
          0% {
            transform: rotateZ(0deg);
          }
          30% {
            transform: rotateZ(5deg);
          }
          60% {
            transform: rotateZ(0deg);
          }
          90% {
            transform: rotateZ(3deg);
          }
          100% {
            transform: rotateZ(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
