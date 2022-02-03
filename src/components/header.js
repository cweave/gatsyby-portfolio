import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ColorModeToggle from "./color-mode-toggle"
import "../styles/components/header.scss"
import { Link } from "gatsby"
import Burch from "../assets/burch.svg"

const Header = ({ siteTitle, defaultColor }) => {
  return (
    <header>
      <Link to="/">
        <Burch />
        {/* <StaticImage src="../images/burch-b.webp" width={50} formats={["auto", "webp", "avif"]} alt={siteTitle} /> */}
      </Link>

      <ColorModeToggle defaultColor={defaultColor} />
    </header>
  )
}

export default Header
