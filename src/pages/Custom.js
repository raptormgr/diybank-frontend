import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return <div className="custom-page-background">
    <Link to={`/custom/payments`}><div className="link-to-customs"></div></Link>
  </div>;
};

export default Main;
