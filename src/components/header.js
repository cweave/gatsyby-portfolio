import React from "react"
import ColorModeToggle from "./color-mode-toggle"
import "../styles/components/header.scss"
import Burch from "../assets/burch.svg"

const Header = ({ siteTitle, defaultColor }) => {
  return (
    <header>
      <Burch title={`${siteTitle} logo`} />

      <div className="toggle">
        <ColorModeToggle defaultColor={defaultColor} />
      </div>
    </header>
  )
}

export default Header
