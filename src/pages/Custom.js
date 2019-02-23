import React, { useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Header from './../components/Header'
import Footer from './../components/Footer'
import NewToken from '../api/NewToken';
import Test from "../pages/Test";

const Custom = () => {
    const [isFirstActive, setIsFirstActive] = useState(true);
    const toggleBackground = () => {
      setIsFirstActive(!isFirstActive)
    }
    return (
        <>
            <Header />
            <Link to={`/custom/payments`}><div className="payments-button">

            </div></Link>

            <div className = "content">
              <div className = "container">
                <div className = "input-form">
                  <NewToken />
                </div>
              </div>
            </div>
            <Footer />

        </>
    )
}

export default Custom;
