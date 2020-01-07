import React from "react"
import { Link } from "gatsby"
import "../CSS/header.css"
import logo from "../images/dogLogo.png"
import logo2 from "../images/dogLogo.png"

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Chihuahua Rescue Logo" className="logo" />
      <div className="container">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <img src={logo2} alt="" className="logoM" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/information/">Information</Link>
            </li>

            <li>
              <Link to="/dogs/">Dogs</Link>
            </li>

            <li>
              <Link to="/adopt/">Adoption</Link>
            </li>

            <li>
              <Link to="/volunteer/">Volunteer</Link>
            </li>

            <li>
              <Link to="/contact/">Contact</Link>
            </li>

            <li>
              <Link to="/donate/">Donate</Link>
            </li>

            <li>
              <Link to="/resources/">Resources</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
