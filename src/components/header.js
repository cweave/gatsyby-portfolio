import React from "react"
import ColorModeToggle from "./color-mode-toggle"
import "../styles/components/header.scss"
import { Link } from "gatsby"
import Burch from "../assets/burch.svg"

const Header = ({ siteTitle, defaultColor }) => {
  return (
    <header>
      <Link to="/">
        <Burch title="Christa Burch logo" />
      </Link>

      <ColorModeToggle defaultColor={defaultColor} />
    </header>
  )
}

export default Header
