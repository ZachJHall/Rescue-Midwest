import React from "react"
import "../CSS/header.css"
import Header from "./header"
import Footer from "../pages/footer"
// import "../CSS/base.css"
import "../CSS/body.css"

const Layout = props => {
  return (
    <div>
      <div className="mainTop">
        <div className="logo1" />
        <div />
      </div>
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
