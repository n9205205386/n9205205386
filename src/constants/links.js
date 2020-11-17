import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"

const data = [
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blogs",
    url: "/blogs/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link activeClassName="active-nav-link" to={link.url}>
        {link.text}
      </Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass, toggleSidebar, isOpen }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {isOpen && tempLinks}
      {!isOpen && (
        <button
          type="button"
          className={isOpen ? "toggle-btn" : "toggle-btn-desktop"}
          onClick={toggleSidebar}
        >
          <FaAlignRight />
        </button>
      )}
    </ul>
  )
}
