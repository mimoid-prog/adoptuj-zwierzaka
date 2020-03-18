import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="navbar">
      <Hamburger isActive={isActive} setIsActive={setIsActive} />
      <nav className={`nav ${isActive && "is-active"}`}>
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
            justify-content: flex-end;
            height: 60px;
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
            margin-top: 14px;
          }

          a {
            color: #fff;
          }

          a:hover {
            color: #f5f5f5;
          }

          @media (min-width: 1024px) {
            .nav {
              background: transparent;
              position: relative;
              transform: translateY(0px);
            }

            ul {
              display: flex;
              justify-content: flex-end;
              align-items: center;
            }

            li {
              margin-top: 0;
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
