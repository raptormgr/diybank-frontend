import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header-inner">
                <Link to={`/login`}>
                    <div className="logout-button" />
                </Link>
                <Link to={`/`}>
                    <div className="link-to-main-page" />
                </Link>
                <Link to={`/custom`}>
                    <div className="link-to-customs" />
                </Link>
            </div>
        </div>
    )
}

export default Header
