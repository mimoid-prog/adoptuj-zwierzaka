import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <Link href="/">
        <a className="a logo-link">
          <h2 className="logo">adoptujzwierzaka.pl</h2>
        </a>
      </Link>

      <style jsx>
        {`
          .footer {
            background: #242424;
            padding: 30px 0;
            text-align: center;
          }

          .logo-link {
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
