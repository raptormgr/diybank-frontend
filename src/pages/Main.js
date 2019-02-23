import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'

const Main = () => {
    return (
        <>
            <Header />
            <div className="content" style={{ backgroundImage: './img/main-page.png' }} />
            <Footer />
        </>
    )
}

export default Main
