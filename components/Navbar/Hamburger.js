import React from "react";

const Hamburger = props => {
  return (
    <>
      <div
        className={`hamburger hamburger--3dx ${props.isActive && "is-active"}`}
        type="button"
        onClick={() => props.setIsActive(!props.isActive)}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>

      <style jsx>
        {`
          .hamburger {
            padding: 15px 15px;
            display: inline-block;
            cursor: pointer;
            transition-property: opacity, filter;
            transition-duration: 0.15s;
            transition-timing-function: linear;
            font: inherit;
            color: inherit;
            text-transform: none;
            background-color: transparent;
            border: 0;
            margin: 0;
            overflow: visible;

            position: absolute;
            z-index: 99;
          }

          .hamburger.is-active .hamburger-inner,
          .hamburger.is-active .hamburger-inner::before,
          .hamburger.is-active .hamburger-inner::after {
            background-color: #000;
          }

          .hamburger-box {
            width: 40px;
            height: 24px;
            display: inline-block;
            position: relative;
          }

          .hamburger-inner {
            display: block;
            top: 50%;
            margin-top: -2px;
          }
          .hamburger-inner,
          .hamburger-inner::before,
          .hamburger-inner::after {
            width: 40px;
            height: 4px;
            background-color: #000;
            border-radius: 4px;
            position: absolute;
            transition-property: transform;
            transition-duration: 0.15s;
            transition-timing-function: ease;
          }
          .hamburger-inner::before,
          .hamburger-inner::after {
            content: "";
            display: block;
          }
          .hamburger-inner::before {
            top: -10px;
          }
          .hamburger-inner::after {
            bottom: -10px;
          }

          .hamburger--3dx .hamburger-box {
            perspective: 80px;
          }

          .hamburger--3dx .hamburger-inner {
            transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
              background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
          }
          .hamburger--3dx .hamburger-inner::before,
          .hamburger--3dx .hamburger-inner::after {
            transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
          }

          .hamburger--3dx.is-active .hamburger-inner {
            background-color: transparent !important;
            transform: rotateY(180deg);
            background: #fff;
          }
          .hamburger--3dx.is-active .hamburger-inner::before {
            transform: translate3d(0, 10px, 0) rotate(45deg);
            background: #fff;
          }
          .hamburger--3dx.is-active .hamburger-inner::after {
            transform: translate3d(0, -10px, 0) rotate(-45deg);
            background: #fff;
          }

          @media (min-width: 1024px) {
            .hamburger {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Hamburger;
