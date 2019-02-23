import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
  <>
  <div className="header">
    <Link to={`/custom`}><div className="link-to-customs"></div></Link>
  </div>
  <div className="content">
  </div>
  <div className="footer">
    <Link to={`/custom`}><div className="link-to-customs"></div></Link>
  </div>
  </>
);
};

export default Main;
