import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"

import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" style={{ fontWeight: "bold", fontSize: "25px" }}>
            <span style={{ color: "#102A42" }}>Gaurav</span>{" "}
            <span style={{ color: "#2CAEBA" }}>Adhikari</span>
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks toggleSidebar={toggleSidebar} styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Navbar
