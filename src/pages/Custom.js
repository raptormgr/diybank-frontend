import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    const [isFirstActive, setIsFirstActive] = useState(true);
    const toggleBackground = () => {
      setIsFirstActive(!isFirstActive)
    }
    return (
        <>
            <div
                className="custom-page-background"
                style={{ backgroundImage: "url('img/3.png')", display: (isFirstActive) ? 'block' : 'none'}}
            >
                <div
                    className="link-to-customs"
                    style={{ cursor: 'pointer' }}
                    onClick={toggleBackground}
                />
            </div>
            <div
                className="custom-page-background"
                style={{ backgroundImage: "url('img/5.png')", display: (!isFirstActive) ? 'block' : 'none' }}
            >
                <div
                    className="link-to-customs"
                    style={{ cursor: 'pointer' }}
                    onClick={toggleBackground}
                />
            </div>
            <Link to={`/custom/payments`}><div className="payments-button">

            </div></Link>
        </>
    )
}

export default Main
