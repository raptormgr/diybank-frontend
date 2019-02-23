import React, { useState } from 'react';
import GetCases from './../api/GetCases';
import PostCase from './../api/PostCase';
const Test = () => {
    return (
        <div className = "content">
            <GetCases />
            <PostCase />
        </div>
    )
}

export default Test;
