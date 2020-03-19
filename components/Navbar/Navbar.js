import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";

const Navbar = props => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`navbar ${props.notHome ? "not-home" : ""}`}>
      <Link href="/">
        <a className="title">
          <h2>
            adoptuj<span>zwierzaka</span>.pl
          </h2>
        </a>
      </Link>
      <div className="hamburger-box">
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
      </div>
      <nav className={`nav ${isActive ? "is-active" : ""}`}>
        <ul>
          <li>
            <Link href="/kontakt">
              <a>Kontakt</a>
            </Link>
          </li>
          <li>
            <Link href="/logowanie">
              <a>Logowanie</a>
            </Link>
          </li>
          <li>
            <Link href="/rejestracja">
              <a className="signup-btn">Rejestracja</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 25px 0;
          }

          .nav {
            position: absolute;
            z-index: 20;
            right: 0;
            top: 0;
            padding: 25px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding-top: 20px;
            width: 100%;
            transform: translateY(-200px);
            transition: transform 0.2s ease;
          }

          .nav.is-active {
            transform: translateY(0px);
          }

          ul {
            list-style-type: none;
          }

          li {
            margin-bottom: 14px;
          }

          li:last-child {
            margin-bottom: 0;
          }

          a {
            color: #fff;
          }

          a:hover {
            color: #f5f5f5;
          }

          .hamburger-box {
            position: relative;
            height: 32px;
            width: 40px;
          }

          .title {
            visibility: hidden;
          }

          .title h2 {
            font-size: 1.2rem;
            color: var(--font-color);
          }

          .title h2 {
            font-size: 1.2rem;
            color: var(--font-color);
          }

          .not-home .title {
            visibility: visible;
          }

          .not-home .title {
            text-decoration: none;
          }

          .not-home .title h2 span {
            color: var(--main-color);
          }

          .not-home .nav {
            background: #000;
          }

          @media (min-width: 1024px) {
            .navbar {
              height: auto;
            }

            .nav {
              background: transparent;
              position: relative;
              transform: translateY(0px);
              padding: 0;
            }

            ul {
              display: flex;
              justify-content: flex-end;
              align-items: center;
            }

            li {
              margin-bottom: 0;
              margin-left: 24px;
            }

            li:last-child {
              margin-left: 16px;
            }

            a {
              text-decoration: none;
            }

            .signup-btn {
              background: var(--main-color);
              color: white;
              transition: background 0.2s ease;
              border-radius: 99px;
              padding: 6px 18px;
              border: none;
              display: inline-block;
            }

            .signup-btn:hover {
              background: #e3396b;
            }

            .title h2 {
              font-size: 1.5rem;
            }

            .not-home a {
              color: var(--font-color);
            }

            .not-home .signup-btn {
              color: #fff;
            }
          }

          @media (min-width: 1280px) {
            li {
              font-size: 18px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
