import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return <div className="main-page-background">
    <Link to={`/custom`}><div className="link-to-customs"></div></Link>
  </div>;
};

export default Main;
