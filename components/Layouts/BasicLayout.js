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
          .basic-layout {
            display: flex;
            width: 100%;
            min-height: 100vh;
            flex-direction: column;
          }

          .basic-layout div {
            width: 100%;
          }

          .content {
            background-color: #ededed;
            padding: 2rem 0 4rem;
            flex: 1 0 auto;
          }
        `}
      </style>
    </div>
  );
};

export default BasicLayout;
