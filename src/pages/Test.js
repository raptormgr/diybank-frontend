import React, { useState } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import GetCases from './../api/GetCases';
const Test = () => {
    return (
        <>
            <Header />
            <div className = "content">
              <GetCases />
            </div>
            <Footer />
        </>
    )
}

export default Test;
