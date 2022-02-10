import React, { useCallback, useEffect, useState } from "react"
import ProjectCards from "../components/project-card"
import Technologies from "../components/technologies"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
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
      <Seo title="Software Engineer" />
      <section>
        <h1>Hi, I'm Christa.</h1>
        <p>I'm a front-end engineer and user experience advocate. Currently working as a software engineer in the SaaS industry.</p>
        <p>I have extensive experience with semantic HTML, SCSS, React, and vanilla JavaScript (ES6+). By daylight, I click away at my rainbow backlit mechanical keyboard. In my spare time, I am a reader of sci-fi and mystery books, an enjoyer of psychological thrillers, and a (novice) hobbyist lockpicker 🔓</p>
      </section>

      <Technologies />
      <ProjectCards />
    </Layout>
  )
}

export default IndexPage
