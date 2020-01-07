import React from "react"
import Header from "./header"
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
    </div>
  )
}

export default Layout
