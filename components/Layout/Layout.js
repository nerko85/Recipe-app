import React from "react"
import Footer from './Footer'
import Header from './Header'

const Layout = (props)=>{
    return (
        <>
        <Header/>
        <div className="container">
          <main>
            {props.children}
          </main>
        </div>    
        <Footer/>
        </>
    )
}

export default Layout;