import React from "react"
import Footer from './Footer'
import Header from './Header'

const Layout = ({children})=>{
    return (
        <>
        <div className="wrapp">
            <Header/>
            <div className="container">
                <main>
                    {children}
                </main>
            </div>    
        </div>
        <Footer/>
        </>
    )
}

export default Layout;