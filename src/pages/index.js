import * as React from "react"
import ProjectCards from "../components/project-card"
import Technologies from "../components/technologies"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi, I'm Christa</h1>
    <p>I'm a front-end engineer and user experience advocate.</p>
    <p>Currently working as a software engineer in the SaaS industry.</p>

    <hr className="linebreak" />

    <Technologies />

    <hr className="linebreak" />

    <ProjectCards />
  </Layout>
)

export default IndexPage
