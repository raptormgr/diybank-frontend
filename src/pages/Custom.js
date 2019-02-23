import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Custom = () => {
    const [isFirstActive, setIsFirstActive] = useState(true);
    const toggleBackground = () => {
      setIsFirstActive(!isFirstActive)
    }
    return (
        <>
            <div className = "content custom-bg">
              <div className="custom-container">
                <div className="custom-menu">
                  <Link to={`/custom/payments`}>
                    <div className="payments-button"></div>
                  </Link>
                </div>
              </div>
            </div>
        </>
    )
}

export default Custom;
