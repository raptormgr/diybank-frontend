import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to={`/custom`}>
                <div className="link-to-customs" />
            </Link>
        </div>
    )
}

export default Header
