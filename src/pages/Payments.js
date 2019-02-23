import React from "react";
import { Link } from "react-router-dom";

const Payments = () => {
    return (
      <>
        <div
            className="custom-page-background"
            style={{ backgroundImage: "url('/img/3.png')"}}
        >
        </div>
        <Link to={`/custom`}><div className="link-to-customs"></div></Link>
      </>
    );
}

export default Payments;
