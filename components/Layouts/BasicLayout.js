import React from "react";
import Navbar from "../Navbar/Navbar";

const BasicLayout = props => {
  return (
    <div className="basic-layout">
      <div className="container">
        <Navbar notHome={true} />
      </div>
      <div className="content">
        <div className="container">{props.children}</div>
      </div>

      <style jsx>
        {`
          .content {
            background-color: #e5e5e5;
            width: 100%;
            padding: 2rem 0 4rem;
          }
        `}
      </style>
    </div>
  );
};

export default BasicLayout;
