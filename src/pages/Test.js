import React, { useState } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import GetCases from './../api/GetCases';
import PostCase from './../api/PostCase';
const Test = () => {
    return (
        <>
            <Header />
            <div className = "content">
              <GetCases />
              <PostCase />
            </div>
            <Footer />
        </>
    )
}

export default Test;
