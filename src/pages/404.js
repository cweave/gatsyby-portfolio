import React, { useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Chevron from "../assets/chevron-left.svg"

const NotFoundPage = () => {
  const [colorMode, setColorMode] = useState("")

  const toggleColorMode = useCallback(() => {
    const windowGlobal = typeof window !== "undefined" && window.localStorage
    if (windowGlobal && (localStorage.getItem("color-mode") === "dark" || (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("color-mode")))) {
      document.documentElement.setAttribute("color-mode", "dark")
      setColorMode("dark")
    } else {
      document.documentElement.setAttribute("color-mode", "light")
      setColorMode("light")
    }
  }, [])

  useEffect(() => {
    toggleColorMode()
  }, [toggleColorMode])

  return (
    <Layout defaultColor={colorMode}>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/" style={{ display: `flex`, alignItems: `center`, width: `fit-content`, fontSize: `1.15rem` }}>
        <Chevron style={{ height: `25px`, marginRight: `0.25rem` }} />
        Back home
      </Link>
    </Layout>
  )
}

export default NotFoundPage
