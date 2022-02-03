import React, { useEffect } from "react"
import ProjectCards from "../components/project-card"
import Technologies from "../components/technologies"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
	  const windowGlobal = typeof window !== 'undefined' && window.localStorage
    if (windowGlobal && (localStorage.getItem("color-mode") === "dark" || (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem("color-mode")))) {
      document.documentElement.setAttribute("color-mode", "dark")
    }
    console.log(document.documentElement)
  })
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi, I'm Christa</h1>
      <p>I'm a front-end engineer and user experience advocate.</p>
      <p>Currently working as a software engineer in the SaaS industry.</p>

      <hr className="liner" />

      <Technologies />

      <hr />

      <h2>Side Projects</h2>
      <ProjectCards />
    </Layout>
  )
}

export default IndexPage
